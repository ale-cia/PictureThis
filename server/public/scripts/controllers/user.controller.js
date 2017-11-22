myApp.controller('UserController', function( UserService,$http, MessageService) {
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

uc.deleteMessage = function(personId, index) {
    //MessageService.deleteMessage(messageId);
    console.log('MessagedDeleted', personId);
    console.log('index', index);
    console.log('array?', uc.spaceImages);

    uc.spaceImages.list.splice(index, 1);
}

uc.flip = function (card) {
  console.log('Card flipped', uc.spaceImages.list[card].flip);
  console.log('Display image', uc.spaceImages);
  console.log('track', uc.spaceImages.list[card].data[0].description);
  //pic.data[0].description = uc.spaceImages.list
  //uc.spaceImages.list[].data[].description
  if(uc.spaceImages.list[card].flip === true){
    uc.spaceImages.list[card].flip = false;
  } else {
    uc.spaceImages.list[card].flip = true;
  }
}//function

uc.save = function(pic){
  console.log('save me', pic);
  $http.post('/message', pic).then(function(response) {
   console.log('got response: ', response.data);
 });

}



});
