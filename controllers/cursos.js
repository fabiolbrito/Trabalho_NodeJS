module.exports = function (app) {
    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/menu', params);
        },

        cadastroCursos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadCursos', params);
        },
        listaCursos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/listaCursos', params);
        },
        //cadastro de cursos
        novoCurso: function (request, response) {
            var codigo = request.body.curso.codigo;

            var descricao =  request.body.curso.descricao;

            var cargah = request.body.curso.cargah;


            //código a ser implementado
            response.redirect('/menu');
        }

    };
    return CursosController;
};