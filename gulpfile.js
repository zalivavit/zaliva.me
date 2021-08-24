const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const sassGlob = require('gulp-sass-glob');
const minify = require('gulp-minify');
const critical = require('critical');

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
        .pipe(minify())
        .pipe( gulp.dest('./css/') )

    callback();
});

gulp.task('scss-watch', function(callback) {
    return gulp.src('./scss/style.scss')
        .pipe(sassGlob())
        .pipe( sass() )
        .pipe(minify())
        .pipe( gulp.dest('./css/'))

    callback();
});

gulp.task('critical', function (cb) {
    critical.generate({
        base: './',
        src: 'index.html',
        target: {
            css: 'css/cr.css',
        },
        dimensions: [
            {
                height: 200,
                width: 500,
            },
            {
                height: 900,
                width: 1200,
            },
        ],
    });
});

// Image minifier

gulp.task('imagemin', function(callback) {
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./src/img/**/*'))
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

gulp.task('default', gulp.parallel('server', 'watch', 'scss-build'));