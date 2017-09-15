myApp.service('MessageService', ['$http', function($http) {
    console.log('Message service loaded.');

    var vm = this;
    vm.messages = { list: [],
    newMessage: {} 
};

    self.getMessage = function() {
        $http.get('/message').then(function(response) {
            self.getMessage.list = response.data;

            console.log('get response: ', self.getMessage);
        });
    };

    self.addMessage = function(newMessage) { 
        console.log('going to send this object to the server: ', newMessage);
               
        $http.post('/message', self.messages.newMessage).then(function(response) {
            console.log('service post response: ', response);
            self.getMessage();            
        });
    };

    self.updateMessage = function (currentMessage) {
        console.log('service is going to send this object to the server: ', currentMessage);
        $http.put('/messsage/' + currentMessage._id, currentMessage).then(function(response) {
            console.log('service update response:', response);
            self.getMessage();            
        });
    };

    self.deleteMessage = function(messageId) {
        console.log('service to delete id: ', messageId);
        
        $http.delete('/message/' + messageId).then(function (response) {
            console.log('service delete response:', response);
            self.getMessage();
        });
        
    }
    
}]);