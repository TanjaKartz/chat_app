var Chat = (function () {    // Module's code here... })()
 /*
 Keep track of connected users in the chat
 - A user should have a unique identiﬁer (e.g. email or a username),
 otherwise they should not be allowed to join
 - A user also needs to be able to leave

 Keep a record of all the messages

Let users send a message to the chat
- A message need to contain: A message, a send date and an author

Search within messages
- By content and by author

Censor messages containing certain words
- Censored should still be saved
*/

  //user
  let users = []

  let module = {}

  module.joinChat = function (user) {
    console.log('User is joining', user)
    users.push(user)

  }
  module.helloWorld = function () {
    console.log ('Hello World')
  }

  return module

})()
