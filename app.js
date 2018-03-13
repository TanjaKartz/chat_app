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

module.sendChat = function (message) {
  //check if bad word is in massage

  //if not, push the message
  message.push(message)
}
  return module

})()

Chat.joinChat('Sonia');
Chat.joinChat('Tanja');
