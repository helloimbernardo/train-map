# Train Map

**Mapping every (major) train trip I've taken on a map**


[🌍Map visualization](https://helloimbernardo.github.io/train-map/)

[🗺️(Alternative) Map on uMap](http://u.osmfr.org/m/947323/)  
[💾Raw geojson data](./src/geojson/trains.geojson)

## Development
This project has a development branch, named `dev`. For major projects that might take longer, a new branch may be created, although this is rare.  
To get the project running, just clone the repository locally and run the following commands:

**1. obtain a maptiler access token and create a `.env.local` file in the root directory with the following content:**
```env 
VITE_MAPTILER_API_KEY=your_access_token_here
```
(if you don't have a mapbox access token, you can get one [here](https://maptiler.com/). if you're publishing with github pages you should add the token to the repository action secrets with the same name as the variable above.)

**2. install dependencies**
```bash
# for npm users
npm i
# or for yarn users
yarn
```

**3. run the development server**
```bash
# for npm users
npm dev
# or for yarn users
yarn dev
```

## Information
This project is released under [the MIT License](./LICENSE.md). The map style used was made for this project and is served by [MapTiler](http://maptiler.com/)

Various open source projects are used. Here is a short description of what they do:
- [maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js#readme): Open source library for displaying the map. Fork of maplibre-gl, made the migration from maplibre very easy.
- [react-map-gl](https://github.com/visgl/react-map-gl#readme): Wrapper around maplibre-gl providing a react API for the library. Also made the migration from mapbox to maplibre very easy.
- [react-router](https://github.com/remix-run/react-router#readme): React library for easy page routing. Made the URL parameters possible and easy to manage.
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss#readme): Handy CSS framework for easy styling.
- [vite](https://github.com/vitejs/vite): Last but not least. Toolchain for frontend app building. Makes react more manageable 
- [react](https://github.com/facebook/react#readme): Library for building the interactive website. cheers facebook.
- [typescript](https://github.com/microsoft/TypeScript/#readme): Adds types to javascript. cheers microsoft.  
And others such as [eslint](https://github.com/eslint/eslint#readme), [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint#readme) and the [DefinitelyTyped project](https://github.com/DefinitelyTyped/DefinitelyTyped#readme). 