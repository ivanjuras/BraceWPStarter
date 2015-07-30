
var config          = require('./config'),
	gulp            = require('gulp')

// ---------- Watcher ---------- //

gulp.task( 'watch', ['styles', 'scripts'], function() {
	gulp.watch( config.paths.sass.input, ['styles'] );
	gulp.watch( config.paths.js.input, ['scripts'] );
});