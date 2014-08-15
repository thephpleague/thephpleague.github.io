// Include dependencies
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp')
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sass = require('gulp-ruby-sass');

// Convert SASS to CSS
gulp.task('css', function () {
    return gulp.src('sass/all.scss')
        .pipe(plumber())
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        .pipe(livereload({ auto: false }))
        .pipe(notify({ message: 'Compiled CSS (<%=file.relative%>)' }));
});

// Setup LiveReload
gulp.task('default', function () {

    // Watch .scss files
    gulp.watch('sass/*.scss', ['css']);

    // Create LiveReload server
    var server = livereload();
    livereload.listen();
});