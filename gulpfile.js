const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
    return src('./src/*.html')
        .pipe(dest('build/'))
}

function css() {
    return src('./src/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('build/'))
}

function js() {
    return src('./src/**/*.js', { sourcemaps: true })
        .pipe(concat('index.js'))
        .pipe(dest('build/', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js);
