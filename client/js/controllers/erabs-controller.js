app.controller('erabsController', ['$scope', '$resource', function ($scope, $resource) {
  var Erab = $resource('/api/erabs');

  Erab.query(function (results) {
    $scope.erabs = results;
  });
  

  $scope.erabs = []

  
  
  $scope.izenaPatroia="/^[a-zA-Z]*$/"
  $scope.postaPatroia="/^[a-z0-9._%+-]+@[a-z0-9.-]+\\\.[a-z]{2,4}$/"
  $scope.pasahitzPatroia="/^(?=.*\\\d).{4,8}$/"
  $scope.filmakGehituAktibatua=false
  $scope.filmakBozkatuAktibatua=true
  $scope.lortuErabiltzaileaAktibatua=false
  $scope.erregistroAktibatua=false

  $scope.myFunc = function() {
      $scope.erregistroAktibatua=(!$scope.erregistroAktibatua);
    };

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
  $scope.lortuErabiltzaileDatuak=function(){
      $scope.lortuErabiltzaileaAktibatua=!$scope.lortuErabiltzaileaAktibatua
      //Hemen erabiltzailea lortzeko funtzioa

  };

    $scope.bozkatu=function(){

    //Funtzio honek bozkak datu basean gordeko ditu

  };
  $scope.iz=" Frogetarako erabiltzailea"

  $scope.sortuErab = function () {
    var erab = new Erab();
    //Gehitu hemen entitatearen atributuak
    erab.izena = $scope.erabIzena;
    erab.abizena = $scope.erabAbizena;
    erab.postaElektronikoa = $scope.erabPosta;
    erab.pasahitza = $scope.erabPasahitza;
    erab.rol = 'user';
    erab.$save(function (result) {
      $scope.erabs.push(result);
      $scope.erabIzena = '';
      $scope.erabAbizena = '';
      $scope.erabPosta = '';
      $scope.erabPasahitza = '';
    });

  }

  $scope.lortuErab= function(){
  $scope.loginPosta;
  $scope.loginPasahitza;
  };

}]);

app.directive("tituloJumbotron", function() {
    return {
        restrict : "A",
        template : ""
        +"<div ng-controller="+'"erabsController"'+">"
        +"<div class="+'"container">'
          +"<div class="+'"jumbotron text-justify">'
             +"<h1>Ongi etorria!</h1>"
              +"<p>Aplikazio honetan behin erresgistratuta, eta saioa hasita, zure gustoko "
              +"filmak bozkatzeko aukera izango duzu, baita zure pelikula propioak gehitzeko ere.</p>"

          +"</div>"
        +"</div>"
        +"</div>"
    };
});
app.directive("tituloJumbotronFilmak", function() {
    return {
        restrict : "A",
        template : ""
        +"<div ng-controller="+'"erabsController"'+">"
        +"<div class="+'"container">'
          +"<div class="+'"jumbotron text-justify">'
             +"<h1>Hau filmen gunea da</h1>"
              +"<p>Nabigatu aplikazioaren aukeretan ezkerreko barraren bitartez, erabili "
              +"eskuineko barraren bilatzaileak erabiltzaileak edo filmak aurkitzeko.</p>"

          +"</div>"
        +"</div>"
        +"</div>"
    };
});