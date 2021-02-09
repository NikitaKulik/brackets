module.exports = function check(str, bracketsConfig) {
  let bracketsArray = str.split("")
  let bracketsPairs = {}
  let openBrackets = []
  let isCorrect = true

  bracketsConfig.forEach(pair => {
    bracketsPairs[pair[1]] = pair[0];
  });

  bracketsArray.forEach(bracket => {
    if (!bracketsPairs[bracket]) {
      openBrackets.push(bracket);
    } else if (bracketsPairs[bracket] == bracket) {
      if (bracket == openBrackets[openBrackets.length - 1]) {
        openBrackets.pop()
      } else {
        openBrackets.push(bracket);
      }
    } else if (bracketsPairs[bracket] === openBrackets[openBrackets.length - 1]) {
      openBrackets.pop();
      } else {
        isCorrect = false
      }
    })

  if (openBrackets.length !== 0) {
    isCorrect = false
  }

  return isCorrect
}
