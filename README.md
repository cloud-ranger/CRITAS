# Welcome to CRITAS from CloudRanger
## CloudRanger Instance Type Availablitity Service (CRITAS) from [cloudranger.com](https://cloudranger.com)

We are delighted to make available as a completely free service a constantly update list of all available instances in AWS across all regions.

Its always a challenge when you are builing in interface that allows users to create instances, but without making a failing call how can you be assured that the instance type is available to use in that region. This problem is the reason we developed Critas. Here we constantly maintain a list of all available AWS instance types per region. Its freely availble as a JSON file on s3.

Hope you find it useful

[https://s3-us-west-2.amazonaws.com/adfsdafdsjfkljfsdluerfsfds/crita](https://s3-us-west-2.amazonaws.com/adfsdafdsjfkljfsdluerfsfds/crita)


Here is a sample JSFiddle of the code below
[http://jsfiddle.net/L8hLjvm6/](http://jsfiddle.net/L8hLjvm6/)


## Sample Code
### html
```html
<div ng-app>
  <div ng-controller="PromiseCtrl">
      <h2>Getting the list of servers by region</h2>
      <h3>Servers by region</h3>
      <p>{{instanceTypes}}</p>
      <h2>Getting the list of servers by region</h2>
      <h3>Servers by region</h3>
      <p>{{regions}}</p>
  </div>
</div>
```

### javascript
``` javascript
function PromiseCtrl($scope, $http) {    
    $http.get('https://s3-us-west-2.amazonaws.com/adfsdafdsjfkljfsdluerfsfds/crita').then(function(value) {
        $scope.instanceTypes = value.data.instanceTypes;
    });
  
		$http.get('https://s3-us-west-2.amazonaws.com/adfsdafdsjfkljfsdluerfsfds/crita').then(function(value) {
        $scope.regions = value.data.regions;
    });
}
```
