
function isIE(versionNumber) {
var detect = navigator.userAgent.toLowerCase();
if(!(navigator && navigator.userAgent && navigator.userAgent.toLowerCase)) {
  	        return false;
  	    } else {
  	        if(detect.indexOf('msie') + 1) {
  	            // browser is internet explorer
  	            var ver = function() {
  	                // http://msdn.microsoft.com/workshop/author/dhtml/overview/browserdetection.asp
  	                // Returns the version of Internet Explorer or a -1
  	                // (indicating the use of another browser).

  	                var rv = -1; // Return value assumes failure

  	                if (navigator.appName == 'Microsoft Internet Explorer') {
  	                    var ua = navigator.userAgent;
  	                    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
  	                    if (re.exec(ua) != null) {
  	                        rv = parseFloat( RegExp.$1 );
  	                    }
  	                }
  	                return rv;
  	            };

  	            var valid = true;
  	            // if the version can be found and the version is less than our version number it is invalid
  	            if ((ver > -1) && (ver < versionNumber)) {
  	                valid = false;
  	            }
  	            return valid;
  	        } else {
  	            return false
  	        }
  	    }
} 

function noIEforThis() {

	if (isIE(6)) {
		alert("You are using Internet Explorer 6.0 or older to view the web.  IE6 is an eight year old browser which does not display modern web sites properly.  Please upgrade to a newer browser to fully enjoy the web. Thank you :)");
	}
}