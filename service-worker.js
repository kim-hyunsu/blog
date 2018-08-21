/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7180373f9b368604327590252402ee9d"
  },
  {
    "url": "assets/css/0.styles.b7d60eaa.css",
    "revision": "52415b8ab75f1b55bd7827906894306f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b639a9ac.js",
    "revision": "ae6113c6412e4fb818939a16e45ca337"
  },
  {
    "url": "assets/js/11.c76b35ea.js",
    "revision": "77a508faedc34571fb44b35378ebee72"
  },
  {
    "url": "assets/js/12.bcfd5f12.js",
    "revision": "00214ee7382d66cece6685bcafbf964c"
  },
  {
    "url": "assets/js/13.a1475bc3.js",
    "revision": "90297ff636dc6eeac29eb40e5f52e731"
  },
  {
    "url": "assets/js/14.0598f2ad.js",
    "revision": "99eb27d8c5d5509aa558f7d6c4d0b6d0"
  },
  {
    "url": "assets/js/15.d4bcb7b6.js",
    "revision": "7debb7edb677c0ca8d7e7938311bfea5"
  },
  {
    "url": "assets/js/16.45003486.js",
    "revision": "79c51275dc49ce86036bd5c6eba9d946"
  },
  {
    "url": "assets/js/17.c4babb81.js",
    "revision": "6e8bf339d02ccacbc4cdee25969ac33c"
  },
  {
    "url": "assets/js/18.ddf505f7.js",
    "revision": "8000e9923187e23927bfb0cb317a7717"
  },
  {
    "url": "assets/js/19.83bc9c01.js",
    "revision": "0eb0d3e35480a25e60f0536dfe03180a"
  },
  {
    "url": "assets/js/2.4de776b0.js",
    "revision": "e8856abb78c85bdcad47cb532fdd7571"
  },
  {
    "url": "assets/js/20.5dcdaa32.js",
    "revision": "7cc9bc066388482a62e7595fb43e7b74"
  },
  {
    "url": "assets/js/3.ff8600fd.js",
    "revision": "d8be4ef553e03f608b735fab2e79e140"
  },
  {
    "url": "assets/js/4.73a594dd.js",
    "revision": "4af00e80560b90db911e630dbbf5b881"
  },
  {
    "url": "assets/js/5.d42db909.js",
    "revision": "0fb419c736973141f329cb251d1ba773"
  },
  {
    "url": "assets/js/6.8b4feb5b.js",
    "revision": "4d3090b4ca6211e463a415ad1d375ed6"
  },
  {
    "url": "assets/js/7.0fdbab9a.js",
    "revision": "d794cb97e2cb1cd2f9f0b7074e0c4ffe"
  },
  {
    "url": "assets/js/8.34e25af0.js",
    "revision": "bcb8f15587acfb121c02bda2954a3886"
  },
  {
    "url": "assets/js/9.704ddb06.js",
    "revision": "c9f9795538050ff75e6cf0d1c3feebb2"
  },
  {
    "url": "assets/js/app.7dbb121a.js",
    "revision": "d7569452378f88e512780e03931c6379"
  },
  {
    "url": "bayesian.png",
    "revision": "96b37c0dbf75f4216f56eb349dd62d69"
  },
  {
    "url": "Deinococcus_radiodurans.jpg",
    "revision": "f17a0c5cd9bd8493ad438a00c0b4459c"
  },
  {
    "url": "diracwiki/index.html",
    "revision": "8affc2c51952b8330425f4db79f08f37"
  },
  {
    "url": "dual-booting-ubuntu.png",
    "revision": "0aaf87d73eaac1c59699950ebc0a5ff5"
  },
  {
    "url": "features/github-trends.html",
    "revision": "f239de02ae5c9b3f71c2768d04601331"
  },
  {
    "url": "features/index.html",
    "revision": "f561794db40d9fd19fadc158d135d27e"
  },
  {
    "url": "google25ec666ed4da3854.html",
    "revision": "d5edea3b66f77df1a44c73e3a482d442"
  },
  {
    "url": "index.html",
    "revision": "e31033c6d9739252d190eb1ac3391c5f"
  },
  {
    "url": "paper-reviews/index.html",
    "revision": "41332eff97328df96de475b36d216a8a"
  },
  {
    "url": "paper-reviews/one.html",
    "revision": "d657ba9df00e5d227c6901b15248c750"
  },
  {
    "url": "products/index.html",
    "revision": "03abfc7ca39f4ebf2bb6fdff092de6a6"
  },
  {
    "url": "products/kiosk.html",
    "revision": "cb9f6e860fe728a88ff6b6e1aa28ffdd"
  },
  {
    "url": "products/vuepress.html",
    "revision": "2c2f33279f82778f27f9fbd9770c1817"
  },
  {
    "url": "simulation_of_continuous-time_pdmp.png",
    "revision": "191d96cdd73144ef6595fa0d77659854"
  },
  {
    "url": "soft-reviews/dual-booting.html",
    "revision": "a0d6170b3764453ea4e0a301485d029c"
  },
  {
    "url": "soft-reviews/index.html",
    "revision": "ed0c0565777f4bd0c988c1ae287f66ee"
  },
  {
    "url": "undefined/graduate-entrance.html",
    "revision": "154efd68f33747b9ba1fd82ed1a50fa2"
  },
  {
    "url": "undefined/index.html",
    "revision": "d8518248cf1516618eee29da60a82ce8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
