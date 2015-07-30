
var config          = require('./config').paths.js,
	gulp            = require('gulp'),
	jshint          = require('gulp-jshint'),
	concat          = require('gulp-concat'),
	stylish         = require('jshint-stylish'),
	sourcemaps      = require('gulp-sourcemaps'),
	order           = require('gulp-order')


// ---------- JavaScript tasks ---------- //

gulp.task( 'scripts', function() {

	return gulp.src( config.input )
		.pipe( jshint() )
		.pipe( jshint.reporter( stylish ) )
		.pipe( jshint.reporter('fail') ).on( 'error', function () {
			this.emit('end')  
		})
		.pipe( order([
			config.vendorInput,
			config.coreInput
		], { base: './' } ))
		.pipe( concat('script.js') )
		.pipe( gulp.dest( config.output ) )

});