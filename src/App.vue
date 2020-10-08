<template>
  <div id="app">
    <blogheader v-show="this.$router.history.current.name!='Home'" key=""></blogheader>
    <router-view />
    <blogfooter></blogfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import blogheader from "./components/blogheader";
import blogfooter from "./components/blogfooter";

export default {
  name: "Home",
  components: {
    blogheader,
    blogfooter,
  },
  data: function () {
    return {
      count: 0,
      blogshow: false,
    };
  },
  methods: {
    countnumber: function () {
      this.count += 1;
    }
  },
  watch: {
    routerchange: function () {
      if (this.$router.history.current.name == "Home") {
        this.blogshow = false;
      }
    },
  },
};
</script>
<style scoped>
#app {
  margin: 0px;
  padding: 0px;
}
</style>
