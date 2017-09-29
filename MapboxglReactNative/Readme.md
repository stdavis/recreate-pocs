# MapboxglReactNative

This was a test of using [react-native-mapbox-gl](https://github.com/mapbox/react-native-mapbox-gl) to build a native mobile application.

The [React Native](https://github.com/mapbox/react-native-mapbox-gl) tooling and ecosystem look really good. Still a bit new (v0.48) but looks ready for prime time to me. All of the app code and markup is done via React and shared between iOS and Android platforms. The development experience is very good with cli tools for starting up simulators, live reloading and debugging via Chrome dev tools.

Markup is done with native elements (Text & View) rather than web elements (Span & Div) but otherwise it feels like web including the CSS-like styling.

`react-native-mapbox-gl` is a react native wrapper for their native iOS and Android SDK's. It looks very promising but is still very early and going through a major rewrite at the moment. The major rewrite will bring it to a "fully supported" status at Mapbox. `v6` is the rewrite branch and it's still got a [significant amount of work to do](https://github.com/mapbox/react-native-mapbox-gl/projects/2). I saw in one of the issue comments a two month timeline until it's released. This POC is written at v6 but we could do something at v5 which is more stable and has stuff like offline which has yet to be ported to v6. Any work on with this library is likely to be slowed by the fact that it's brand new and still being worked on.

This POC is just a mapbox basemap with trailheads as geojson on top and a list of the trail heads. I couldn't get explicit offline to work however, it does have implicit offline in that it caches previously viewed areas including all of the geojson data. And the app still loads offline since all of the code is bundled with the app.
