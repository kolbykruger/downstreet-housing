(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      custom: {
        families: [
            'Perpetua Titling MT Std Light',
            'Century Gothic'
        ],
        urls: [
            '../fonts/perpetua/perpetua.css',
            '../fonts/century-gothic/century-gothic.css'
        ]
      },

      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
})();
