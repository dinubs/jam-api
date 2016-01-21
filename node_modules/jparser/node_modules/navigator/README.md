navigator
===

Emulates the browser's `navigator`

    {
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
      , usegAgent: "Mozilla/5.0 (" + machine + "; " + arch + ") " + engine
      , vendor: "Joyent"
      , vendorSub: ""
    }

TODO
===

Use `process.os` and such for a more accurate readout
