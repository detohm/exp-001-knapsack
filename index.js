const dataLoader  = require('./helper/data-loader')
const algorithm = require('./algorithm')

let finalResult = []
let finalValue = 0

let startTime, endTime = new Date()
let reports = []


//load data
let data = dataLoader.load('./dataset/s-1.txt')

//Bruteforce using DFS
console.log(`Starting Depth-First Search (Bruteforce)...`)
startTime = new Date()

var result = algorithm.bruteforce(data)

endTime = new Date() - startTime
console.log({result})
console.log(`Depth-First Search : Solved in ${endTime} ms\n`)
reports.push({'Bruteforce':`${endTime} ms`})


//Backtracking
console.log(`Starting Backtracking...`)
startTime = new Date()

var result = algorithm.backtracking(data)

endTime = new Date() - startTime
console.log({result})
console.log(`Backtracking : Solved in ${endTime} ms\n`)
reports.push({'Backtracking':`${endTime} ms`})


//Branch and Bound
console.log(`Starting Branch and Bound...`)
startTime = new Date()

var result = algorithm.branchAndBound(data)

endTime = new Date() - startTime
console.log({result})
console.log(`Branch and Bound : Solved in ${endTime} ms\n`)
reports.push({'BranchAndBound':`${endTime} ms`})


//Mix between Backtracking and Branch and Bound
console.log(`Starting Mixing Backtracking with Branch and Bound...`)
startTime = new Date()

var result = algorithm.btbb(data)

endTime = new Date() - startTime
console.log({result})
console.log(`Mixing Backtracking with Branch and Bound : Solved in ${endTime} ms\n`)
reports.push({'Mix':`${endTime} ms`})

console.log(reports)
