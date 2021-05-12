module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"withAvif":true,"withWebp":true,"maxWidth":1024,"showCaptions":true,"linkImagesToOriginal":false,"tracedSVG":true,"loading":"lazy"},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-XXXXXXXXX-X","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Foundation","short_name":"Foundation","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"static/assets/stackrole.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"432bd9a65fb634a6750b469e2b07aa2e"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
