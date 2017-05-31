const dataLoader  = require('./helper/data-loader')
const bruteforce = require('./algorithm/bruteforce')
const backtracking = require('./algorithm/backtracking')

var finalResult = []
var finalValue = 0

var data = dataLoader.load('./dataset/s-3.txt')
let startTime, endTime = new Date()


//Bruteforce using DFS
console.log(`Starting Depth-First Search...`)
startTime = new Date()

var result = bruteforce(data)

endTime = new Date() - startTime
console.log({result})
console.log(`Depth-First Search : Solved in ${endTime} ms\n`)


//Backtracking
console.log(`Starting Backtracking...`)
startTime = new Date()

var result = backtracking(data)

endTime = new Date() - startTime
console.log({result})
console.log(`Depth-First Search : Solved in ${endTime} ms\n`)

