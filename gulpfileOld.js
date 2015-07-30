
// ---------- Dependencies ---------- //

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglifyJS = require('gulp-uglifyjs'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	ftp = require('vinyl-ftp'),
	rename = require('gulp-rename'),
	del = require('del'),
	livereload = require('gulp-livereload');


// ---------- Output paths ---------- //

var publicDir = './',

	sassInput = '2-Presentation/**/*.scss',
	sassOutput = './',

	jsCoreInput = '3-Logic/2-Frontend/Core/*.js',
	jsVendorInput = '3-Logic/2-Frontend/Plugins/*.js',
	jsOutput = './'


// ---------- FTP settings ---------- //

var ftpHostName = 'gala-holiday.com',
	ftpUserName = 'galaho',
	ftpPassword = 'Dj$RV|V*yS',
	ftpRemoteDirectory = '/domains/ivanjuras.com/public_html/',
	ftpPort = 21,
	ftpParallelStreams = 10


// ---------- Other variables ---------- //

var jsSourceMap = false,
	sassAutoPrefixerVersion = 'last 2 versions',
	serverPort = 3000


// ---------- CSS tasks ---------- //

gulp.task( 'styles', function() {

	gulp.src( sassInput )
		.pipe( sass() ).on( 'error', handleErrors )
		.pipe( autoprefixer ({
		  browsers:[sassAutoPrefixerVersion]
		}))
		.pipe( minifyCSS() )
		.pipe( gulp.dest( sassOutput ) )
		.pipe( livereload({start: true}) )

});


// ---------- Javascript tasks ---------- //

gulp.task( 'scripts', function() {

	gulp.src( jsCoreInput )
		.pipe( jshint() )
		.pipe( jshint.reporter( stylish ) )
		.pipe( jshint.reporter('fail') ).on( 'error', function () {
		  this.emit('end')  
		})

	gulp.src( [ jsVendorInput, jsCoreInput ] )
		.pipe( uglifyJS( 'script.min.js', {
			mangle: true,
			outSourceMap: jsSourceMap
		}))
		.pipe( gulp.dest( jsOutput ) )
		.pipe( livereload({start: true}) )

});


// ---------- Deploy online (FTP) ---------- //

gulp.task( 'deploy', function() {

	var conn = ftp.create({
		host: ftpHostName,
		user: ftpUserName,
		password: ftpPassword,
		port: ftpPort,
		parallel: ftpParallelStreams,
		log: gutil.log
	});

	gulp.src( publicDirDeploy, { base: publicDir, buffer: false } )
		.pipe ( conn.differentSize( ftpRemoteDirectory ) )
		.pipe ( conn.newer( ftpRemoteDirectory ) )
		.pipe ( conn.dest( ftpRemoteDirectory ) )

});


// ---------- Watcher ---------- //

gulp.task( 'watch', function() {

	livereload.listen();

	gulp.watch( sassInput, ['styles'] );
	gulp.watch( jsCoreInput, ['scripts'] );

});


// ---------- Handle errors ---------- //

function handleErrors( error ) {
	console.error( error );
	this.emit( 'end' );
}


// ---------- Run all tasks ---------- //

gulp.task( 'default', ['styles', 'scripts'] );