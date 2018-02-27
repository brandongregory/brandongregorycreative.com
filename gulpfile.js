let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCss = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');
let minify = require('gulp-minify');
let rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/css/'))
});

gulp.task('minifyJs', function() {
    return gulp.src('dev/js/scripts.js')
        .pipe(minify({
            noSource: true
        }))
        .pipe(rename('scripts.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minifyCss', function() {
    return gulp.src('dev/css/styles.css')
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('minifyHtml', function() {
    return gulp.src('dev/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('moveBlog', function() {
    return gulp.src('dev/blog/**/*')
        .pipe(gulp.dest('dist/blog/'))
});

gulp.task('moveFonts', function() {
    return gulp.src('dev/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('moveIcons', function() {
    return gulp.src('dev/icons/*')
        .pipe(gulp.dest('dist/icons/'))
});

gulp.task('package', ['minifyHtml', 'minifyCss', 'minifyJs', 'moveBlog', 'moveFonts', 'moveIcons']);

gulp.task('default', ['sass']);