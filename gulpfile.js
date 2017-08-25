var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var path = require('path');

gulp.task('default', function () {
    return gulp.src('./css/master.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'less')]
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/'));
});