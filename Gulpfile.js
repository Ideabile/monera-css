var gulp = require('gulp'),
    _ = require('underscore');
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    // Parameters needed for compile and watch
    _options = {
      origin: './src/index.scss',
      destination: './css',
      watch: './src/**/*.scss',
      browserSync: false,
      gulp: gulp
    },
    taskSass = function( options ){
      var _pipe = options.gulp.src(options.origin)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(options.destination));

        if(options.browserSync) _pipe.pipe( gulpif(
          options.browserSync, options.browserSync.stream({match: '**/*.css'})));

    },
    taskWatch = function( options ){
      options.gulp.watch(options.watch, ['sass']);
    };

gulp.task('sass', function(){ taskSass(_options); });
gulp.task('watch:sass', function(){ taskWatch(_options); });

module.exports = function(options){
  options = _.extend( _options, options );
  options.gulp.task('sass', function(){ taskSass(options); });
  options.gulp.task('watch:sass', function(){ taskWatch(options); });
};
