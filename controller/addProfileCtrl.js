app.controller("addProfileCtrl",function($scope,$http,$location){
	console.log("we are in addProfileCtrl controller");
	$scope.addProfiles=function(){
		var form=new FormData(document.getElementById('formdata'));
		console.log(form);
		$http.post({
			url:"http://localhost:8080/createProfile/",
			method:"POST",
			data:form,
			headers: {'Content-Type': undefined}
		}).then(function(response){
			console.log("Response"+response);
		});
	}
});