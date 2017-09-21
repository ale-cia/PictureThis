myApp.controller('UserController', function(UserService, MessageService) {
  console.log('UserController created');

  //

  var uc = this;
  uc.spaceImages = {};
  // uc.messages = {};
  uc.messages = MessageService.messages;
  uc.planets = MessageService.planets;
  //pulling in from service
  // uc.userService = UserService.spaceImages;
  uc.userObject = UserService.userObject;
  // MessageService.getMessage();
  uc.addMessage = MessageService.addMessage;
  uc.searchResults = MessageService.searchResults;
  uc.spaceImages = MessageService.spaceImages;
//   uc.addMessage = function() {
//     // have service send this to the server
//     console.log('clicked to add new message', );
//     MessageService.addMessage();
// }

uc.updateMessage = function(currentMessage) {
    // currentMessage.location = "";
    MessageService.updateMessage(currentMessage);
}

uc.deleteMessage= function(personId) {
    MessageService.deleteMessage(messageId);
}

});
