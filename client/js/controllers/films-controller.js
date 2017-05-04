app.controller('filmsController', ['$scope', '$resource', '$location', '$window', '$http', function ($scope, $resource, $location, $window, $http) {
  var Film = $resource('/api/films');

  Film.query(function (results) {
    $scope.films = results;
  });
  
  console.log("Erabiltzailea: "+window.location.pathname.split( '/' )[2]);
  var erabiltzailea = window.location.pathname.split( '/' )[2];

  //ikusi ea erabiltzailea existitzen den
  var urlx = '/api/erab/'+erabiltzailea;
  console.log("Erabiltzailea existitzen da?: "+urlx);
  $http({
    method: 'GET',
    url: urlx
  }).then(function successCallback(response) {
    console.log("login erantzun zuzena: "+angular.toJson(response));
    if(response.data.length>0) {
      console.log("Erabiltzailea existitzen da");
      $scope.erabiltzailea=response.data[0].postaElektronikoa; //erab izena data-tik
      $scope.erab = response.data[0];
      if($scope.erab.rol=="admin") {
        $scope.templateURLadmin="isadmin";
      } else {
        $scope.templateURLadmin="isuser";
      }
      $scope.templateURL="logged";
    } else {
      console.log("Erabiltzailea ez da existitzen");
      $scope.erabiltzailea="guest";
      $scope.templateURL="notlogged";
    }
  }, function errorCallback(response) {
    console.log("Erabiltzailea existitzen da? erantzun okerra: "+angular.toJson(response));
    $scope.erabiltzailea="guest";
    $scope.templateURL="notlogged";
  });

  $scope.films = []

  $scope.nabURL = "filmaboz"

  $scope.filmakGehituAktibatua=false
  $scope.filmakBozkatuAktibatua=true
  $scope.lortuErabiltzaileaAktibatua=false

  $scope.aktibatuFilmakGehitu = function() {
    if($scope.nabURL!="filmageh") {
      $scope.nabURL = "filmageh"
      $scope.erregistroAktibatua=false
      $scope.filmakBozkatuAktibatua=false
      $scope.filmakGehituAktibatua=(!$scope.filmakGehituAktibatua);
    }
  };

  $scope.aktibatuFilmakBozkatu = function() {
    if($scope.nabURL!="filmaboz") {
      $scope.nabURL = "filmaboz"
      $scope.erregistroAktibatua=false
      $scope.filmakGehituAktibatua=false
      $scope.filmakBozkatuAktibatua=(!$scope.filmakBozkatuAktibatua);
    }
  };

  $scope.lortuFilmaDatuak=function(){
      $scope.lortuErabiltzaileaAktibatua=!$scope.lortuErabiltzaileaAktibatua
      //Hemen erabiltzailea lortzeko funtzioa

  };

    $scope.bozkatu=function(){

    //Funtzio honek bozkak datu basean gordeko ditu

  };

  $scope.sortuFilma = function (filmaIzena,filmaUrtea,filmaIrudia,filmaSinopsia,filmaIritsia) {
    var film = new Film();
    //Gehitu hemen entitatearen atributuak
    film.izena = filmaIzena;
    film.urtea = filmaUrtea;
    film.irudia = filmaIrudia;
    film.sinopsia = filmaSinopsia;
    film.bozkak = [$scope.erabiltzailea];
    film.iritsiak = [filmaIritsia];
    console.log("Filma berria gehitzen: "+angular.toJson(film))
    film.$save(function (result) {
      $scope.films.push(result);
      $scope.filmaIzena = '';
      $scope.filmaUrtea = '';
      $scope.filmaIrudia = '';
      $scope.filmaSinopsia = '';
      //$scope.filmaBozkak = '';
      $scope.filmaIritsia='';

    });

  }

  $scope.lortuErabiltzaileDatuak = function(izena) {
  	console.log("izena: "+izena);
  }

  $scope.logout = function() {
    $window.location.href = '/';
  }

}]);