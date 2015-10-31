var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
    sass: ['./www/scss/**/*.scss'],
    tsc: ['./www/app/**/*.ts']
};

gulp.task('default', ['tsc', 'sass']);

gulp.task('sass', function(done) {
  gulp.src('./www/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.tsc, ['tsc']);
});

gulp.task('tsc', function () {
    sh.exec("tsc -t es5 --sourceMap --removeComments --out ./www/js/app.js ./www/app/_app.ts");
});