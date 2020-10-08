<template>
  <div class="pageself">
    <div class="container">
      <article>
        <div class="pageheader">
          <h1>{{ page.pagetitle }}</h1>
          <p>时间：{{ page.pagecreatdata }}</p>
        </div>
        <div class="pagebody">
          <p>
            {{ page.pagecreatcontent}}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "pageself",
  props: {
    page: Object,
    msg: String,
  },
  data: function () {
    return {
      //   pagetitle: "随着html5的发布，html越来规范且强大
      // html推崇语义化标签，即标签的名字对标签内容对应，例如nav标签用来包含网页内部的唯一的导航栏尤其专指头部导航。
      // html作为超文本标记语言，我们对其的基本认识应该是，这是用来对文档进行标记的语言，仅仅进行标记，并不改变文档本身的内容。使用标记语言，当然这种语言就是标签了，用来对文档不同内容使用不同的标签使得阅读该文档的软件认识该文档。客户端软件就是浏览器，使浏览器认识html文档，使得浏览器可以按照指定的流程使用文档得以指定格式展示给用户呈现",
      //   pagecreatdata: "2020-10-10",
      //   pagecreatcontent: `随着html5的发布，html越来规范且强大`,
    };
  },
};
</script>
<style scoped>
.pageheader {
  text-align: center;
}
article {
  height: 100vh;
  border-radius: 5vh;
  border: 1px solid;
  /* background-color: #d6c6af; */
}
</style>