<template>
  <div>
    <h3>Vue Image Marker Demo</h3>
    <button @click="padding += 10">Padding +</button>
    <button @click="urlImage = urlImage2">Change Image</button>
    <v-image-marker
      class="image-marker"
      :src="urlImage"
      :padding="padding"
    >
      <div
        v-for="(marker, index) in markers"
        :key="index"
        class="marker"
        :style="{
          left: `calc(${ (marker.x * 100) }% - 5px)`,
          top: `calc(${ (marker.y * 100) }% - 5px)`,
          backgroundColor: marker.color,
        }"
      ></div>
    </v-image-marker>
  </div>
</template>

<script>
import urlImage1 from './map1.png'
import urlImage2 from './map2.png'

export default {
  data () {
    return {
      urlImage1,
      urlImage2,
      urlImage: urlImage1,
      padding: 20,
      markers: [
        { x: 0, y: 0, color: 'pink' },
        { x: 1, y: 0, color: 'lightblue' },
        { x: 1, y: 1, color: 'lightgreen' },
        { x: 0.5, y: 0.5, color: 'lightyellow' },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.image-marker
  width calc(100vw - 20px)
  height calc(100vh - 100px)
  border solid 1px silver
  user-select none
  background-color #f8f8f8

.marker
  position absolute
  width 10px
  height 10px
  border-radius 6px
  border solid 1px silver
  cursor pointer
  transition border-color 0.2s
  &:hover
    border-color black
</style>
