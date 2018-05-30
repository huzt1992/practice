const gulp        = require('gulp');
const babelify    = require('babelify');
const browserify  = require('browserify');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');

gulp.task('es6', () => {
  browserify('dev/app.js')
    .transform('babelify', {
      presets: ['env']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('public/'));
});

gulp.task('default', ['es6'], () => {
  gulp.watch('dev/**/*.js', ['es6'])
});