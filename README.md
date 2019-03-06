# vue-image-marker

Image container for adding icon marker to the image.

## Demo

[Demo](https://unpkg.com/vue-image-marker/dist/index.html)

## Usage

Install:
```
npm i vue-image-marker
```

Import:
```js
import Vue from 'vue'
import VueImageMarker from 'vue-image-marker'

Vue.component('VImageMarker', VueImageMarker)
```

Use:
```html
<v-image-marker src="foo.jpg" :padding="20">
  <div
    v-for="marker in markers"
    :style="{
      position: 'absolute',
      width: '10px',
      height: '10px',
      left: `calc(${ (marker.x * 100) }% - 5px)`,
      top: `calc(${ (marker.y * 100) }% - 5px)`,
      backgroundColor: 'yellow',
    }"
  ></div>
</v-image-marker>
```

## API: Props

- `src`: Url of the image where the markers overlaid on.
- `padding`: Container padding, default is 0.

## License

MIT
