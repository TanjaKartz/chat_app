var Chat = (function() {
  // Users
  let users = []
  let module = {}
  let messages = []
  let bannedMessages = [] //push into bannedMessages når bad word is present


  module.joinChat = function(user) {
    console.log('User is trying to join:', user)

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
  /////////////////////////////////search for messages/////////////////////////

  module.searchMessages = function(search) {
    let results = messages.filter(m => {
      return m.message.indexOf(search) !== -1
    })
    return results

  }

  console.log('Message results', results)

}

///////////////////////////////////////////////////////////////////////////////////////
/////////////////// Censor messages containing certain words//////////////////////////

let badWords = ['shit', 'damn']

module.sendChat = function(chatMessage) {
  console.log('A message is written:', chatMessage)
  //check if bad word is in massage
  let cencor = false

  for (let i = 0; i < badWords.length; i++) {
    if (chatMessage.message.indexOf(badWords[i]) != -1) {
      cencor = true
    }
  }

  //if not, push the message
  if (cencor) {
    console.log('message cannot contain bad words: ', chatMessage)
    bannedMessages.push(chatMessage)
  } else {
    messages.push(chatMessage)
  }
}

return module

})()

function ChatMessage(message, user) {
  this.message = messages
  this.user = users
  this.createdAt = new Date()
}

let newMessage1 = new ChatMessage('Hello World!', 'Sonia')
let newMessage2 = new ChatMessage('Hello Hello', 'Sonia')
let newMessage3 = new ChatMessage('Hello', 'Sonia')
let newMessage4 = new ChatMessage('2', 'Sonia')


message.push(newMessage1)
message.push(newMessage2)
message.push(newMessage3)
message.push(newMessage4)
message.push(newMessage5)


Chat.joinChat('Sonia');
Chat.joinChat('Tanja');

Chat.sendChat('Hello');
Chat.sendChat('shit');
Chat.sendChat('damn');


//})
