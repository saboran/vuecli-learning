<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
    background: #41B883;
  }
.navbar-default .navbar-nav > li > a{
  color: white;
  font-family: "Microsoft YaHei";
}
.navbar-default .navbar-nav > li > a:hover{
  color: white;
  font-size: 18px;
}
.navbar-default .navbar-nav > li > a:focus{
  color: white;  
  font-size: 18px;
}
.navbar-default .navbar-nav > li > a:visited{
  background-color: #41B883;
  font-size: 18px;
}
.active{
  background-color: #41B883;
  font-size: 18px;
}

</style>

<template>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <a href="#" class="navbar-brand" style="">Logo</a>
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse">
      <ul class="nav navbar-nav navbar-right" style="margin-top:0">

        <li v-for="(nav,index) of navs" :class="{active: isActive == index}" @click="isActive = index"><a href="#"><i :class="nav.icon"></i></span> {{nav.title}}</a></li>
      </ul> 
    </div>
  </div>
</nav>

</template>

<script>
export default {
  data () {
    return {
      navs: '',
      isActive: 0
    }
  },
  methods: {
    toDo: function () {
    }
  },
  mounted: function () {
    this.$http.jsonp('http://linganmin.cn/json/navs.php').then((respnose) => {
      console.log(respnose)
      this.navs = respnose.data
    })
  }
}
</script>

