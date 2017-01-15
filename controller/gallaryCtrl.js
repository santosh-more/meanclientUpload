app.controller("gallaryCtrl",function($scope,$location){
	console.log("gallaryCtrl controller");
		$scope.addGallaryPic=function(){
			$location.path("/addGallaryPic/");
		}	
	});
