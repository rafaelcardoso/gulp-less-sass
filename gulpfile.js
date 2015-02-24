
var gulp = require('gulp'),
	//lessSass = require('gulp-less-sass');
	lessSass = require('./index');

gulp.task('default', function () {
    return gulp.src('teste.less')
        .pipe(lessSass())
        .pipe(gulp.dest('dist'));
});
