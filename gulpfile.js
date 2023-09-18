var gulp = require('gulp'),
    concat = require('gulp-concat'), //css
    uglify = require('gulp-uglify'), // js
    sass = require('gulp-sass')(require('sass')), // sass
    cleanCSS = require('gulp-clean-css'), // css
    rename = require('gulp-rename');

gulp.task('scripts', (cb) => {
    gulp.src('dev/js/index.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js'));
    cb();
});

gulp.task('sass', (cb) => {
    gulp.src('dev/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/sass'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
    cb();
});

gulp.task('css', (cb) => {
    gulp.src(['dev/sass/github-markdown.css', 'dev/sass/share.min.css'])
        .pipe(concat('plugins.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css'));
    cb();
});

gulp.task('cv', (cb) => {
    gulp.src('dev/sass/cv.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/sass'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
    cb();
});

gulp.task('watch', function(done) {
    gulp.watch('dev/sass/*.scss', gulp.series('sass'));
    gulp.watch(['dev/sass/github-markdown.css', 'dev/sass/share.min.css'], gulp.series("css"));
    gulp.watch('dev/sass/cv.scss', gulp.series('cv'));
    gulp.watch('dev/js/*.js', gulp.series("scripts"));
    done();
});

gulp.task('default', gulp.series('scripts', 'sass', 'css', 'cv', 'watch'));
