<template>

<div id="information">
    <div class="container">
      <div class="row">
        <left></left>
        <right></right>
      </div>
    </div>
  </div>
</template>

<script>
import Left from './Content-left.vue'
import Right from './Content-right.vue'
export default {
  data () {
    return {
      msg: 'contents'
    }
  },
  components: {
    Left,
    Right
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #information {
    background-color: #eee;
    padding: 40px 0;
    margin-top: 50px;
  }
  .info-content {
    background-color: #fff;
    margin: 0 0 20px 0;
    box-shadow: 2px 2px 3px #ccc;
  }
  .info-content img {
    margin: 12px 0;
  }
  .info-content h4 {
    color: #333;
    padding: 2px 0 0 0;
    font-size: 14px;
  }
  .info-content p {
    line-height: 1.6;
  }
  .info-right {
    background-color: #fff;
    box-shadow: 2px 2px 3px #ccc;
  }
  .info-right blockquote {
    margin: 0;
    padding: 0;
  }
  .info-right h2 {
    font-size: 20px;
    color: #333;
    padding: 5px;
  }
  .info-right h4 {
    color: #333;
    font-size: 16px;
    padding: 2px 0 0 0;
    line-height: 1.6;
  }

</style>