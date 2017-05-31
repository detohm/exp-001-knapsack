const fs = require('fs')

exports.load = (filename) => {

  let fileContent = fs.readFileSync(filename,'utf8')
  let fileArr = fileContent.split('\n')
  let limitWeight = parseInt(fileArr[0])
  let weights = []
  let values = []

  for(let i = 1; i < fileArr.length ; i++){
    rows = fileArr[i].split(' ')
    if(rows == null || rows == "") break
    weights.push(parseInt(rows[0]))
    values.push(parseInt(rows[1]))
  }
  return {
    limitWeight,
    weights,
    values
  }
}
