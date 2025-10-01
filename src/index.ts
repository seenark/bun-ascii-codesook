
import * as process from 'node:process';
import { readdir } from "node:fs/promises"
import { animates } from './animates';

class ASCIIAnimator {
  private frames: string[];
  private currentFrame: number = 0;
  private isRunning: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(frames: string[]) {
    this.frames = frames;
  }

  // Clear the terminal screen
  private clearScreen(): void {
    process.stdout.write('\x1b[2J\x1b[H');
  }

  // Move cursor to top-left
  private resetCursor(): void {
    process.stdout.write('\x1b[H');
  }

  // Hide cursor
  private hideCursor(): void {
    process.stdout.write('\x1b[?25l');
  }

  // Show cursor
  private showCursor(): void {
    process.stdout.write('\x1b[?25h');
  }

  // Render current frame
  private renderFrame(): void {
    this.resetCursor();
    process.stdout.write(this.frames[this.currentFrame]!);
    this.currentFrame = (this.currentFrame + 1) % this.frames.length;
  }

  // Start animation
  public start(fps: number = 10): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.clearScreen();
    this.hideCursor();

    const interval = 1000 / fps;
    this.intervalId = setInterval(() => {
      this.renderFrame();
    }, interval);

    // Handle Ctrl+C to stop animation gracefully
    process.on('SIGINT', () => {
      this.stop();
      process.exit(0);
    });
  }

  // Stop animation
  public stop(): void {
    if (!this.isRunning) return;

    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.showCursor();
  }

  // Play animation once
  public async playOnce(fps: number = 10): Promise<void> {
    return new Promise((resolve) => {
      this.clearScreen();
      this.hideCursor();

      let frameIndex = 0;
      const interval = 1000 / fps;

      const playInterval = setInterval(() => {
        this.resetCursor();
        process.stdout.write(this.frames[frameIndex]!);
        frameIndex++;

        if (frameIndex >= this.frames.length) {
          clearInterval(playInterval);
          this.showCursor();
          resolve();
        }
      }, interval);
    });
  }

  // Display a specific frame
  public displayFrame(frameIndex: number): void {
    if (frameIndex < 0 || frameIndex >= this.frames.length) {
      throw new Error(`Frame index ${frameIndex} out of range`);
    }

    this.clearScreen();
    process.stdout.write(this.frames[frameIndex]!);
  }

  // Get frame count
  public getFrameCount(): number {
    return this.frames.length;
  }
}

// Example usage with 7 frames
const frames: string[] = [
  // Frame 1
  `
    ╭─────╮
    │  o  │
    │ \\|/ │
    │  |  │
    │ / \\ │
    ╰─────╯
    Frame 1
    `,

  // Frame 2
  `
    ╭─────╮
    │ \\o/ │
    │  |  │
    │  |  │
    │ / \\ │
    ╰─────╯
    Frame 2
    `,

  // Frame 3
  `
    ╭─────╮
    │  o─ │
    │ /|  │
    │  |  │
    │ / \\ │
    ╰─────╯
    Frame 3
    `,

  // Frame 4
  `
    ╭─────╮
    │  o  │
    │ /|\\ │
    │  |  │
    │ < > │
    ╰─────╯
    Frame 4
    `,

  // Frame 5
  `
    ╭─────╮
    │  o  │
    │ \\|/ │
    │  |  │
    │  /\\ │
    ╰─────╯
    Frame 5
    `,

  // Frame 6
  `
    ╭─────╮
    │  O  │
    │ \\|/ │
    │  |  │
    │ | | │
    ╰─────╯
    Frame 6
    `,

  // Frame 7
  `
    ╭─────╮
    │  o  │
    │ ─|─ │
    │  |  │
    │ _|_ │
    ╰─────╯
    Frame 7
    `
];

const folder = "./frames/loading"
const filePaths = await readdir(folder).then(
  files => files.filter(d => d !== "index.ts" && d !== "00").sort((a, b) => a.localeCompare(b)).map(path => `${folder}/${path}`)
)
const frames2 = await Promise.all(filePaths.map(path => Bun.file(path).text()))

animates.start(frames2, 4)

// Create animator instance
// const animator = new ASCIIAnimator(frames);

// // Export for use in other files
// export { ASCIIAnimator };
//
// // If running this file directly
// if (require.main === module) {
//   console.log('ASCII Animation Demo');
//   console.log('Press Ctrl+C to stop');
//
//   // Start continuous animation at 2 FPS
//   animator.start(2);
// }

