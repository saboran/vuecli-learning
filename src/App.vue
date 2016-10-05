<template>
  <body>
    <headerr></headerr>
    <contents></contents>
    <footerr></footerr>
  </body>
</template>

<script>
// import Hello from './components/Hello'
import Contents from './components/Content.vue'
import Headerr from './components/Header.vue'
import Footerr from './components/Footer.vue'

export default {
  components: {
    Contents,
    Headerr,
    Footerr
  }
}
</script>

<style>

</style>
