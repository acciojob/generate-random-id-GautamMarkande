function makeid(length) {
  // write your code here
	 const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
    randomString += alphanumericCharacters.charAt(randomIndex)
  }

  return randomString;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
