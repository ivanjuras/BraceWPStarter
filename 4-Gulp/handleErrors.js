
// ---------- Handle errors ---------- //

module.exports = {
	handleErrors: function( error ) {
		console.log( error );
		this.emit( 'end' );
	}
}