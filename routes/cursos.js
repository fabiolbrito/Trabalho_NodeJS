module.exports = function (app) {
    var valida = require('./../middlewares/valida');
    var cursos = app.controllers.cursos;
    app.get('/menu', cursos.menu);
    app.get('/cadCursos', cursos.cadastroCursos);
    app.get('/listaCursos', cursos.listaCursos);

    app.post('/novoCurso', cursos.novoCurso);
};