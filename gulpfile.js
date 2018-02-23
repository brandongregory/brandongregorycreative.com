var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var gzip = require('gulp-gzip');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var minify = require('gulp-minify');
var path = require('path');

gulp.task('html', function() {
    return gulp.src('./_site/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gzip())
    	.pipe(gulp.dest('./_dist/'));
});

gulp.task('css', function () {
    return gulp.src('./css/master.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'less')]
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/'))
        .pipe(gzip())
    	.pipe(gulp.dest('./_dist/css/'));
});

gulp.task('js', function() {
    return gulp.src('./js/scripts.js')
        .pipe(minify({
            noSource: true
        }))
        .pipe(gzip())
        .pipe(gulp.dest('./_dist/js/'));
});

gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['html','css','js']);