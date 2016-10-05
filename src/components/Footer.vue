<template>
  <footer id="footer">
    <div class="container">
      <p>{{created}}</p>
      <p>{{icp}}</p>
      <p>{{copyright}}</p>
      <p>{{powered}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      created: 'Created By 安小下',
      icp: '苏ICP备16006718号',
      copyright: 'Copyright © 2016.10 - ' + new Date().getFullYear() + '.' + (new Date().getMonth() + 1),
      powered: 'Powered by VueJs | Bootstrap | YII2.0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #footer {
    background-color: #666;
    border-top: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    color: #eee;
  }
</style>
