<template>
  <div class="view view--light" style="background: white">
    <code-example
      :code="code"
      header="Example"
      details="Some details"
    ></code-example>
  </div>
</template>

<script>
import CodeExample from "@/components/CodeExample";
import code from "@/code/HelloWorld";

export default {
  name: "home",
  components: {
    CodeExample
  },
  data() {
    return {
      code: code
    };
  }
};
</script>
