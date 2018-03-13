var Chat = (function () {    // Module's code here... })()

  //user
  let users = []
  let module = {}

 module.joinChat = function (user) {

   console.log ('User is trying to join:', user)

let userAlreadyConnected = false

  for (let i = 0; i < users.length; i++) {
    //check if the user who is joining already is connected
    if (users[i] == user) {
     userAlreadyConnected = true
  }
}

 if (userAlreadyConnected) {
   console.log('User aready connected:', user)
} else {
  users.push(user)
//add the user to connected users

}
}
let messages = ['shit']

module.sendChat = function (message) {
  console.log ('A message is written:', message)
//check if bad word is in massage
let badWordInMessage = false

  for (let i = 0; i < messages.length; i++) {
    if (messages[i] == message) {
        badWordInMessage = true
    }
  }

//if not, push the message
if(badWordInMessage) {
  console.log('message cannot contain bad words: ', message)
} else {
  messages.push(message)
}
}

  return module


})()

Chat.joinChat('Sonia');
Chat.joinChat('Tanja');

Chat.sendChat('Hello');
Chat.sendChat('shit'); //okay, so this only works when I type in only the bad word. when I type a sentence containing the bad word, it is not detected. How to fix this???
