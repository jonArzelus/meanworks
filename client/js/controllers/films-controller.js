app.controller('filmsController', ['$scope', '$resource', function ($scope, $resource) {
  var Film = $resource('/api/films');

  Film.query(function (results) {
    $scope.films = results;
  });
  

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
  $scope.iz=" Frogetarako erabiltzailea"

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

}]);