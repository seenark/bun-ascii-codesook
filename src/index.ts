import { readdir } from "node:fs/promises"
import { animates } from './animates';

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

const folders = Array.from({ length: 7 }).fill(0).map((_, i) => i + 4).map(d => `./frames/loading/line${d}`)

const filePathsPromises = folders.map(folder => readdir(folder).then(
  files => files.filter(d => d !== "index.ts" && d !== "00").sort((a, b) => a.localeCompare(b)).map(path => `${folder}/${path}`)
))
const filePaths = await Promise.all(filePathsPromises).then(paths => paths.flat())
const files = await Promise.all(filePaths.map(path => Bun.file(path).text()))

// const folder4 = "./frames/loading/line4"
// const filePaths4 = await readdir(folder4).then(
//   files => files.filter(d => d !== "index.ts" && d !== "00").sort((a, b) => a.localeCompare(b)).map(path => `${folder4}/${path}`)
// )
// const folder5 = "./frames/loading/line5"
// const filePaths5 = await readdir(folder5).then(
//   files => files.filter(d => d !== "index.ts" && d !== "00").sort((a, b) => a.localeCompare(b)).map(path => `${folder5}/${path}`)
// )
// const folder6 = "./frames/loading/line6"
// const filePaths6 = await readdir(folder6).then(
//   files => files.filter(d => d !== "index.ts" && d !== "00").sort((a, b) => a.localeCompare(b)).map(path => `${folder6}/${path}`)
// )
// const folder7 = "./frames/loading/line6"

// const frames2 = await Promise.all([...filePaths4, ...filePaths5, ...filePaths6].map(path => Bun.file(path).text()))

animates.start(files, 30)

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

