strand = "ATTGAC"
strand2 = "GTCAAT"
hash = { "A":"T", "T":"A", "G":"C","C":"G"}
pair = []
// console.log(strand["A"])
// console.log(strand["T"])

// const bondedStrand = (strand, pair) => {
//     console.log(strand)
//     const test = strand.split('')
//     console.log(test)

//     for (i = 0; i < strand.length; i++) {
//         // let current = strand[i]
//         if (strand[i] == "a") {
//             let current = "t"
//             pair.push(current)
//         } else if (strand[i] == "t") {
//             let current = "a"
//             pair.push(current)
//         } else if (strand[i] == "g") {
//             let current = "c"
//             pair.push(current)
//         } else if (strand[i] == "c") {
//             let current = "g"
//             pair.push(current)
//         }
//     }
//     result = pair.reverse().join('')
//     console.log(result)
// }

// bondedStrand(strand, pair)

const bondedStrand = (strand) => {
    let pair = []
    hash = { "A":"T", "T":"A", "G":"C","C":"G"}
    for (i = 0; i < strand.length; i++) {
        pair.push(hash[strand[i]])
    }
    const result = pair.reverse().join('')
    console.log(result)
}

bondedStrand(strand)
bondedStrand(strand2)