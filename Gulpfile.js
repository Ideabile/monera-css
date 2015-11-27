var gulp = require('gulp'),
    yargs = require('yargs'),
    sass = require('gulp-sass'),
    // Parameters needed for compile and watch
    options = yargs.default({
      origin: './src/bootstrap/index.scss',
      destination: './css'
    }).argv;

gulp.task('sass', function(cb){
    gulp.src(options.origin)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(options.destination));
});

gulp.task('default', ['sass']);
