<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
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
        <h1>{{ hometitle }}</h1>
        <!--  -->
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <router-link to="/"
                ><img :src="imageurl1" class="d-block w-100"
              /></router-link>
              <div class="carousel-caption d-none d-md-block">
                <h5>主页</h5>
                <p>一个入门菜鸟编写的网站</p>
              </div>
            </div>
            <div class="carousel-item active">
              <router-link to="/page"
                ><img :src="imageurl2" class="d-block w-100"
              /></router-link>
              <div class="carousel-caption d-none d-md-block">
                <h5>文章</h5>
                <p>记录学习的点滴</p>
              </div>
            </div>
            <div class="carousel-item">
              <router-link to="/me"
                ><img :src="imageurl3" class="d-block w-100"
              /></router-link>
              <div class="carousel-caption d-none d-md-block">
                <h5>关于我</h5>
                <p>没有关于我</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!--  -->
        <blockquote class="blockquote text-center">
          <p class="mb-0">{{ introduce.page }}</p>
          <cite title="Source Title">{{ introduce.name }}</cite>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import blogheader from "../components/blogheader";

export default {
  name: "Home",
  // components: {
  //   blogheader,
  // },
  data: function () {
    return {
      hometitle: "梁帅杰的博客",
      introduce: {
        page: "你死定了，耶稣都救不了你，我说的",
        name: "梁帅杰借用",
      },
      imageurl1: require("../assets/1.jpg"),
      imageurl2: require("../assets/2.jpg"),
      imageurl3: require("../assets/4.jpg"),
    };
  },
};
</script>
<style scoped>
* {
  font-family: serif;
}
.home {
  color: #8b968d;
  text-align: center;
  height: 110vh;
}
.jumbotron {
  background-image: url("../assets/2.jpg");
  min-height: 100vh;
  height: 100%;
}
</style>
