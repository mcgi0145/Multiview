var app = angular.module('demoApp' , ['ngRoute', 'LocalStorageModule']);

//HOME PAGE CONTROLS
app.controller('MainCtrl', function($scope, $route, $routeParams, $location, localStorageService) {
    
            if(localStorageService.get('HomeTab')){ 
        }else{
        localStorageService.set('HomeTab', ['Chaton','Andy','Willow']); 
        }
    $scope.names = localStorageService.get('HomeTab');    
	$scope.addCat = function() {
        if($scope.todoText == null || $scope.todoText == ""){
		alert('please Enter Some Text!');
        }
        else{
         $scope.names.push($scope.todoText);
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('HomeTab', JSON.stringify($scope.names));            
        }
	};
        $scope.removeName = function(name) {
          var i = $scope.names.indexOf(name);
                      $scope.names.splice(i, 1);
          //$scope.names.splice(i, 1);
            //localStorageService.remove(JSON.stringify(name));
            //console.log(name);
            var HomeTab = JSON.parse(localStorage.HomeTab);
            HomeTab.splice(i, 1);
            localStorage.setItem('HomeTab', JSON.stringify(HomeTab));
        };
          
          //localStorageService.set('HomeTab', $scope.names);
   });

//SECOND PAGE CONTROLS
app.controller('ContactCtrl', function($scope, $routeParams, localStorageService) {
            //$scope.names = ['Soup', 'Bun', 'Crackers'];
    
            if(localStorageService.get('LunchTab')){ 
        }else{
        localStorageService.set('LunchTab', ['Soup','Bun','Crackers']); 
        }
    $scope.names = localStorageService.get('LunchTab');    
	$scope.addCat = function() {
        if($scope.todoText == null || $scope.todoText == ""){
		alert('please Enter Some Text!');
        }
        else{
         $scope.names.push($scope.todoText);
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('LunchTab', JSON.stringify($scope.names));            
        }
	};
        $scope.removeName = function(name) {
          var i = $scope.names.indexOf(name);
                      $scope.names.splice(i, 1);
          //$scope.names.splice(i, 1);
            //localStorageService.remove(JSON.stringify(name));
            //console.log(name);
            var LunchTab = JSON.parse(localStorage.LunchTab);
            LunchTab.splice(i, 1);
            localStorage.setItem('LunchTab', JSON.stringify(LunchTab));
        };
   });
//THIRD PAGE CONTROLS
app.controller('ThirdCtrl', function($scope, $routeParams, localStorageService) {
            //$scope.names = ['Phone', 'Tablet', 'Laptop'];
    
            if(localStorageService.get('DeviceTab')){ 
        }else{
        localStorageService.set('DeviceTab', ['Phone','Tablet','Laptop']); 
        }
    $scope.names = localStorageService.get('DeviceTab');    
	$scope.addCat = function() {
        if($scope.todoText == null || $scope.todoText == ""){
		alert('please Enter Some Text!');
        }
        else{
         $scope.names.push($scope.todoText);
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('DeviceTab', JSON.stringify($scope.names));            
        }
	};
        $scope.removeName = function(name) {
          var i = $scope.names.indexOf(name);
                      $scope.names.splice(i, 1);
          //$scope.names.splice(i, 1);
            //localStorageService.remove(JSON.stringify(name));
            //console.log(name);
            var DeviceTab = JSON.parse(localStorage.DeviceTab);
            DeviceTab.splice(i, 1);
            localStorage.setItem('DeviceTab', JSON.stringify(DeviceTab));
        };
   });
   
 app.config(function($routeProvider, $locationProvider, localStorageServiceProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'MainCtrl'
  })
  .when('/contact-us', {
   templateUrl: 'contact-us.html',
   controller : 'ContactCtrl'
  })
  .when('/thirdpage', {
   templateUrl: 'thirdpage.html',
      controller: 'ThirdCtrl'
  })

  $routeProvider.otherwise({
        redirectTo: '/'
      });
  localStorageServiceProvider
    .setPrefix('')
  .setNotify(true, true);     
});