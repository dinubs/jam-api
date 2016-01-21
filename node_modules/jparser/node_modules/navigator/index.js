(function () {
  "use strict";

  var machine = "Macintosh"
    , arch = "Intel Mac OS X 10_6_7"
    , engine = "AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v0.4.7 Chrome/13.0.767.0 Safari/534.36";

  module.exports = {
      appCodeName: "Mozilla"
    , appName: "Netscape"
    , appVersion: "5.0 (" + machine + "; " + arch + ") " + engine
    , cookieEnabled: true
    , geolocation: undefined
      /*
        clearWatch
        getCurrentPosition
        watchPosition
      */
    , mimeTypes: []
      /*
      */
    , onLine: true
    , platform: "MacIntel"
    , plugins: []
      /*
      */
    , product: "Gecko"
    , productSub: "20030107"
    , userAgent: "Mozilla/5.0 (" + machine + "; " + arch + ") " + engine
    , vendor: "Joyent"
    , vendorSub: ""
  }
}());
