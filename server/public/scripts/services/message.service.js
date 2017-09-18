myApp.service('MessageService', ['$http', function($http) {
    console.log('Message service loaded.');

    var vm = this;
    vm.messages = {
      list: [] ,
      newMessage: {}
};

    vm.getMessage = function() {
        $http.get('/message').then(function(response) {
            vm.messages.list = response.data;
            console.log('get response: ', vm.messages);
        });
    };

    vm.addMessage = function() {
        console.log('going to send this object to the server: ', vm.messages.newMessage);
        $http.post('/message', vm.messages.newMessage).then(function(response) {
            console.log('service post response: ', response);
            vm.getMessage();
        });
    };

    vm.updateMessage = function (currentMessage) {
        console.log('service is going to send this object to the server: ', currentMessage);
        $http.put('/messsage/' + currentMessage._id, currentMessage).then(function(response) {
            console.log('service update response:', response);
            vm.getMessage();
        });
    };

    vm.deleteMessage = function(messageId) {
        console.log('service to delete id: ', messageId);

        $http.delete('/message/' + messageId).then(function (response) {
            console.log('service delete response:', response);
            vm.getMessage();
        });

    }

    vm.getNasa = function() {
        $http.get('https://api.nasa.gov/planetary/apod?api_key=BNHQAzvHS60bKNnPfmgV2dlo1qW56zG91aE8Y8Mo').then(function(response) {
            console.log('get NASA response: ', response.data);
        });
    };

    // vm.getNasa();

    vm.getAsteroid = function() {
        $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=BNHQAzvHS60bKNnPfmgV2dlo1qW56zG91aE8Y8Mo').then(function(response) {
            console.log('get ASTEROID response: ', response.data);
        });
    };

    vm.getAsteroid();
}]);
