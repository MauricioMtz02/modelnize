const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function bootstrap() {
    return gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./styles'));
  };

exports.bootstrap = bootstrap;