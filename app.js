var app=angular.module("app",["ngRoute"]);
console.log("Angular App is Initialized");
app.config(function($routeProvider){
	$routeProvider
	.when("/createProfile",{
		templateUrl:"./views/addProfile.html",
		controller:"addProfileCtrl"
	})
	.when("/editProfile/",{
		templateUrl:"./views/editProfile.html",
		controller:"addProfileCtrl"
	})
	.when("/showGallary/",{
		templateUrl:"./views/gallary.html",
		controller:"gallaryCtrl"
	})
	.when("/addGallaryPic/",{
		templateUrl:"./views/chooseGallaryPic.html",
		controller:""
	})
	.otherwise({
		templateUrl:"./views/getAllProfiles.html",
		controller:"getAllCtrl"
	});
});