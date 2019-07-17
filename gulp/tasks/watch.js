'use strict';

const reload = require('./serve');

module.exports = function() {
	$.gulp.task('watch', function() {
		// $.gulp.watch('./src/*.html', $.gulp.series('html'));
		$.gulp.watch('./src/**/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./src/**/**/*.scss', $.gulp.series('sass:dev'));
		$.gulp.watch('./src/img/*', $.gulp.series('img'));
		$.gulp.watch('./src/js/*.js', $.gulp.series(reload));
		$.gulp.watch('./src/fonts/*', $.gulp.series('fonts'));
	});
};