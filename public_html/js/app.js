var app = angular.module('MyApp', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider            
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'formControle'
            })            
            .when('/acessoNegado', {
                templateUrl: 'pages/acessoNegado.html',
                controller: 'formControle'
            })
            .otherwise({redirectTo: '/home'});
});

app.controller('formControle', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
        
//        //Pessoas
//        $http.get('http.site.com/rest/pessoa/pessoa.json').then(function (responses) {
//            $scope.pessoas = responses.data;
//        });
        //Pessoas para Pagina
        $scope.carregarPessoa = function () {
            $http.get('http.site.com/rest/pessoa/pessoa.json').then(function (responses) {
            $scope.pessoaPagina = responses.data;
        });
        };
        //Usuarios
//        $http.get('http.site.com/rest/usuario/usuario.json').then(function (response) {
//            $scope.usuarios = response.data;
//        });
        //Usuarios para Pagina
        $scope.carregarUsuario = function () {
            $http.get('http.site.com/rest/usuario/usuario.json').then(function (responses) {
            $scope.usuarioPagina = responses.data;
        });
        };
        //Conteudo para Pagina
        $scope.carregarConteudo = function () {
            $http.get('http.site.com/rest/conteudo/conteudo.json').then(function(response) {
                    $scope.conteudoPagina = response.data;
            });            
        };

        $scope.logar = function () {

            $http({
                    method:'GET',
                    url:'http.site.com/rest/usuario/usuario.json'}).then(function (responses) {
                angular.forEach(responses.data, function (value, key) {
                    if (value.userName == $scope.edtnome &&
                            value.senha == $scope.edtsenha) {
                        delete value.senha;
                        $scope.edtnome = '';
                        $scope.edtsenha = '';
                        $rootScope.usuarioLogado = value;
                        $location.path('/home');
                    }
                })
            })

        };
        
        $scope.logout = function () {
                $rootScope.usuarioLogado = null;
                $location.path('/home');
            };


    }]);

    app.run(function ($rootScope, $location) {           
            var rotasBloqueadasUsuariosNaoLogados = ['/conteudo','/pessoas','/usuarios'];          
            $rootScope.$on('$locationChangeStart', function () { 
                if ($rootScope.usuarioLogado == null && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1) {
                    $location.path('/home');
                } ;
            });
        });


