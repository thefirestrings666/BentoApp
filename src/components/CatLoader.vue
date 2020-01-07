<template>
  <div>
    <span> {{ imgUrl_1 }} !</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      imgUrl_1: String
    }
  },
  created: () => {
    console.log(imgUrl_1)
  },
  methods: {
    generateNewImage() {
      axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
        this.imgUrl_1 = response.data[0].url
      })
    }
  }
}
</script>
