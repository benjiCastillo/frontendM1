var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var concat = require('gulp-concat');





// gulp.task('tarea1',function(){})
//tarea de estilos
gulp.task('styles', () => {
    gulp.src('./src/scss/*.scss')
        .pipe(sass()).on('error', notify.onError((err) => {
            return 'Error al transpilar sass. \n ' + err;
        }))
        .pipe(csso())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(notify({ title: 'SASS', message: 'Archivos correctamente transpilados' }))
});
//tarea de js
gulp.task('scripts', () => {
    return gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify('app.js'))
        .pipe(gulp.dest('./dist/js/'))
})


// tarea para sincronizar con el navegador
gulp.task('browser-sync', () => {
    browserSync.init({
        injectChanges: true,
        files: ['*.html', './dist/**/*.{css,js}'],
        server: './'
    })
})

gulp.task('watch', () => {
    gulp.watch('./src/scss/*.scss', ['styles']),
    gulp.watch('./src/js/*.js', ['scripts'])
})

gulp.task('default', ['styles', 'scripts', 'browser-sync', 'watch'])