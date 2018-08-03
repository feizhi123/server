<template>
  <div>
    <span>code:{{code}}</span>
    <span>state:{{state}}</span>
  </div>
</template>

<script>
import SideNav from '@/components/sideNav'
import NavHeader from '@/components/header'
import weixinApi from '@/services/weixin'

var getQueryStrings = function() {
  var query_string = {};
  var query = window.location.href.split("?")[1];
  if (query) {
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
  }
  return query_string;
}

export default {
  components: {
    SideNav,
    NavHeader
  },
  mounted(){
    let params = getQueryStrings()
    this.code = params.code
    this.state = params.state
    weixinApi.getSignature().then(data=>{
      wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature,// 必填，签名
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
      });
      wx.ready(function(){
        console.log('wx ready')
        let baseUrl = 'http://logic.dingnuo.ai/get-weixin-code.html?appid=wx493ee39e4edc9ddd&scope=snsapi_userinfo&redirect_uri='
        wx.onMenuShareTimeline({
          title: '', // 分享标题
          link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
        });
        wx.onMenuShareAppMessage({
          title: '测试标题', // 分享标题
          desc: '测试描述', // 分享描述
          link: baseUrl+encodeURIComponent(location.origin+location.pathname), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
        });
      });
    })
  },
  data(){
    return {
      code:'',
      state:''
    }
  }
}

</script>

<style lang="scss">
</style>
