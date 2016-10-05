<template>
    <div class="col-md-4 info-right hidden-xs hidden-sm">
        <h3>
            <i class="fa fa-heartbeat red"></i>
            <i class="fa fa-heartbeat yellow" ></i>
            <i class="fa fa-heartbeat green" ></i>
            <hr>
            <div class="signature">愿你出走半生，归来仍是少年</div>
            <div class="signature">希望你过得好，像照片上一样好</div>
        </h3>
        <h3>
            <blockquote>技能</blockquote>
            <hr>
            <div class="skill">
                <a :style="{ fontSize:Math.floor(Math.random()*10 + 11) + 'px'}" href="javascript:void(0);">PHP</a>
                <a :style="{ fontSize:Math.floor(Math.random()*10 + 11) + 'px'}" href="javascript:void(0);">VueJs</a>
                <a :style="{ fontSize:Math.floor(Math.random()*10 + 11) + 'px'}" href="javascript:void(0);">JavaScript</a>
            </div>
        </h3>
        <h3>
            <blockquote>Fork Me</blockquote>
            <hr>
            <div class="fork">
               <a href=""><i class="fa fa-github fa-2x"></i></a>
               <a href=""><i class="fa fa-weibo fa-2x" style="color:#E6162D;"></i></a>
               <a href=""><i class="fa fa-facebook-official fa-2x" style="color:#3B5998;"></i></a>
               <a href=""><i class="fa fa-google-plus-official fa-2x" style="color: #DB4437;"></i></a>
               <a href=""><i class="fa fa-twitter fa-2x" style="color:#3B94D9;"></i></a>
            </div>
        </h3>
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
  .info-right {
    background-color: #E3E3E3;
    box-shadow: 3px 4px 3px #ccc;
    border-radius:3px;
}
.info-right blockquote {
    margin: 0;
    padding: 0;
    padding-left: 10px;
}
.info-right h3 {
    font-size: 18px;
    color: gray;
    padding: 5px;
}
.red{
    color: red;
}
.yellow{
    color: #FFBD2E;
}
.green{
    color: #28CA42;
}
.signature{
    margin: -10px 0px 15px 3px;
    padding: 5px;
    font-size: 14px;
}
.skill a {
    color: #41B883;
    text-decoration: none;
}
.skill a:hover {
    color: white;
    background-color: #41B883;
}
.fork a {
    color: black;
    margin-left: 15px;
}

</style>

<!--     
<div class="col-md-4 info-right hidden-xs hidden-sm">
      <blockquote>
        <h2>其他...</h2>
    </blockquote>
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-5" style="margin: 12px 0; padding: 0">
            <img src="http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg" class="img-responsive" alt="">
        </div>
        <div class="col-md-7 col-sm-7 col-xs-7" style="padding-right: 0">
            <h4>标题</h4>
            <p>2016.10.04</p>
        </div>
    </div>
</div>
</div> 
-->