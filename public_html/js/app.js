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
        $rootScope.msg = "Seja bem vindo. Logue para ter acesso a todo conteúdo.";
        
        //Pessoas para Pagina
        $scope.carregarPessoa = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/pessoa/pessoa.json'}).then(function successCallback(responses) {
            $scope.pessoaPagina = responses.data;
            $rootScope.msgPessoa = "Carregado com sucesso !";
        }, function errorCallback(response) {
                    $rootScope.msgPessoa = "erro ao processar !";
                });
        };
        //Usuarios para Pagina
        $scope.carregarUsuario = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/usuario/usuario.json'}).then(function successCallback(responses) {
            $scope.usuarioPagina = responses.data;
            $rootScope.msgUsuario = "Carregado com sucesso !";
        }, function errorCallback(response) {
                    $rootScope.msgUsuario = "erro ao processar !";
                });
        };
        //Conteudo para Pagina
        $scope.carregarConteudo = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/conteudo/conteudo.json'}).then(function successCallback(response) {
                    $scope.conteudoPagina = response.data;
                    $rootScope.msgConteudo = "Carregado com sucesso !";
            }, function errorCallback(response) {
                    $rootScope.msgConteudo = "erro ao processar !";
                });            
        };
        //Curso para Pagina
        $scope.carregarCurso = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/curso/curso.json'}).then(function successCallback(response) {
                $scope.cursoPagina = response.data;
                $rootScope.msgCurso = "Carregado com sucesso !";
            }, function errorCallback(response) {
                $rootScope.msgCurso = "erro ao processar !";                
            });            
        };
        //Matricula para Pagina
        $scope.carregarMatricula = function () {
            $http({
                method:'GET',
                url:'http.site.com/rest/matricula/matricula.json'}).then(function sucessCallback(response) {
                $scope.matriculaPagina = response.data;
                $rootScope.msgMatricula = "Carregado com sucesso !";
            }, function errorCallback(response) {
                $rootScope.msgMatricula = "erro ao processar !";
            });
        };

        $scope.logar = function () {

            $http({
                    method:'GET',
                    url:'http.site.com/rest/usuario/usuario.json'}).then(function successCallback(responses) {
                angular.forEach(responses.data, function (value, key) {
                    if (value.userName == $scope.edtnome &&
                            value.senha == $scope.edtsenha) {
                        delete value.senha;
                        $scope.edtnome = '';
                        $scope.edtsenha = '';
                        $rootScope.usuarioLogado = value;
                        $location.path('/home');
                    }else{
                        $rootScope.msg = "Usuario não validado !";
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


