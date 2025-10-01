

import * as process from 'node:process';

class ASCIIAnimator {
  private frames: string[];
  private currentFrame: number = 0;
  private isRunning: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(frames: string[]) {
    this.frames = frames;
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

export namespace Cursor {
  // Move cursor to top-left
  export function resetCursor(): void {
    process.stdout.write('\x1b[H');
  }

  // Hide cursor
  export function hideCursor(): void {
    process.stdout.write('\x1b[?25l');
  }


  // Show cursor
  export function showCursor(): void {
    process.stdout.write('\x1b[?25h');
  }

}

export namespace animates {
  function clearScreen(): void {
    process.stdout.write('\x1b[2J\x1b[H');
  }


  // Render current frame
  function renderFrame(frame: string): void {
    Cursor.resetCursor();
    process.stdout.write(frame);
  }


  // Start animation
  export function start(frames: string[], fps: number = 10): void {
    clearScreen();
    Cursor.hideCursor();

    const interval = 1000 / fps;
    let frameIndex = 0
    const intervalId = setInterval(() => {
      const currentFrame = frames[frameIndex]
      if (currentFrame) {
        renderFrame(currentFrame);
      }
      frameIndex += 1
      if (frameIndex > frames.length) {
        frameIndex = 0
      }
    }, interval);

    // Handle Ctrl+C to stop animation gracefully
    process.on('SIGINT', () => {
      stop(intervalId);
      process.exit(0);
    });
  }


  // Stop animation
  export function stop(intervalId: NodeJS.Timeout): void {
    clearInterval(intervalId)
    Cursor.showCursor()
  }

}
