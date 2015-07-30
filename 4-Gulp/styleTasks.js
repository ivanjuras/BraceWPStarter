
var config          = require('./config').paths.sass,
	autoprefixer    = require('gulp-autoprefixer'),
	gulp            = require('gulp'),
	handleErrors    = require('./handleErrors').handleErrors,
	sass            = require('gulp-sass')

// ---------- CSS tasks ---------- //

gulp.task( 'styles', function() {

	return gulp.src( config.input )
		.pipe( sass() ).on( 'error', handleErrors )
		.pipe( autoprefixer ({
			browsers:[ config.prefixVersion ]
		}))
		.pipe( gulp.dest( config.output ) )

});