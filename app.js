var Chat = (function () {
///////////////////////////////////////////////////////////////////////////////
 //////////////////////////// Users///////////////////////////////////////////
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
 }
}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////////send message and serch for word///////////////
let message = []

function ChatMessage(message, user) {
  this.message = messages
  this.user = users
  this.createdAt = new Date()

let newMessage1 = new ChaMessage('Hello World!', 'tanja')
let newMessage2 = new ChaMessage('Hello Hello', 'tanja')
let newMessage3 = new ChaMessage('Hello', 'tanja')
let newMessage4 = new ChaMessage('2', 'tanja')
}
message.push(newMessage1)
message.push(newMessage2)
message.push(newMessage3)
message.push(newMessage4)
message.push(newMessage5)

console.log('All messages', message)

//when we want to search, in this case it is the number 2
let keyword = "Hello"


let results = messages.filter(m=> {
  // does this current message match whan i'm looking for?
  // let keywords = keyword.split('')
  return m.message.indexOf(keyword) !== -1

})

console.log('Message results', results)


function logout (){
  console.log('leaving chat');
}
})

////////////////////////////////////////////////////////////////////////////////////////
////////////////// Censor messages containing certain words/////////////////////////////////

let messages = ['badword']

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



////////////////////////////////////////////////////////////////////////

Chat.joinChat('Sonia');
Chat.joinChat('Tanja');

Chat.sendChat('Hello');
Chat.sendChat('badword');


//Chat.sendMessage('Hallo, my name is Sonia');

//Logout function


//function sendMessage (){
  //console.log('Sending message');
//}
