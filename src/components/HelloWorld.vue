<template>
  <div class="hello">
    <pre>
      <code v-html="code">
      </code>
    </pre>
  </div>
</template>

<script>
import Code from "@/code/HelloWorld";
import Prism from "prismjs";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      code: ""
    };
  },
  created() {
    this.code = Prism.highlight(Code, Prism.languages.javascript, "javascript");
  }
};
</script>
