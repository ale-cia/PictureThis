myApp.controller('LogoutController', function(UserService) {
  console.log('Logout Controller hit');
  var vm = this;
  vm.userService = UserService;

});
