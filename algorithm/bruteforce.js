
let finalResult = {
  weight: 0,
  optimalValue: 0,
  solution: []
}

let countNode = 0

const bruteforce = (data) => {

  dfs([], 0, data.weights, data.values, data.limitWeight)
  finalResult.countNode = countNode
  return finalResult
}


const dfs = (tempArr, index, weights, values, limitWeight) => {
  countNode++
  //reach the end of state-space search tree
  if(index == weights.length){

    let sumWeight = 0
    let sumValue = 0

    for(let i = 0; i < tempArr.length; i++){
      if(tempArr[i] === 1){
        sumWeight += weights[i]
        sumValue += values[i]
      }
    }

    //update optimal solution if found
    if(sumWeight <= limitWeight && sumValue > finalResult.optimalValue ){
      finalResult.weight = sumWeight
      finalResult.optimalValue = sumValue
      finalResult.solution = tempArr
    }

    return

  }


  dfs(tempArr.concat(0),index+1, weights, values, limitWeight)
  dfs(tempArr.concat(1),index+1, weights, values, limitWeight)
}


module.exports = bruteforce
