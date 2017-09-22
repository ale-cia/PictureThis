myApp.service('MessageService', ['$http', function($http) {
    console.log('Message service loaded.');

    var vm = this;
    vm.messages = {
      list: [] ,
      newMessage: {}
    };
   vm.planets = {
     mars: {}
   }

   vm.spaceImages = { list: [] };
    // vm.getMessage = function() {
    //     $http.get('/message').then(function(response) {
    //         vm.messages.list = response.data;
    //         console.log('get response: ', vm.messages);
    //     });
    // };
    //
    // vm.addMessage = function() {
    //     console.log('going to send this object to the server: ', vm.messages.newMessage);
    //     $http.post('/message', vm.messages.newMessage).then(function(response) {
    //         console.log('service post response: ', response);
    //         vm.getMessage();
    //     });
    // };
    //
    // vm.updateMessage = function (currentMessage) {
    //     console.log('service is going to send this object to the server: ', currentMessage);
    //     $http.put('/messsage/' + currentMessage._id, currentMessage).then(function(response) {
    //         console.log('service update response:', response);
    //         vm.getMessage();
    //     });
    // };
    //
    // vm.deleteMessage = function(messageId) {
    //     console.log('service to delete id: ', messageId);
    //
    //     $http.delete('/message/' + messageId).then(function (response) {
    //         console.log('service delete response:', response);
    //         vm.getMessage();
    //     });
    //
    // }
    //
    // vm.getNasa = function() {
    //     $http.get('https://api.nasa.gov/planetary/apod?api_key=BNHQAzvHS60bKNnPfmgV2dlo1qW56zG91aE8Y8Mo').then(function(response) {
    //         console.log('get NASA response: ', response.data);
    //     });
    // };//getNASA
    //
    // vm.getNasa();
    //
    // vm.getAsteroid = function() {
    //     $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=BNHQAzvHS60bKNnPfmgV2dlo1qW56zG91aE8Y8Mo').then(function(response) {
    //         console.log('get ASTEROID response: ', response.data);
    //     });
    // }; //getAsteroid
    //
    // // vm.getAsteroid();
    //
    //
    // vm.getMars = function() {
    //     $http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BNHQAzvHS60bKNnPfmgV2dlo1qW56zG91aE8Y8Mo').then(function(response) {
    //         console.log('get Mars response: ', response.data);
    //         vm.planets.mars = response.data;
    //     });
    // }; // getMars


    vm.searchResults = function() {
      //searches for
        var url = 'https://images-api.nasa.gov/search?q=' + vm.messages.newMessage.name;
        $http.get(url).then(function(response) {
            console.log('get search response: ', response.data);
            // vm.planets.mars = response.data;

            var min = 0; //minimum number that starts at 0 because array starts at 0
            var max = response.data.collection.items.length-1;//returns the length of the array minus one (The last index)
            var randomImageNumber = Math.floor(Math.random() * (1 + max - min) + min);//chooses a random image from the array within the min/max
            //Math.random = number between 0 - 1

            // Add a property to this response to make flip = true
            response.data.collection.items[randomImageNumber].flip = true; //add boolean property
            vm.spaceImages.list.push(response.data.collection.items[randomImageNumber]);
               console.log('message service list: ', vm.spaceImages.list);


                //Loop through the collection
                //Return images with .jpg only

                //
                var collection = 0;

                for(var i = 0; collection.length-1; i++){
                  if(vm.media_type = ".jpg"){
                    console.log("correct image!", vm.media_type);
                  } else {
                    console.log("Not a .jpg");
                  }
                   console.log(vm.spaceImages);
                }
        });//get
    }; // searchResults
  // vm.searchResults();
}]);
