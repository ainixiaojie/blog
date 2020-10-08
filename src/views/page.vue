<template>
  <div class="page">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="pagebody col-9">
            <pageself :page="pages[i]"></pageself>
          </div>
          <div class="col-3">
            <pageasider
              v-bind:page="pages"
              v-on:choosepage="chooosep"
            ></pageasider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pageasider from "../components/pageasider";
import pageself from "../components/pageself";

export default {
  name: "page",
  prop: [],
  components: {
    pageasider,
    pageself,
  },
  data: function () {
    return {
      pages: [
        {
          pagetitle: "HTML",
          pagecreatdata: "2020-8-8",
          pagecreatcontent:
            "随着html5的发布，html越来规范且强大。html推崇语义化标签，即标签的名字对标签内容对应，例如nav标签用来包含网页内部的唯一的导航栏尤其专指头部导航。html作为超文本标记语言，我们对其的基本认识应该是，这是用来对文档进行标记的语言，仅仅进行标记，并不改变文档本身的内容。使用标记语言，当然这种语言就是标签了，用来对文档不同内容使用不同的标签使得阅读该文档的软件认识该文档。客户端软件就是浏览器，使浏览器认识html文档，使得浏览器可以按照指定的流程使用文档得以指定格式展示给用户呈现",
        },
        {
          pagetitle: "CSS",
          pagecreatdata: "2020-10-10",
          pagecreatcontent:
            "在接下来说的就是样式即css。就是用来使得文档的不同内容以不同的样式展现给客户。最当初，html本身的标签或者一些属性还可以满足样式的需求，随着发展，html本身的样式无法满足，所以css的更广的发展。同样也是因为发展，推荐模块化，通俗说流水线模式。文档的展现形式全部交代给css了（这是一种时代发展的推荐，并非必须，使用html展现样式依然可以使用）。css3的出现使得css也变得更加强大与规范化，由于css3的特殊，所以css4是很难出现了。之前的css更新是整体跟新，css3将css分类了或者说是分块了，不同的块可以单独更新。选择器，盒子模型，边框，背景，文本，定位，浮动，flex弹性盒子，多列布局等。css浏览器默认样式。在盒子模型中的认识，所有的标签只有他的标签名与标签html属性不同，其他相同。所以说元素的块级标签，内联标签的分类是因为css属性赋值不同分类的（浏览器默认css设置的），对于默认的样式都是浏览器默认的。并非一开始就这样。所以任何一个元素标签在盒子默认中应当是等位一致的。",
        },
        {
          pagetitle: "Javascript",
          pagecreatdata: "2020-10-10",
          pagecreatcontent:
            "JavaScriptJavaScript类似python，一切皆为对象即一片内存空间正如所有编程语言一样，JavaScript的基础组成：变量，基础数据类型，操作符，流程控制，数据类型（数据结构），函数基础数据类型：数值，字符串，布尔值，NaN,undefined操作符：加减乘除，取余这些常用的流程控制：选择与循环数据类型（数据结构，这是因为这些数据类型具有一定的结构）：Array(数组)，对象。当然仅仅两个略显贫瘠，这是因为它们存在相应的异变的数据结构函数",
        },
        {
          pagetitle: "VUE响应式",
          pagecreatdata: "2020-10-10",
          pagecreatcontent:
            "由于代码是已经编写好的，所有的响应式属性/数据已经定义，所以这种相应，应是外部改变（人对dom的操作，产生的数据的改变，会将该js对象调入到vue实例中，vue实例中的数据会随之改变），vue实例会便利所有响应式属性与数据随之改变。",
        },
      ],
      i: 0,
    };
  },
  methods: {
    chooosep: function (data) {
      var a = 0;
      for (a = 0; a < this.pages.length; a++) {
        if (this.pages[a].pagetitle == data) {
          this.i = a;
        }
      }
    },
  },
};
</script>
<style scoped>
.jumbotron {
  width: 100%;
  min-height: 100vh;
  height: 100%;
}
article {
  height: 100vh;
  border: 1px solid;
}
</style>
