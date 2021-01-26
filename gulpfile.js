const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ghPages = require('gulp-gh-pages');

const htmlPath = 'src/**/*.html'
const imgPath = 'src/img/*'
const jsPath = 'src/js/**/*.js'
const cssPath = 'src/css/**/*.css'
const fontPath = 'src/font/*'

function html() {
    return gulp.src(htmlPath)
        .pipe(gulp.dest('dist'));
}

function img() {
    return gulp.src(imgPath)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

function js() {
    return gulp.src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(rename({ suffix: '.min' }))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
}

function css() {
    return gulp.src(cssPath)
      .pipe(sourcemaps.init())
      .pipe(concat('style.min.css'))
      .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'));
}

function font() {
    return gulp.src(fontPath)
        .pipe(gulp.dest('dist/font'));
}

function watch() {
    gulp.watch([htmlPath, imgPath, jsPath, cssPath, fontPath], { interval: 1000 },  gulp.parallel(html, img, js, css, font));
}

function deploy() {
  return gulp.src("./dist/**/*")
    .pipe(ghPages ({
            remoteUrl: "https://github.com/OMeyer973/bureaudufun.git",
            branch: "gh-pages"
        }
    ));
};

exports.html = html;
exports.img = img;
exports.js = js;
exports.css = css;
exports.default = gulp.series( gulp.parallel(html, img, js, css, font), watch);

exports.deploy = deploy;
