<template>
  <div>
    <span><img :src="img" /></span>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data: () => {
      return {
          img: ''
      }
  },
  created() {
        axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
        console.log(response.data[0].url)
        this.img = response.data[0].url
      })  
  },
  methods: {
    generateNewImage() {
      axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
      console.log(response.data[0].url)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}

</style>
