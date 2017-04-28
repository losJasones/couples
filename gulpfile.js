const gulp = require('gulp');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false
    },
  });

  gulp.watch("src/js/**/*.js").on("change", reload);
});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});



