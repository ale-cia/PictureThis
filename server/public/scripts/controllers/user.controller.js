myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  
  var vm = this;
  vm.newMessage = {};
  UserService.getMessage();
  vm.userService = UserService;
  vm.userObject = UserService.userObject;


  self.addMessage = function() {
    // have service send this to the server
    console.log('clicked to add new message');
    UserService.addMessage(self.newMessage);
}

self.updateMessage = function(currentPerson) {
    currentMessage.location = "Neptune";
    UserService.updateMessage(currentMessage);
}

self.deleteMessage= function(personId) {
    UserService.deleteMessage(messageId);
}

});
