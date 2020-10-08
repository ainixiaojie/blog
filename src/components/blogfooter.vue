<template>
  <div class="blogfooter">
    <div class="container">
      <p>
        <cite>本站运营始于:{{ time }}</cite>
      </p>
      <small>作者：{{ autor }}</small>
      <p>备案号:{{ beianhao }}</p>
    </div>
  </div>
</template>

<script>
var d1 = new Date("October 1, 2018 13:14:52");
export default {
  name: "blogfooter",
  props: {
    msg: String,
  },
  data: function () {
    return {
      time: d1,
      autor: "梁帅杰",
      beianhao: 123456789,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 40vh;
  text-align: center;
}
</style>