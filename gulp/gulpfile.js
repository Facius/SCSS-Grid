
var gulp = require('gulp');
var pluginLoader = require('gulp-load-plugins');

var $ = pluginLoader();

gulp.task('sass', function () {
gulp.src('scss/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('styles'))
});

