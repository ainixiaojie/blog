<template>
  <div class="pageasider">
    <div
      class="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
    <div>文章列表</div>
      <div v-for="(item,index) in page" :key="index">
        <a
          @click="choose"
          class="nav-link"
          data-toggle="pill"
          role="tab"
          aria-selected="true"
          >{{ item.pagetitle }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pageasider",
  props: {
    page: Array,
  },
  data: function () {
    return {
      // aclass:[]
    };
  },
  methods: {
    choose: function (event) {
      var i=0
      var a=document.getElementsByClassName('nav-link')
      for(i=0;i<a.length;i++){
        a[i].className="nav-link"
      }
      event.target.className="nav-link active"
      this.$emit('choosepage',event.target.innerHTML)
    },
  },
};
</script>