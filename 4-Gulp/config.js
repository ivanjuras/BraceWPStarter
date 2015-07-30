
// ---------- Main configuration ---------- //

module.exports = {

	// Paths
	paths: {
		sass: {
			input: '2-Presentation/**/*.scss',
			output: './',
			prefixVersion: 'last 2 versions'
		},

		js: {
			input: '3-Logic/2-Frontend/**/*.js',
			coreInput: '3-Logic/2-Frontend/Core/*.js',
			vendorInput: '3-Logic/2-Frontend/Plugins/*.js',
			output: './',
			sourceMap: false
		}
	},

	// FTP
	ftpSettings: {
		ftpInput: ['./**', '!./node_modules/**'],
		ftpHostName: '217.199.187.250',
		ftpUserName: 'ivanjuras.com',
		ftpPassword: 'NN22mm34!!??',
		ftpRemoteDirectory: '/public_html/testftp/',
		ftpPort: 21,
		ftpParallelStreams: 3
	},

	// Other
	otherSettings: {
		serverPort: 3000
	}

};