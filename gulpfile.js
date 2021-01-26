const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const { src, series, parallel, dest, watch } = require('gulp');

const htmlPath = 'src/**/*.html'
const imgPath = 'src/img/*'
const jsPath = 'src/js/**/*.js'
const cssPath = 'src/css/**/*.css'
const fontPath = 'src/font/*'

function htmlTask() {
    return src(htmlPath)
        .pipe(gulp.dest('dist'));
}

function imgTask() {
    return src(imgPath)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

function jsTask() {
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(rename({ suffix: '.min' }))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'))
}

function cssTask() {
    return src(cssPath)
      .pipe(sourcemaps.init())
      .pipe(concat('style.min.css'))
      .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
      .pipe(sourcemaps.write('.'))
      .pipe(dest('dist/css'));
}

function fontTask() {
    return src(fontPath)
        .pipe(gulp.dest('dist/font'));
}

function watchTask() {
    watch([htmlPath, imgPath, jsPath, cssPath, fontPath], { interval: 1000 }, parallel(htmlTask, imgTask, jsTask, cssTask, fontTask));
}

exports.htmlTask = htmlTask;
exports.imgTask = imgTask;
exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.default = series(parallel(htmlTask, imgTask, jsTask, cssTask, fontTask), watchTask);
