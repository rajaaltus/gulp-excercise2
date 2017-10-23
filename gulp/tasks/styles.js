var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba= require('postcss-hexrgba'),
nested = require('postcss-nested');

gulp.task('styles', function() {

	return gulp.src('./app/assets/sass/styles.css')
		.pipe(postcss([cssImport,mixins,nested,cssvars,hexrgba,autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());	
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});