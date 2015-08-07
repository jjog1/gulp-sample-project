var gulp = require('gulp');
var less = require('gulp-less');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var mainbowerfiles = require('gulp-main-bower-files');

gulp.task('default', ['styles', 'scripts', 'templates']);

gulp.task('styles', function(){
	console.log('yay styles');
	gulp.src('style.less')
	.pipe(less())
	.pipe(gulp.dest('dist'))
});

gulp.task('scripts', function(){
	console.log('yay scripts');
	gulp.src('script.coffee')
	.pipe(coffee())
	.pipe(gulp.dest('dist/scripts'))


	console.log('main bower files');
	gulp.src('./bower.json')
        .pipe(mainbowerfiles())
        .pipe(gulp.dest('dist/libs'));

});

gulp.task('templates', function(){
	console.log('yay templates');

	gulp.src('index.jade')
	.pipe(jade())
	.pipe(gulp.dest('dist'))
});