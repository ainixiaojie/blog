<template>
  <div class="blogheader">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-deafault">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/logo.jpg"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
          </a>
          <router-link to="/">主页</router-link> |
          <router-link to="/page">文章</router-link>|
          <router-link to="/me">关于我</router-link>|
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogheader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogheader{
  width: 100vw;
  background-image: url("../assets/2.jpg");
}
</style>