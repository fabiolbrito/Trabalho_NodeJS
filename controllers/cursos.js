module.exports = function (app) {
    var Curso = require('./../modelos/curso.js');

    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/menu', params);
        },

        cadastroCursos: function (request, response) {
            var usuario = request.session.usuario;
            var options = ["Desenvolvimento", "Design", "Banco de Dados", "Redes"];
            var params = { usuario: usuario, options: options };
            response.render('cursos/cadCursos', params);
        },

        listaCursos: function (request, response) {
            var usuario = request.session.usuario;

            Curso.find(function (err, cursos) {
                if (err){ 
                    return console.error(err);
                } else {
                    response.render('cursos/listaCursos', {usuario : usuario, listCursos: cursos});
                };
            }); 
            
        },

        //cadastro de cursos
        novoCurso: function (request, response) {

            var newCurso = new Curso({
                codigo: request.body.curso.codigo,
                descricao: request.body.curso.descricao,
                cargaHoraria: request.body.curso.cargah,
                categoria: request.body.curso.categoria
            });

            newCurso.save();

            response.redirect('/menu');
        }

    };
    return CursosController;
};