if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>n(e,c),d={module:{uri:c},exports:i,require:r};s[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0ad3c6c6-8ec87a04a346002f.js",revision:"8ec87a04a346002f"},{url:"/_next/static/chunks/13-28214de7733857bf.js",revision:"28214de7733857bf"},{url:"/_next/static/chunks/2d5e88bd-e6dfbbcb9014d80a.js",revision:"e6dfbbcb9014d80a"},{url:"/_next/static/chunks/316-cb3ebb115bee5d35.js",revision:"cb3ebb115bee5d35"},{url:"/_next/static/chunks/360-f904dd36fd5ef41a.js",revision:"f904dd36fd5ef41a"},{url:"/_next/static/chunks/391.761257530a693564.js",revision:"761257530a693564"},{url:"/_next/static/chunks/402.0156a08c3e49f5e4.js",revision:"0156a08c3e49f5e4"},{url:"/_next/static/chunks/479.5acd443780b43f1f.js",revision:"5acd443780b43f1f"},{url:"/_next/static/chunks/4bc8929a-a6e3a503c5b946a5.js",revision:"a6e3a503c5b946a5"},{url:"/_next/static/chunks/503.c92df4785dc3025e.js",revision:"c92df4785dc3025e"},{url:"/_next/static/chunks/514.8c3bb506f2e6df03.js",revision:"8c3bb506f2e6df03"},{url:"/_next/static/chunks/5f43a6c9-8ba4ed1a0ed0eb4d.js",revision:"8ba4ed1a0ed0eb4d"},{url:"/_next/static/chunks/736.9276af082f88e06b.js",revision:"9276af082f88e06b"},{url:"/_next/static/chunks/756.b38f44f2b14991e1.js",revision:"b38f44f2b14991e1"},{url:"/_next/static/chunks/b2db4f2c-4336e7d4c1d8b11f.js",revision:"4336e7d4c1d8b11f"},{url:"/_next/static/chunks/cb424c16-34a604a6f980cfe3.js",revision:"34a604a6f980cfe3"},{url:"/_next/static/chunks/d477d014-dc0baef27959b27c.js",revision:"dc0baef27959b27c"},{url:"/_next/static/chunks/dc6218b7-6644de9dd3cb033d.js",revision:"6644de9dd3cb033d"},{url:"/_next/static/chunks/e8403a17-af0985a314738be5.js",revision:"af0985a314738be5"},{url:"/_next/static/chunks/f8c5fa58-343b7557f395f006.js",revision:"343b7557f395f006"},{url:"/_next/static/chunks/framework-9eb1a987ff865039.js",revision:"9eb1a987ff865039"},{url:"/_next/static/chunks/main-b2abdd59b7654cb9.js",revision:"b2abdd59b7654cb9"},{url:"/_next/static/chunks/pages/_error-1f69716253e96e11.js",revision:"1f69716253e96e11"},{url:"/_next/static/chunks/pages/gallery-88ac77724ae40f78.js",revision:"88ac77724ae40f78"},{url:"/_next/static/chunks/pages/gallery/%5Bid%5D-3680c63877d3bad9.js",revision:"3680c63877d3bad9"},{url:"/_next/static/chunks/pages/index-5b7437f320abcf09.js",revision:"5b7437f320abcf09"},{url:"/_next/static/chunks/pages/publish-bbb5567ed10ab63d.js",revision:"bbb5567ed10ab63d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d215db6b9d49fe91.js",revision:"d215db6b9d49fe91"},{url:"/_next/static/css/05b21866f86a55d6.css",revision:"05b21866f86a55d6"},{url:"/_next/static/wxLXmpMV5b2y1690nce9v/_buildManifest.js",revision:"7a5bb6dbe4fe160cb5e9bdac9bf9cf23"},{url:"/_next/static/wxLXmpMV5b2y1690nce9v/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/alien.svg",revision:"d33347a7b1f32d00ab82a78cbbd9f759"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pirate.svg",revision:"66afc51a881c685a99501a45d85300f5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/wizard.svg",revision:"7c69ebbf89be78d22665cdb486e3e3d0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
