var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    // Parameters needed for compile and watch
    origin = './src/index.scss',
    destination = './css',
    watch = './src/**/*.scss',
    browserSync = false,
    taskSass = function(){
      gulp.src(origin)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destination))
        .pipe(gulpif(browserSync, browserSync.stream({match: '**/*.css'})));

    },
    taskWatch = function(){
      gulp.watch(watch, ['sass']);
    };

gulp.task('sass', taskSass);
gulp.task('watch:sass', taskWatch);

module.exports = function(_origin, _destination, _watch, _gulp, _browserSync){
  origin = _origin ? _origin : origin;
  destination = _destination ? _destination : destination;
  watch = _watch ? _watch : watch;
  gulp = _gulp ? _gulp : gulp;
  browserSync = _browserSync ? _browserSync : browserSync;

  gulp.task('sass', taskSass);
  gulp.task('watch:sass', taskWatch);
};
