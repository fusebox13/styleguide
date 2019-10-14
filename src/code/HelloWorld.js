let code = `
<template>
  <div class="hello">
    <pre>
      <code>
        {{code}}
      </code>
    </pre>
  </div>
</template>

<script>
import Code from '@/code/HelloWorld'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      code: Code.example
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
`;

export default code;