function creatPassword(customized) {
  let passswordCollection = []
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const symbols = '~!@#$%^&*()_+?><,|"?~`'
  const numbers = '0123456789'

  //includeNumbers is from <input> name attribute
  if (customized.includeNumbers) {
    passswordCollection = passswordCollection.concat(numbers.split(''))
  }

  if (customized.includeUppercase) {
    passswordCollection = passswordCollection.concat(upperCaseLetters.split(''))
  }

  if (customized.includelowercase) {
    passswordCollection = passswordCollection.concat(lowerCaseLetters.split(''))
  }

  if (customized.includeSymbols) {
    passswordCollection = passswordCollection.concat(symbols.split(''))

  }

  if (customized.excludeCharacters) {
    passswordCollection = passswordCollection.filter((character) => {
      if (customized.excludeCharacters.includes(character)) {
        return false
      }
      else {
        return true
      }
    })
  }

  console.log(passswordCollection)

}


module.exports = { creatPassword }
