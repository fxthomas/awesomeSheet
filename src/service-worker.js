importScripts('sw-toolbox.js');
console.log("sw fire");
// toolbox.options.debug = true;
toolbox.precache([
  '../awesomeSheet/index.html',
  '../awesomeSheet/css/awesomeSheet.min.css',
  '../awesomeSheet/css/vendor.min.css',
  '../awesomeSheet/js/awesomeSheet.min.js',
  '../awesomeSheet/js/vendor.min.js',

  '../awesomeSheet/fonts/icons/icons.eot',
  '../awesomeSheet/fonts/icons/icons.woff',
  '../awesomeSheet/fonts/icons/icons.json',
  '../awesomeSheet/fonts/icons/icons.svg',
  '../awesomeSheet/fonts/icons/icons.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-light.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-light.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-light.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-light.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.ttf',
  '../awesomeSheet/images/apple-touch-icon.png',
  '../awesomeSheet/images/chrome-touch-icon-192x192.png',
  '../awesomeSheet/images/icon-128x128.png',
  '../awesomeSheet/images/icon-512.png',
  '../awesomeSheet/images/ms-touch-icon-144x144-precomposed.png',
  '../awesomeSheet/manifest.json'
]);
toolbox.router.get([
  '../awesomeSheet/index.html',
  '../awesomeSheet/css/awesomeSheet.min.css',
  '../awesomeSheet/css/vendor.min.css',
  '../awesomeSheet/js/awesomeSheet.min.js',
  '../awesomeSheet/js/vendor.min.js',

  '../awesomeSheet/fonts/icons/icons.eot',
  '../awesomeSheet/fonts/icons/icons.woff',
  '../awesomeSheet/fonts/icons/icons.json',
  '../awesomeSheet/fonts/icons/icons.svg',
  '../awesomeSheet/fonts/icons/icons.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-light.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-light.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-light.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.eot',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff2',
  '../awesomeSheet/fonts/open-sans/open-sans-bold-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-bold.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-bold.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-condensed-light.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-light-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-light.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-regular.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.ttf',
  '../awesomeSheet/fonts/open-sans/open-sans-semi-bold.ttf',
  '../awesomeSheet/images/apple-touch-icon.png',
  '../awesomeSheet/images/chrome-touch-icon-192x192.png',
  '../awesomeSheet/images/icon-128x128.png',
  '../awesomeSheet/images/icon-512.png',
  '../awesomeSheet/images/ms-touch-icon-144x144-precomposed.png',
  '../awesomeSheet/manifest.json'
], toolbox.fastest);