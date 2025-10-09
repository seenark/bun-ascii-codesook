import { animates } from "./animates"

const long = 92
const lines = 10



type Change = {
  line: number
  col: {
    colNum: number
    char: string
  }[]
}

type OneChange = Change[]

const listOfChanges: OneChange[] = [
  [{
    line: 4,
    col: [
      { colNum: 8, char: "8" },
      { colNum: 9, char: "b" },
    ],
  }],
  [{
    line: 5,
    col: [
      { colNum: 8, char: '"' },
      { colNum: 9, char: "Y" },
    ],
  }],
  [{
    line: 5, col: [
      { colNum: 10, char: "8" },
      { colNum: 11, char: "8" },
    ],
  }],
  [{
    line: 5, col: [
      { colNum: 12, char: "P" },
      { colNum: 13, char: "'" },
    ]
  }],
  [{
    line: 4, col: [
      { colNum: 12, char: "d" },
      { colNum: 13, char: "8" },
    ]
  }],
  [{
    line: 3, col: [
      { colNum: 11, char: "`" },
      { colNum: 12, char: "Y" },
      { colNum: 13, char: "8" },
    ]
  }],
  [
    {
      line: 2, col: [
        { colNum: 11, char: "8" },
        { colNum: 12, char: "b" },
        { colNum: 13, char: "," },
      ]
    },
    {
      line: 1, col: [
        { colNum: 11, char: "," },
      ]
    }
  ],
  [
    {
      line: 1, col: [
        { colNum: 9, char: "g" },
        { colNum: 10, char: "g" },
      ]
    },
    {
      line: 2, col: [
        { colNum: 9, char: '"' },
        { colNum: 10, char: "Y" },
      ]
    }
  ],
  [
    {
      line: 1, col: [
        { colNum: 7, char: "g" },
        { colNum: 8, char: "g" },
      ]
    },
    {
      line: 2, col: [
        { colNum: 7, char: '"' },
        { colNum: 8, char: '"' },
      ]
    }
  ],
  [
    {
      line: 1, col: [
        { colNum: 6, char: "," },
      ]
    },
    {
      line: 2, col: [
        { colNum: 4, char: "," },
        { colNum: 5, char: "8" },
        { colNum: 6, char: "8" },
      ]
    }
  ],
  [
    {
      line: 3, col: [
        { colNum: 3, char: "d" },
        { colNum: 4, char: "8" },
        { colNum: 5, char: '"' },
      ]
    },
  ],
  [
    {
      line: 4, col: [
        { colNum: 2, char: "d" },
        { colNum: 3, char: "8" },
        { colNum: 4, char: "'" },
      ]
    },
  ],
  [
    {
      line: 5, col: [
        { colNum: 1, char: "," },
        { colNum: 2, char: "8" },
        { colNum: 3, char: "I" },
      ]
    },
  ],
  [
    {
      line: 6, col: [
        { colNum: 1, char: "I" },
        { colNum: 2, char: "8" },
        { colNum: 3, char: "'" },
      ]
    },
  ],
  [
    {
      line: 7, col: [
        { colNum: 1, char: "d" },
        { colNum: 2, char: "8" },
      ]
    },
  ],
  [
    {
      line: 8, col: [
        { colNum: 1, char: "Y" },
        { colNum: 2, char: "8" },
        { colNum: 3, char: "," },
      ]
    },
  ],
  [
    {
      line: 9, col: [
        { colNum: 1, char: "`" },
        { colNum: 2, char: "Y" },
        { colNum: 3, char: "b" },
      ]
    },
    {
      line: 10, col: [
        { colNum: 3, char: "`" }
      ]
    }
  ],
  [
    {
      line: 9, col: [
        { colNum: 4, char: "a" },
        { colNum: 5, char: "," },
      ]
    },
    {
      line: 10, col: [
        { colNum: 4, char: '"' },
        { colNum: 5, char: "Y" }
      ]
    }
  ],
  [
    {
      line: 9, col: [
        { colNum: 6, char: "," },
        { colNum: 7, char: "_" },
      ]
    },
    {
      line: 10, col: [
        { colNum: 6, char: '8' },
        { colNum: 7, char: "8" }
      ]
    }
  ],
  [
    {
      line: 9, col: [
        { colNum: 8, char: "_" },
        { colNum: 9, char: "_" },
      ]
    },
    {
      line: 10, col: [
        { colNum: 8, char: '8' },
        { colNum: 9, char: "8" }
      ]
    }
  ],
  [
    {
      line: 9, col: [
        { colNum: 10, char: "_" },
        { colNum: 11, char: "_" },
      ]
    },
    {
      line: 10, col: [
        { colNum: 10, char: '8' },
        { colNum: 11, char: "8" }
      ]
    }
  ],
  [
    {
      line: 9, col: [
        { colNum: 12, char: "," },
        { colNum: 13, char: "," },
      ]
    },
    {
      line: 10, col: [
        { colNum: 12, char: '8' },
        { colNum: 13, char: "P" }
      ]
    }
  ],
  [
    {
      line: 9, col: [
        { colNum: 14, char: "*" },
        { colNum: 15, char: "*" },
      ]
    },
  ],
  [
    {
      line: 8, col: [
        { colNum: 14, char: "*" },
        { colNum: 15, char: "*" },
      ]
    },
  ],
  [
    {
      line: 7, col: [
        { colNum: 15, char: "*" },
        { colNum: 16, char: "*" },
      ]
    },
  ],
  [
    {
      line: 6, col: [
        { colNum: 16, char: "*" },
        { colNum: 17, char: "*" },
      ]
    },
  ],
  [
    {
      line: 6, col: [
        { colNum: 18, char: "*" },
        { colNum: 19, char: "*" },
      ]
    },
  ],
  [
    {
      line: 6, col: [
        { colNum: 20, char: "*" },
        { colNum: 21, char: "*" },
      ]
    },
    {
      line: 7, col: [
        { colNum: 20, char: "*" },
        { colNum: 21, char: "*" },
        { colNum: 22, char: "*" },
        { colNum: 23, char: "*" },
      ]
    },
  ],
  [
    {
      line: 6, col: [
        { colNum: 21, char: "," },
        { colNum: 22, char: "g" },
      ]
    },
    {
      line: 7, col: [
        { colNum: 20, char: '"' },
        { colNum: 21, char: "Y" },
        { colNum: 22, char: "8" },
        { colNum: 23, char: "g" },
      ]
    },
  ],
  [
    {
      line: 7, col: [
        { colNum: 20, char: '"' },
      ]
    },
    {
      line: 6, col: [
        { colNum: 19, char: "g" },
        { colNum: 20, char: "g" },
      ]
    },
  ],
  [
    {
      line: 6, col: [
        { colNum: 17, char: "g" },
        { colNum: 18, char: "g" },
      ]
    },
    {
      line: 7, col: [
        { colNum: 16, char: "P" },
        { colNum: 17, char: '"' },
      ]
    },
  ],
  [
    {
      line: 7, col: [
        { colNum: 15, char: "d" },
      ]
    },
  ],
  [
    {
      line: 8, col: [{ colNum: 14, char: "i8'" }]
    },
  ],
  [{ line: 9, col: [{ colNum: 14, char: "d8," }] },],
  [{ line: 10, col: [{ colNum: 14, char: '"Y8' }] },],
  [{ line: 10, col: [{ colNum: 17, char: '888' }] },],
  [
    { line: 10, col: [{ colNum: 20, char: 'P"' }] },
    { line: 9, col: [{ colNum: 20, char: ',d' }] },
  ],
  [{ line: 8, col: [{ colNum: 21, char: ',8I' }] },],
  [{ line: 7, col: [{ colNum: 23, char: 'ggg' }] },],
  [{ line: 7, col: [{ colNum: 26, char: '***' }] },],
  [{ line: 6, col: [{ colNum: 27, char: '***' }] },],
  [{ line: 6, col: [{ colNum: 30, char: '***' }] },],
  [{ line: 6, col: [{ colNum: 30, char: 'gg,' }] },],
  [{ line: 6, col: [{ colNum: 27, char: ',gg' }] },],
  [{ line: 7, col: [{ colNum: 26, char: 'dP"' }] },],
  [{ line: 8, col: [{ colNum: 25, char: "i8'" }] },],
  [{ line: 9, col: [{ colNum: 24, char: ",d8," }] },],
  [{ line: 10, col: [{ colNum: 24, char: 'P"Y8' }] },],
  [{ line: 10, col: [{ colNum: 28, char: '888' }] },],
  [
    { line: 10, col: [{ colNum: 31, char: 'P"' },] },
    { line: 9, col: [{ colNum: 31, char: ',d**' },] },
  ],
  [{ line: 8, col: [{ colNum: 32, char: '***' },] },],
  [{ line: 7, col: [{ colNum: 31, char: '"***' },] },],
  [{ line: 6, col: [{ colNum: 32, char: '***' },] },],
  [{ line: 5, col: [{ colNum: 33, char: '**' },] },],
  [{ line: 4, col: [{ colNum: 33, char: '**' },] },],
  [{ line: 3, col: [{ colNum: 33, char: '**' },] },],
  [{ line: 2, col: [{ colNum: 33, char: '**' },] },],
  [{ line: 2, col: [{ colNum: 33, char: '8I' },] },],
  [{ line: 3, col: [{ colNum: 33, char: '8I' },] },],
  [{ line: 4, col: [{ colNum: 33, char: '8I' },] },],
  [{ line: 5, col: [{ colNum: 33, char: '8I' },] },],
  [{ line: 6, col: [{ colNum: 32, char: ',8I' },] },],
  [{ line: 7, col: [{ colNum: 32, char: 'Y8I' },] },],
  [{ line: 8, col: [{ colNum: 32, char: ',8I' },] },],
  [{ line: 9, col: [{ colNum: 33, char: '8b,' },] },],
  [{ line: 10, col: [{ colNum: 33, char: '`Y8' },] },],
  [{ line: 10, col: [{ colNum: 36, char: '888P' },] },],
  [{ line: 10, col: [{ colNum: 40, char: '**' },] },],
  [{ line: 9, col: [{ colNum: 40, char: '**' },] },],
  [{ line: 9, col: [{ colNum: 42, char: "P'" },] },],
  [{ line: 8, col: [{ colNum: 41, char: ",8I" },] },],
  [{ line: 7, col: [{ colNum: 41, char: '"8i' },] },],
  [{ line: 6, col: [{ colNum: 41, char: 'g,' },] },],
  [{ line: 6, col: [{ colNum: 38, char: ',gg' },] },],
  [{ line: 7, col: [{ colNum: 37, char: 'i8"' },] },],
  [{ line: 8, col: [{ colNum: 37, char: 'I8,' },] },],
  [{ line: 9, col: [{ colNum: 37, char: '`Yb' },] },],
  [{ line: 10, col: [{ colNum: 40, char: '"Y' },] },],
  [{ line: 9, col: [{ colNum: 40, char: 'ad' },] },],
]

const clearScreen = Array.from<boolean>({ length: lines }).fill(false).map(() => Array.from<string>({ length: long }).fill(" "))

const stringify = (arr: string[][]): string => arr.map(line => line.join("")).join("\n")

let previousScreen: string[][] = clearScreen
function* getNextScreen(start: string[][], listOfChanges: OneChange[]) {
  for (const screenNumber of Array.from({ length: 1 })) {
    for (const change of listOfChanges) {
      const cloned = structuredClone(previousScreen)

      change.forEach(
        line => line.col.forEach(col => {
          col.char.split("").forEach((char, i) => {
            cloned[line.line - 1]![col.colNum - 1 + i] = char
          })
        })
      )

      previousScreen = cloned
      yield stringify(cloned)
    }
  }
}

const render = (start: string[][], listOfChanges: OneChange[]) => {
  for (const screenArr of getNextScreen(start, listOfChanges)) {
    const screen = screenArr
    animates.clearScreen()
    console.log(screen)
    Bun.sleepSync(50)
  }
}

render(clearScreen, listOfChanges)

