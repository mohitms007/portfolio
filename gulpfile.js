const gulp = require('gulp');
const sass = require('./build/sass');
const images = require('./build/images');
const sync = require('./build/browsersync');

[sass, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', gulp.series(['sass', 'images', 'jekyll-build']));
