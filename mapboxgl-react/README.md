# Recreate POC: React + MapboxGLJS

## Notes
MBGL doesn't handle web mercator geojson coords. Had to reproject to 4326.
Seems to be heavily optimized for vector tiles.

`create-react-app` comes with a service worker built in. However, it doesn't allow for customization [yet](https://github.com/facebookincubator/create-react-app/pull/2714). Not a huge deal. We just need to implement our own like this demo does.

For other offline ideas we might check out: https://github.com/mapbox/mapbox-gl-js/issues/4326#issuecomment-283208022

The major issue that I can see with offline service workers is that the browser is [free to clean up the cache anytime it wants](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa). There are no guarantees that it will be there. It does seem like it will get better in the future.
