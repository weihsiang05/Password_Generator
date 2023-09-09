function creatPassword(customized) {
  let passswordCollection = []
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const symbols = '~!@#$%^&*()_+?><,|"?~`'
  const numbers = '0123456789'
  const miniumLength = 4
  const maximumLength = 16

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

  //removing specific characters which the user does not want to keep
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



  let password = ''

  //To check the lenght of password is between 4 to 16
  if (parseInt(customized.lengthOfPassword) >= miniumLength && parseInt(customized.lengthOfPassword) <= maximumLength) {
    for (let i = 0; i <= parseInt(customized.lengthOfPassword); i++) {
      //Create a random string
      let randomIndex = Math.floor(Math.random() * passswordCollection.length)
      password += passswordCollection[randomIndex]
    }
  }

  console.log(password)

  //console.log(passswordCollection)

}


module.exports = { creatPassword }
