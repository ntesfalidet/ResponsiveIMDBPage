/* Sample Controller */
//http://jsfiddle.net/mafais/4WK7R/380/

app.controller('listController', ['$scope', 'Data',
    function ($scope, Data) {
         Data.getData().success(function(data) {
             $scope.movies = data;
         });
		//console.log("At List Controller");
		//console.log(Data.sayHello());

        //$scope.IsVisible = false;
        //$scope.ShowHide = function () {
        //	$scope.IsVisible = true;
        //}
            

        $scope.rank_sort = 'rank';
    }]);


app.controller('detailController', ['$scope', '$routeParams', 'Data',
    function ($scope, $routeParams ,Data) {
         Data.getData().success(function(data) {
             $scope.movies = data;
         });

        $scope.Rank = $routeParams.rank;

       	$scope.leftFunct = function() {

       		$scope.Rank = ($scope.Rank <= 1) ? $scope.movies[$scope.movies.length-1].rank + 1 : $scope.Rank;
       	}

       	$scope.rightFunct = function() {

			$scope.Rank = ($scope.Rank >= $scope.movies.length) ? 0 : $scope.Rank; 
		}


    }]);

app.controller('galleryController', ['$scope', 'Data',
    function ($scope, Data) {
         Data.getData().success(function(data) {
             $scope.movies = data;
         });

        $scope.genres = ['All', 'Crime', 'Drama', 'Action', 'Thriller', 'Biography', 'History', 'Western', 'Adventure', 'Fantasy', 'Romance', 'Mystery', 'Sci-Fi', 'Family', 'Comedy', 'War', 'Animation', 'Horror', 'Music', 'Film-Noir', 'Musical', 'Sport']

        $scope.assignClassification = function (genre_input) {
    		if (genre_input == 'All') {
      		genre_input = '';
    	}
    	$scope.filterByGenre = {'genre' : genre_input}
  }
    }]);
