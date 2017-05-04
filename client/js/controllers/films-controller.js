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
      $scope.templateURL="logged";
    } else {
      console.log("Erabiltzailea ez da existitzen");
      $scope.templateURL="notlogged";
    }
  }, function errorCallback(response) {
    console.log("Erabiltzailea existitzen da? erantzun okerra: "+angular.toJson(response));
    $scope.templateURL="notlogged";
  });


  $scope.erabiltzailea="guest";

  $scope.films = []

  $scope.filmakGehituAktibatua=false
  $scope.filmakBozkatuAktibatua=true
  $scope.lortuErabiltzaileaAktibatua=false

  $scope.aktibatuFilmakGehitu = function() {
      $scope.erregistroAktibatua=false
      $scope.filmakBozkatuAktibatua=false
      $scope.filmakGehituAktibatua=(!$scope.filmakGehituAktibatua);
  };

  $scope.aktibatuFilmakBozkatu = function() {
      $scope.erregistroAktibatua=false
      $scope.filmakGehituAktibatua=false
      $scope.filmakBozkatuAktibatua=(!$scope.filmakBozkatuAktibatua);
  };

  $scope.lortuFilmaDatuak=function(){
      $scope.lortuErabiltzaileaAktibatua=!$scope.lortuErabiltzaileaAktibatua
      //Hemen erabiltzailea lortzeko funtzioa

  };

    $scope.bozkatu=function(){

    //Funtzio honek bozkak datu basean gordeko ditu

  };

  $scope.sortuFilma = function () {
    var film = new Film();
    //Gehitu hemen entitatearen atributuak
    film.izena = $scope.filmaIzena;
    film.urtea = $scope.filmaUrtea;
    film.irudia = $scope.filmaIrudia;
    film.sinopsia = $scope.filmaSinopsia;
    film.bozkak = 0;
    film.iritsiak = [];
    film.$save(function (result) {
      $scope.films.push(result);
      $scope.filmaIzena = '';
      $scope.filmaUrtea = '';
      $scope.filmaIrudia = '';
      $scope.filmaSinopsia = '';
      $scope.filmaBozkak = '';
      $scope.filmaIritsia='';

    });

  }

  $scope.logout = function() {
    $window.location.href = '/';
  }

}]);