//modulos
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
//tareas
//estilos
gulp.task('styles', () => {
    gulp.src('./scss/*.scss')
        .pipe(sass()).on('error', notify.onError((err) => {
            return 'Error al compilar sass. \n ' + err;
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(notify({ title: 'SASS', message: 'Archivo transpilado correctamente' }))
});
//sincronizar con el navegador
gulp.task('browser-sync', () => {
    browserSync.init({
        injectChanges: true,
        files: ['*.html', './css/*.css'],
        server: './'
    });
});
//escuchar cambios en los archivos

gulp.task('watch', () => {
    gulp.watch('./scss/*.scss', ['styles']);
})

//scripts
// gulp.task('scripts', () => {
//     console.log('tareas de scripts');
// });
//['dependencias de tareas']
gulp.task('default', ['styles', 'browser-sync', 'watch']);
