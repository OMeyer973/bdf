const del = require('del');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');

const htmlPath = 'src/**/*.html'
const imgPath = 'src/img/*'
const jsPath = 'src/js/**/*.js'
const cssPath = 'src/css/**/*.css'
const fontPath = 'src/font/*'

function cleanTask() {
    return del(['./dist/', './.publish']);
}

function htmlTask() {
    return gulp.src(htmlPath)
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

function imgTask() {
    return gulp.src(imgPath)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
}

function jsTask() {
    return gulp.src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(rename({ suffix: '.min' }))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

function cssTask() {
    return gulp.src(cssPath)
      .pipe(sourcemaps.init())
      .pipe(concat('style.min.css'))
      .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
}

function fontTask() {
    return gulp.src(fontPath)
        .pipe(gulp.dest('dist/font'))
        .pipe(browserSync.stream());
}

const buildTask = gulp.parallel(htmlTask, imgTask, jsTask, cssTask, fontTask);

function watchTask() {
    gulp.watch(htmlPath, { interval: 500 }, htmlTask).on('change', browserSync.reload);
    gulp.watch(imgPath, { interval: 500 }, imgTask).on('change', browserSync.reload);
    gulp.watch(jsPath, { interval: 500 }, jsTask).on('change', browserSync.reload);
    gulp.watch(cssPath, { interval: 500 }, cssTask).on('change', browserSync.reload);
    gulp.watch(fontPath, { interval: 500 }, fontTask).on('change', browserSync.reload);
}

function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
}

function ghPagesTask() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages ({
        remoteUrl: 'https://github.com/OMeyer973/bureaudufun.git',
        branch: 'gh-pages'
    }));
};

exports.clean = cleanTask;
exports.build = buildTask;
exports.watch = exports.default = gulp.series(buildTask, gulp.parallel(watchTask, browserSyncTask));
exports.deploy = gulp.series(buildTask, ghPagesTask);
