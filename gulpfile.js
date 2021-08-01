const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const sassGlob = require('gulp-sass-glob');

// SCSS

gulp.task('scss-build', function(callback) {
    return gulp.src('./scss/style.scss')
        .pipe(sassGlob())
        .pipe(sass({
            indentType: 'tab',
            indentWidth: 1,
            outputStyle: 'expanded'
        }))
        .pipe(prefix('last 4 versions'))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe( gulp.dest('./build/css/') )

    callback();
});

gulp.task('scss-watch', function(callback) {
    return gulp.src('./scss/style.scss')
        .pipe(sassGlob())
        .pipe( sass() )
        .pipe( gulp.dest('./css/'))

    callback();
});

// Build tasks

gulp.task('html', function() {
    return gulp.src('./src/index.html').pipe(gulp.dest('./build/'));
});

gulp.task('js', function() {
    return gulp.src('./js/**/*.js').pipe(gulp.dest('./build/js/'));
});

// Image minifier

gulp.task('imagemin', function(callback) {
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'))
});

// Task server

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

// Watch

gulp.task('watch', function() {
     watch(['./*.html', './**/*.css'], gulp.parallel( browserSync.reload ));
     watch('./**/*scss', gulp.parallel('scss-watch'));
});

// Default

gulp.task('default', gulp.parallel('server', 'watch'));
gulp.task('build', gulp.parallel('html', 'scss-build', 'js', 'imagemin'));