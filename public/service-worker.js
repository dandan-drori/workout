importScripts("/precache-manifest.53e889e3da8d50eacd206cd39b31459d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts('/workbox-v4.3.1/workbox-sw.js')
workbox.setConfig({ debug: false })

workbox.core.setCacheNameDetails({
	prefix: 'client',
})

// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		fetch(event.request).catch(function() {
// 			return caches.match(event.request)
// 		})
// 	)
// })

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open('client').then(function(cache) {
			return cache.match(event.request).then(function(response) {
				return (
					response ||
					fetch(event.request).then(function(response) {
						cache.put(event.request, response.clone())
						return response
					})
				)
			})
		})
	)
})

self.addEventListener('message', event => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting()
	}
})

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

