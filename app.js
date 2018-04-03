var Chat = (function() {
      // Users
      let users = []
      let module = {}


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
      ////////////////////////////////send message and serch for word///////////////
      //We have the elements, but something does not work

      let message = []

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

      console.log('All messages', message)
      console.log('All users', user) // Did something

      //when we want to search, in this case it is the number 2
      let keyword = keyword.split('users', 'message') // Did something

      let results = messages.filter(m => {
          // does this current message match whan i'm looking for?
          // let keywords = keyword.split('')
          return m.message.indexOf(keyword) !== -1
        }
        let results = users.filter(u => { //Did something

            return u.users.indexOf(keyword) !== -1 //Did something


            /*
              //search function with lowercase and uppercase letters. DOES NOT WORK!////////////////////////////
              let searchBar = document.forms['search-users'].querySelector("#myInput");
              searchBar.addEventListener('keyup',function(e){
                let term = e.target.value.toLowerCase(); //Now we are comparing lowercase latters to lowercase letters.
              //now I want to go trhough the array of authors/users and compare it with the searchBar

              const authors = users.getElementsByTagName('li');
              //Now we want to know if the searchterm is contained with the titels of the authors/users, by turning this into an array:
              Array.from(users).forEach(function(user){
                let message = users.firstElementChild.textContent;
                //Now we want to check if the term is in the message
                if(message.ToLowerCase().indexOf(term)!= -1) {
                  user.style.display = 'block';
                  //now we want to make an else statement that can hide the message if it is = -1:
                } else {
                  user.style.display = 'none';
                }
                ///////////////////////////////////////////////////////////////////////////////////////////////
            */

            console.log('Message results', results)

          }

          //////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////// Censor messages containing certain words////////////////////////////////////
          let bannedMessages[]
          //push into bannedMessages når bad word is present

          let badWords = ['shit', 'damn']

          module.sendChat = function(ChatMessage) {
            console.log('A message is written:', message)
            //check if bad word is in massage
            let cencor = false

            for (let i = 0; i < badWords.length; i++) {
              if (ChatMessages.message.indexOf(badWords[i]) != -1) {
                cencor = true
              }
            }

            //if not, push the message
            if (cencor) {
              console.log('message cannot contain bad words: ', message)
              bannedMessages.push(message)
            } else {
              messages.push(message)
            }
          }

          return module

        })()

      Chat.joinChat('Sonia');
      Chat.joinChat('Tanja');

      Chat.sendChat('Hello');
      Chat.sendChat('shit');
      Chat.sendChat('damn');


      function logout() {
        console.log('leaving chat');

      }

      //})


src='//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js'>
src='https://code.jquery.com/jquery-2.2.4.min.js'>

        $(".messages").animate({
          scrollTop: $(document).height()
        }, "fast");

        $("#profile-img").click(function() {
          $("#status-options").toggleClass("active");
        });

        $(".expand-button").click(function() {
          $("#profile").toggleClass("expanded");
          $("#contacts").toggleClass("expanded");
        });

        $("#status-options ul li").click(function() {
          $("#profile-img").removeClass();
          $("#status-online").removeClass("active");
          $("#status-away").removeClass("active");
          $("#status-busy").removeClass("active");
          $("#status-offline").removeClass("active");
          $(this).addClass("active");

          if ($("#status-online").hasClass("active")) {
            $("#profile-img").addClass("online");
          } else if ($("#status-away").hasClass("active")) {
            $("#profile-img").addClass("away");
          } else if ($("#status-busy").hasClass("active")) {
            $("#profile-img").addClass("busy");
          } else if ($("#status-offline").hasClass("active")) {
            $("#profile-img").addClass("offline");
          } else {
            $("#profile-img").removeClass();
          };

          $("#status-options").removeClass("active");
        });

        function newMessage() {
          message = $(".message-input input").val();
          if ($.trim(message) == '') {
            return false;
          }
          $('<li class="sent"><img src="pictures/IMG_2728.JPG" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
          $('.message-input input').val(null);
          $('.contact.active .preview').html('<span>You: </span>' + message);
          $(".messages").animate({
            scrollTop: $(document).height()
          }, "fast");
        };

        });
        //# sourceURL=pen.js
