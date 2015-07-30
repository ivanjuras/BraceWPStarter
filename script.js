/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderradius-boxshadow-flexbox-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-csstransforms-csstransitions-indexeddb-localstorage-webworkers-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load-cssclassprefix:bracewp!
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };
    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };


    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };



    tests['webworkers'] = function() {
        return !!window.Worker;
    };    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };



    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }



     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className+=" bracewp-" + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
                var version = '3.7.0';

            var options = window.html5 || {};

            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

            var supportsHtml5Styles;

            var expando = '_html5shiv';

            var expanID = 0;

            var expandoData = {};

            var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
                    supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

            function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

            function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

            function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

            function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

                                                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

            function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

            function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
                    if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                                                                                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

            function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                                                                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                                                                    'mark{background:#FF0;color:#000}' +
                                                                                    'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

            var html5 = {

                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

                'version': version,

                'shivCSS': (options.shivCSS !== false),

                'supportsUnknownElements': supportsUnknownElements,

                'shivMethods': (options.shivMethods !== false),

                'type': 'default',

                'shivDocument': shivDocument,

                createElement: createElement,

                createDocumentFragment: createDocumentFragment
        };

            window.html5 = html5;

            shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;



    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? " bracewp-js bracewp-"+classes.join(" bracewp-") : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require, exports, module);
	} else {
		root.scrollReveal = factory();
	}
}(this, function(require, exports, module) {

/*
											 _ _ _____                      _   _
											| | |  __ \                    | | (_)
		___  ___ _ __ ___ | | | |__) |_____   _____  __ _| |  _ ___
	 / __|/ __| '__/ _ \| | |  _  // _ \ \ / / _ \/ _` | | | / __|
	 \__ \ (__| | | (_) | | | | \ \  __/\ V /  __/ (_| | |_| \__ \
	 |___/\___|_|  \___/|_|_|_|  \_\___| \_/ \___|\__,_|_(_) |___/ v2.3.2
																												_/ |
																											 |__/

================================================================================

	 scrollReveal.js (c) 2015 Julian Lloyd ( @julianlloyd )
	 Licensed under MIT ( http://www.opensource.org/licenses/mit-license.php )

==============================================================================*/

window.scrollReveal = (function( window ){

	'use strict';

	var _requestAnimFrame;
	var _extend;
	var _handler;
	var self;

	function scrollReveal( config ){

		if ( !( this instanceof scrollReveal ) ) {
			return new scrollReveal( config );
		}

		self         = this;
		self.elems   = {};
		self.serial  = 1;
		self.blocked = false;
		self.config  = _extend( self.defaults, config );

		if ( self.isMobile() && !self.config.mobile || !self.isSupported() ){
			self.destroy();
			return;
		}

		if ( self.config.viewport === window.document.documentElement ){

			window.addEventListener( 'scroll', _handler, false );
			window.addEventListener( 'resize', _handler, false );

		} else {
			self.config.viewport.addEventListener( 'scroll', _handler, false );
		}

		self.init( true );
	}

	scrollReveal.prototype = {

		defaults: {

			enter:    'bottom',
			move:     '8px',
			over:     '0.6s',
			wait:     '0s',
			easing:   'ease',

			scale:    { direction: 'up', power: '5%' },
			rotate:   { x: 0, y: 0, z: 0 },

			opacity:  0,
			mobile:   false,
			reset:    false,

			//        Expects a reference to a DOM node (the <html> node by default)
			//        which is used as the context when checking element visibility.
			viewport: window.document.documentElement,

			//        'always' — delay every time an animation resets
			//        'onload' - delay only for animations triggered by first load
			//        'once'   — delay only the first time an animation reveals
			delay:    'once',

			//        vFactor changes when an element is considered in the viewport.
			//        The default value of 0.60 means 60% of an element must be
			//        visible for its reveal animation to trigger.
			vFactor:  0.60,

			complete: function( el ){} // Note: reset animations do not complete.
		},

		// Queries the DOM, builds scrollReveal elements and triggers animation.
		// @param {boolean} flag — a hook for controlling delay on first load.
		init: function( flag ){

			var serial;
			var elem;
			var query;

			query = Array.prototype.slice.call( self.config.viewport.querySelectorAll('[data-sr]') );
			query.forEach(function( el ){

				serial      = self.serial++;
				elem        = self.elems[ serial ] = { domEl: el };
				elem.config = self.configFactory( elem );
				elem.styles = self.styleFactory( elem );
				elem.seen   = false;

				el.removeAttribute('data-sr');

				el.setAttribute( 'style',
						elem.styles.inline
					+ elem.styles.initial
				);
			})

			self.scrolled = self.scrollY();
			self.animate( flag );
		},

		// Applies and removes appropriate styles.
		// @param {boolean} flag — a hook for controlling delay on first load.
		animate: function( flag ){

			var key;
			var elem;
			var visible;

			// Begin element store digest.
			for ( key in self.elems ){
				if ( self.elems.hasOwnProperty( key ) ){

					elem    = self.elems[ key ];
					visible = self.isElemInViewport( elem );

					if ( visible ){

						if ( self.config.delay === 'always'
						|| ( self.config.delay === 'onload' && flag )
						|| ( self.config.delay === 'once'   && !elem.seen ) ){

							// Use delay.
							elem.domEl.setAttribute( 'style',
									elem.styles.inline
								+ elem.styles.target
								+ elem.styles.transition
							);

						} else {

							// Don’t use delay.
							elem.domEl.setAttribute( 'style',
									elem.styles.inline
								+ elem.styles.target
								+ elem.styles.reset
							);
						}

						elem.seen = true;

						if ( !elem.config.reset && !elem.animating ){
							elem.animating = true;
							complete( key );
						}

					} else if ( !visible && elem.config.reset ){

						elem.domEl.setAttribute( 'style',
								elem.styles.inline
							+ elem.styles.initial
							+ elem.styles.reset
						);
					}
				}
			}

			// Digest complete, now un-block the event handler.
			self.blocked = false;

			// Cleans the DOM and removes completed elements from self.elems.
			// @param {integer} key — self.elems property key.
			function complete( key ){

				var elem = self.elems[ key ];

				setTimeout(function(){

					elem.domEl.setAttribute( 'style', elem.styles.inline );
					elem.config.complete( elem.domEl );
					delete self.elems[ key ];

				}, elem.styles.duration );
			}
		},

		// Parses an elements data-sr attribute, and returns a configuration object.
		// @param {object} elem — An object from self.elems.
		// @return {object}
		configFactory: function( elem ){

			var parsed = {};
			var config = {};
			var words  = elem.domEl.getAttribute('data-sr').split( /[, ]+/ );

			words.forEach(function( keyword, i ){
				switch ( keyword ){

					case 'enter':

						parsed.enter = words[ i + 1 ];
						break;

					case 'wait':

						parsed.wait = words[ i + 1 ];
						break;

					case 'move':

						parsed.move = words[ i + 1 ];
						break;

					case 'ease':

						parsed.move = words[ i + 1 ];
						parsed.ease = 'ease';
						break;

					case 'ease-in':

						if ( words[ i + 1 ] == 'up' || words[ i + 1 ] == 'down' ){

							parsed.scale.direction = words[ i + 1 ];
							parsed.scale.power     = words[ i + 2 ];
							parsed.easing          = 'ease-in';
							break;
						}

						parsed.move   = words[ i + 1 ];
						parsed.easing = 'ease-in';
						break;

					case 'ease-in-out':

						if ( words[ i + 1 ] == 'up' || words[ i + 1 ] == 'down' ){

							parsed.scale.direction = words[ i + 1 ];
							parsed.scale.power     = words[ i + 2 ];
							parsed.easing          = 'ease-in-out';
							break;
						}

						parsed.move   = words[ i + 1 ];
						parsed.easing = 'ease-in-out';
						break;

					case 'ease-out':

						if ( words[ i + 1 ] == 'up' || words[ i + 1 ] == 'down' ){

							parsed.scale.direction = words[ i + 1 ];
							parsed.scale.power     = words[ i + 2 ];
							parsed.easing          = 'ease-out';
							break;
						}

						parsed.move   = words[ i + 1 ];
						parsed.easing = 'ease-out';
						break;

					case 'hustle':

						if ( words[ i + 1 ] == 'up' || words[ i + 1 ] == 'down' ){

							parsed.scale.direction = words[ i + 1 ];
							parsed.scale.power     = words[ i + 2 ];
							parsed.easing          = 'cubic-bezier( 0.6, 0.2, 0.1, 1 )';
							break;
						}

						parsed.move   = words[ i + 1 ];
						parsed.easing = 'cubic-bezier( 0.6, 0.2, 0.1, 1 )';
						break;

					case 'over':

						parsed.over = words[ i + 1 ];
						break;

					case 'flip':
					case 'pitch':
						parsed.rotate   = parsed.rotate || {};
						parsed.rotate.x = words[ i + 1 ];
						break;

					case 'spin':
					case 'yaw':
						parsed.rotate   = parsed.rotate || {};
						parsed.rotate.y = words[ i + 1 ];
						break;

					case 'roll':
						parsed.rotate   = parsed.rotate || {};
						parsed.rotate.z = words[ i + 1 ];
						break;

					case 'reset':

						if ( words[ i - 1 ] == 'no' ){
							parsed.reset = false;
						} else {
							parsed.reset = true;
						}
						break;

					case 'scale':

						parsed.scale = {};

						if ( words[ i + 1 ] == 'up' || words[ i + 1 ] == 'down' ){

							parsed.scale.direction = words[ i + 1 ];
							parsed.scale.power     = words[ i + 2 ];
							break;
						}

						parsed.scale.power = words[ i + 1 ];
						break;

					case 'vFactor':
					case 'vF':
						parsed.vFactor = words[ i + 1 ];
						break;

					case 'opacity':
						parsed.opacity = words[ i + 1 ];
						break;

					default:
						return;
				}
			});

			// Build default config object, then apply any keywords parsed from the
			// data-sr attribute.
			config = _extend( config, self.config );
			config = _extend( config, parsed );

			if ( config.enter === 'top' || config.enter === 'bottom' ){
				config.axis = 'Y';
			} else if ( config.enter === 'left' || config.enter === 'right' ){
				config.axis = 'X';
			}

			// Let’s make sure our our pixel distances are negative for top and left.
			// e.g. "enter top and move 25px" starts at 'top: -25px' in CSS.
			if ( config.enter === 'top' || config.enter === 'left' ){
				config.move = '-' + config.move;
			}

			return config;
		},

		// Generates styles based on an elements configuration property.
		// @param {object} elem — An object from self.elems.
		// @return {object}
		styleFactory: function( elem ){

			var inline;
			var initial;
			var reset;
			var target;
			var transition;

			var cfg      = elem.config;
			var duration = ( parseFloat( cfg.over ) + parseFloat( cfg.wait ) ) * 1000;

			// Want to disable delay on mobile devices? Uncomment the line below.
			// if ( self.isMobile() && self.config.mobile ) cfg.wait = 0;

			if ( elem.domEl.getAttribute('style') ){
				inline = elem.domEl.getAttribute('style') + '; visibility: visible; ';
			} else {
				inline = 'visibility: visible; ';
			}

			transition = '-webkit-transition: -webkit-transform ' + cfg.over + ' ' + cfg.easing + ' ' + cfg.wait + ', opacity ' + cfg.over + ' ' + cfg.easing + ' ' + cfg.wait + '; ' +
													 'transition: transform '         + cfg.over + ' ' + cfg.easing + ' ' + cfg.wait + ', opacity ' + cfg.over + ' ' + cfg.easing + ' ' + cfg.wait + '; ' +
									'-webkit-perspective: 1000;' +
					'-webkit-backface-visibility: hidden;';

			reset      = '-webkit-transition: -webkit-transform ' + cfg.over + ' ' + cfg.easing + ' 0s, opacity ' + cfg.over + ' ' + cfg.easing + ' 0s; ' +
													 'transition: transform '         + cfg.over + ' ' + cfg.easing + ' 0s, opacity ' + cfg.over + ' ' + cfg.easing + ' 0s; ' +
									'-webkit-perspective: 1000; ' +
					'-webkit-backface-visibility: hidden; ';

			initial = 'transform:';
			target  = 'transform:';
			build();

			// Build again for webkit…
			initial += '-webkit-transform:';
			target  += '-webkit-transform:';
			build();

			return {
				transition: transition,
				initial:    initial,
				target:     target,
				reset:      reset,
				inline:     inline,
				duration:   duration
			};

			// Constructs initial and target styles.
			function build(){

				if ( parseInt( cfg.move ) !== 0 ){
					initial += ' translate' + cfg.axis + '(' + cfg.move + ')';
					target  += ' translate' + cfg.axis + '(0)';
				}

				if ( parseInt( cfg.scale.power ) !== 0 ){

					if ( cfg.scale.direction === 'up' ){
						cfg.scale.value = 1 - ( parseFloat( cfg.scale.power ) * 0.01 );
					} else if ( cfg.scale.direction === 'down' ){
						cfg.scale.value = 1 + ( parseFloat( cfg.scale.power ) * 0.01 );
					}

					initial += ' scale(' + cfg.scale.value + ')';
					target  += ' scale(1)';
				}

				if ( cfg.rotate.x ){
					initial += ' rotateX(' + cfg.rotate.x + ')';
					target  += ' rotateX(0)';
				}

				if ( cfg.rotate.y ){
					initial += ' rotateY(' + cfg.rotate.y + ')';
					target  += ' rotateY(0)';
				}

				if ( cfg.rotate.z ){
					initial += ' rotateZ(' + cfg.rotate.z + ')';
					target  += ' rotateZ(0)';
				}

				initial += '; opacity: ' + cfg.opacity + '; ';
				target  += '; opacity: 1; ';
			}
		},

		getViewportH: function(){

			var client = self.config.viewport['clientHeight'];
			var inner  = window['innerHeight'];

			if ( self.config.viewport === window.document.documentElement ){
				return ( client < inner ) ? inner : client;
			}

			return client;
		},

		scrollY: function(){
			if ( self.config.viewport === window.document.documentElement ){
				return window.pageYOffset;
			} else {
				return self.config.viewport.scrollTop + self.config.viewport.offsetTop;
			}
		},

		getOffset: function( el ){

			var offsetTop  = 0;
			var offsetLeft = 0;

			do {
				if ( !isNaN( el.offsetTop ) ){
					offsetTop  += el.offsetTop;
				}
				if ( !isNaN( el.offsetLeft ) ){
					offsetLeft += el.offsetLeft;
				}
			} while ( el = el.offsetParent );

			return {
				top: offsetTop,
				left: offsetLeft
			};
		},

		isElemInViewport: function( elem ){

			var elHeight = elem.domEl.offsetHeight;
			var elTop    = self.getOffset( elem.domEl ).top;
			var elBottom = elTop + elHeight;
			var vFactor  = elem.config.vFactor || 0;

			return ( confirmBounds() || isPositionFixed() );

			function confirmBounds(){

				var top        = elTop + elHeight * vFactor;
				var bottom     = elBottom - elHeight * vFactor;
				var viewBottom = self.scrolled + self.getViewportH();
				var viewTop    = self.scrolled;

				return ( top < viewBottom ) && ( bottom > viewTop );
			}

			function isPositionFixed(){

				var el    = elem.domEl;
				var style = el.currentStyle || window.getComputedStyle( el, null );

				return style.position === 'fixed';
			}
		},

		isMobile: function(){

			var agent = navigator.userAgent || navigator.vendor || window.opera;

			return (/(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test( agent )||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( agent.substr( 0, 4 ))) ? true : false;
		},

		isSupported: function(){

			var sensor    = document.createElement('sensor');
			var cssPrefix = 'Webkit,Moz,O,'.split(',');
			var tests     = ( 'transition ' + cssPrefix.join('transition,') ).split(',');

			for ( var i = 0; i < tests.length; i++ ){
				if ( !sensor.style[tests[i]] === '' ){
					return false;
				}
			}

			return true;
		},

		destroy: function(){

			var node = self.config.viewport;
			var query = Array.prototype.slice.call( node.querySelectorAll('[data-sr]') );

			query.forEach(function( el ){
				el.removeAttribute('data-sr');
			});
		}
	} // End of the scrollReveal prototype ======================================|

	_handler = function( e ){

		if ( !self.blocked ){

			self.blocked  = true;
			self.scrolled = self.scrollY();

			_requestAnimFrame(function(){
				self.animate();
			});
		}
	}

	_extend = function( target, src ){

		for ( var prop in src ){
			if ( src.hasOwnProperty( prop ) ){
				target[ prop ] = src[ prop ];
			}
		}

		return target;
	}

	// RequestAnimationFrame polyfill.
	_requestAnimFrame = (function(){

		return window.requestAnimationFrame        ||
					 window.webkitRequestAnimationFrame  ||
					 window.mozRequestAnimationFrame     ||

					function( callback ){
						window.setTimeout( callback, 1000 / 60 );
					};
	}());

	return scrollReveal;

})( window );

return scrollReveal;

}));

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