<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <center>
      <!-- <video id="play" controls webkit-playsinline playsinline style="height:720px;"></video> -->
      <a ref="play">{{ msg }}</a>
      <!-- <div class="control-box">
              <button id="next" class="next">下一位</button>
              <button id="auto" class="auto">连续播放</button>
              <button id="down" class="down">下载当前</button>
      </div> -->
    </center>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      auto: true,
    };
  },
  methods: {
    play() {
     // this.msg = "play";
      const url = 'http://v.nrzj.vip/video.php?_t=';
      const rand = Math.random();
      url = url + rand;
      this.msg =url;
    },
  },
  mounted: function() {
    //自动触发写入的函数
    this.$refs.play.addEventListener("ended", function() {
      if (auto) {
        play();
      }
    });
    this.play();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.next {
  width: 120px;
  height: 30px;
  background: #03a9f4;
  color: #ffffff;
  font-size: 16px;
}
.control-box {
  margin-top: 10px;
}
.auto {
  width: 120px;
  height: 30px;
  background: #ff9800;
  color: #ffffff;
  font-size: 16px;
}
.down {
  width: 120px;
  height: 30px;
  background: #4caf50;
  color: #ffffff;
  font-size: 16px;
}
</style>
