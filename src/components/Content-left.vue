<template>
  <div class="col-md-8">
    <div class="container-fluid" style="padding:0;">
      <div class="row info-content">
        <div class="col-md-5 col-sm-5 col-xs-5">
          <img src="http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg" class="img-responsive" alt="">
        </div>
        <div class="col-md-7 col-sm-7 col-xs-7">
          <h4><a href="#">这里是标题</a></h4>
          <p class="hidden-xs">描述描述</p>
          <p><i class="fa fa-clock-o"></i> 2016.10.04</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'contents'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    font-size: 18px;
  }
  .info-content p {
    line-height: 1.6;
  }
  p{
    color: gray;
  }
</style>
