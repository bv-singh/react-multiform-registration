var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function(){
gulp.watch(config.saas.src, ['saas']);
gulp.watch(config.markup.watch, ['markup']);
});