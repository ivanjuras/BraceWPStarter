
;( function( global, $, scrollReveal ) {

	// ---------- Global BraceWP variables ---------- // 

	var $global = $( global );
	var breakpointMedium = 1180;
	var winHeightPadded = $global.height() * 1.1;
	var isTouch = Modernizr.touch;

	// ---------- BraceWP object ---------- // 

	var BraceWP = {

		// Smooth scrolling
		smoothScrolling: function() {
			
			var scrollSpeed  = 500;

			$( 'a[href*=#]:not([href=#]):not([href*=#tab])' ).on( 'click', function( e ) {
				e.preventDefault();
				$( 'html, body' ).animate(
					{ scrollTop: $( this.hash ).offset().top },
					scrollSpeed
				);
			});

		},

		// Scroll to top button
		scrollTop: function() {

			var $btnToTop = $( '.ToTopButton' );
			var fadeInSpeed = 500;
			var fadeOutSpeed = 500;
			var toTopScrollSpeed = 300;

			$global.scroll(function() {
				if ( ( $global.scrollTop() > 150 ) && ( $global.width() < breakpointMedium ) ) {
					$btnToTop.fadeIn( fadeInSpeed );
				} else {
					$btnToTop.fadeOut( fadeOutSpeed );
				}
			});

			$btnToTop.on( 'click', function() {
				$( 'html, body' ).animate( { scrollTop: 0 }, toTopScrollSpeed );
			});

		},

		// Hamburger button on click
		hamburgerButtonClick: function() {
			
			var $btnHamburger = $('.HamburgerButton');
			var $navMenuA = $('.NavMenu');
			var menuToggleSpeed = 400;
			
			$btnHamburger.on( 'click', function() {
				$navMenuA.toggle( menuToggleSpeed );
			});

		},

		// Tab menu on click
		tabMenuOnClick: function() {

			var $tabItem = $( '.TabMenu-tabItem' );
			var $tabItemLink = $( '.TabMenu-tabLink' );
			var tabContent = '.TabMenu-tabContent';
			var fadeInSpeed = 400;
			var isActiveClass = 'is-active';

			$tabItemLink.on( 'click', function( e ) {

				var parentTabItem = $( this ).parent( $tabItem );
				var currentAttr = $( this ).attr( 'href' );

				e.preventDefault();
				
				$( tabContent + currentAttr )
					.fadeIn( fadeInSpeed )
					.siblings().hide();

				parentTabItem
					.addClass( isActiveClass )
					.siblings().removeClass( isActiveClass );
			});

		},

		// Show/hide navigation on resize
		showHideNavMenu: function() {

			var $navMenuA = $('.NavMenu');
			
			$global.on( 'resize', function() {
				if ( $(this).width() >= breakpointMedium ) {
					$navMenuA.show();
				} else {
					$navMenuA.hide();
				}
			});

		}

	};

	// ---------- Instantiate plugins ---------- //

	var sr = new scrollReveal();

	// ---------- Call functions ---------- //

	BraceWP.smoothScrolling();
	BraceWP.scrollTop();
	BraceWP.hamburgerButtonClick();
	BraceWP.showHideNavMenu();
	BraceWP.tabMenuOnClick();

	// ---------- Make BraceWP global ---------- // 
	
	// global.BraceWP = BraceWP;

}( window, jQuery, scrollReveal ));