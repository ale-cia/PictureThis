myApp.controller('UserController', function(UserService, MessageService) {
  console.log('UserController created');
  
  var uc = this;
  uc.newMessage = {};
  MessageService.getMessage();
  uc.userService = UserService;
  uc.userObject = UserService.userObject;


  self.addMessage = function() {
    // have service send this to the server
    console.log('clicked to add new message');
    MessageService.addMessage(self.newMessage);
}

self.updateMessage = function(currentMessage) {
    currentMessage.location = "Neptune";
    MessageService.updateMessage(currentMessage);
}

self.deleteMessage= function(personId) {
    MessageService.deleteMessage(messageId);
}

});
