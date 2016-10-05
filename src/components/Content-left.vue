<template>
  <div class="col-md-8">
    <div class="container-fluid" style="padding:0;"  v-for="list of lists">
      <div class="row info-content">
        <div class="col-md-5 col-sm-5 col-xs-5">
          <img :src="list.imageLink" :alt="list.title" style="width: 100%">
        </div>
        <div class="col-md-7 col-sm-7 col-xs-7">
          <h4><a href="#">{{list.title}}</a></h4>
          <p class="hidden-xs">{{list.content}}</p>
          <p><i class="fa fa-clock-o"></i> {{list.createdTime}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      lists: [
        {'id': 1,
        'title': '不说',
        'content': '我们常劝人说，挺过去，会好起来的。其实心里知道就算不好起来，日子还是要一样的过。生活中还会有那么多快乐与伤悲，但不同的是我的生命中曾有你，你给予过的温暖已被我牢牢记在心里，所以没关系。',
        'createdTime': '2016-10-10',
        'link': 'http://www.linganmin.cn',
        'imageLink': 'http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg'
        },
        {'id': 1,
        'title': '不说',
        'content': '我们常劝人说，挺过去，会好起来的。其实心里知道就算不好起来，日子还是要一样的过。生活中还会有那么多快乐与伤悲，但不同的是我的生命中曾有你，你给予过的温暖已被我牢牢记在心里，所以没关系。',
        'createdTime': '2016-10-10',
        'link': 'http://www.linganmin.cn',
        'imageLink': 'http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg'
        },
        {'id': 1,
        'title': '不说',
        'content': '我们常劝人说，挺过去，会好起来的。其实心里知道就算不好起来，日子还是要一样的过。生活中还会有那么多快乐与伤悲，但不同的是我的生命中曾有你，你给予过的温暖已被我牢牢记在心里，所以没关系。',
        'createdTime': '2016-10-10',
        'link': 'http://www.linganmin.cn',
        'imageLink': 'http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg'
        },
        {'id': 1,
        'title': '不说',
        'content': '我们常劝人说，挺过去，会好起来的。其实心里知道就算不好起来，日子还是要一样的过。生活中还会有那么多快乐与伤悲，但不同的是我的生命中曾有你，你给予过的温暖已被我牢牢记在心里，所以没关系。',
        'createdTime': '2016-10-10',
        'link': 'http://www.linganmin.cn',
        'imageLink': 'http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg'
        },
        {'id': 1,
        'title': '不说',
        'content': '我们常劝人说，挺过去，会好起来的。其实心里知道就算不好起来，日子还是要一样的过。生活中还会有那么多快乐与伤悲，但不同的是我的生命中曾有你，你给予过的温暖已被我牢牢记在心里，所以没关系。',
        'createdTime': '2016-10-10',
        'link': 'http://www.linganmin.cn',
        'imageLink': 'http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg'
        },
        {'id': 1,
        'title': '不说',
        'content': '我们常劝人说，挺过去，会好起来的。其实心里知道就算不好起来，日子还是要一样的过。生活中还会有那么多快乐与伤悲，但不同的是我的生命中曾有你，你给予过的温暖已被我牢牢记在心里，所以没关系。',
        'createdTime': '2016-10-10',
        'link': 'http://www.linganmin.cn',
        'imageLink': 'http://ww2.sinaimg.cn/mw690/6aedb651gw1f8b6tykefej21bd0qo0zm.jpg'
        }
      ]
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
  h4 > a{
    text-decoration: none;
    color: gray;
  }
  h4 > a:hover{
    color: #41B883;
  }
</style>
