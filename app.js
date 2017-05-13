function PromiseCtrl($scope, $http) {    
    $http.get('https://s3-us-west-2.amazonaws.com/adfsdafdsjfkljfsdluerfsfds/crita').then(function(value) {
        $scope.instanceTypes = value.data.instanceTypes;
    });
  
		$http.get('https://s3-us-west-2.amazonaws.com/adfsdafdsjfkljfsdluerfsfds/crita').then(function(value) {
        $scope.regions = value.data.regions;
    });
}
