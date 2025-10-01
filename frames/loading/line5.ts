const file = Bun.file("./05")
const baseFile = await file.text()
const base: string = baseFile.split("\n")[4]!

const line5Chars = Array.from({ length: 18 }).fill(":")
  .map((_, i) => {
    switch (i) {
      case 4: return "A"
      case 5:
      case 6: return "p"
      case 7: return "l"
      case 8: return "e"
      case 9: return " "
      case 10: return "]"
      case 11: return "["
      default: return ":"
    }
  })

const startIndex = 8
const startText = "    | | "
const baseSplit = base.split(startText)
const allLine5 = line5Chars.map((char, i) => {
  console.log(char)

  const middle = baseSplit[1]?.split("")
  middle[startText + i] = char

  const newLine5 = [startText, middle?.join(""), baseSplit[2]].join("")
  return newLine5
})

console.log(allLine5)



// const newDots = allLine4.map(line4 => {
//   console.log(line4)
//
//   const newEmpty = empty.split("\n")
//   newEmpty[3] = line4 || ""
//
//   return newEmpty.join("\n")
// })
//
//
// newDots.forEach((d, i) => {
//   console.log(d)
//   Bun.write((i + 1).toString().padStart(3, "0"), d)
// })
