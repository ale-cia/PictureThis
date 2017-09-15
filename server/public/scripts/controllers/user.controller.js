myApp.controller('UserController', function(UserService, MessageService) {
  console.log('UserController created');

  //
  
  var uc = this;
  uc.newMessage = {};
  uc.MessageService = MessageService;
  uc.userService = UserService;
  uc.userObject = UserService.userObject;
  uc.MessageService.getMessage();

  uc.addMessage = function() {
    // have service send this to the server
    console.log('clicked to add new message', uc.newMessage);
    uc.MessageService.addMessage(uc.newMessage);
}

uc.updateMessage = function(currentMessage) {
    currentMessage.location = "Neptune";
    MessageService.updateMessage(currentMessage);
}

uc.deleteMessage= function(personId) {
    MessageService.deleteMessage(messageId);
}

});
