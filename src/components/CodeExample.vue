<template>
  <section class="code-example">
    <h1>{{ header }}</h1>
    <p>{{ details }}</p>
    <pre class="position-relative px-4">
      <i
        v-if="canWriteToClipboard"
        class="fa fa-copy position-absolute absolute-offset"
        @click="copyToClipboard"
      ></i>
      <code class="language-html" v-html="highlightedCode">
      </code>
    </pre>
  </section>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "code-example",
  props: {
    code: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: false
    },
    header: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      highlightedCode: "",
      canWriteToClipboard: false
    };
  },
  methods: {
    queryWriteToClipboardPermission() {
      navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state === "granted" || result.state === "prompt") {
          this.canWriteToClipboard = true;
        }
      });
    },
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.code.trim());
      } catch (err) {
        console.log("Handle this error with a prompt");
      }
    },
    highlightCode() {
      this.highlightedCode = Prism.highlight(
        this.code,
        Prism.languages.html,
        "html"
      );
    }
  },
  created() {
    this.queryWriteToClipboardPermission();
    this.highlightCode();
  }
};
</script>
<style scoped lang="scss">
.code-example {
  margin: 1rem;
}

.absolute-offset {
  top: 1rem;
  right: 1rem;
}

.fa-copy {
  color: #535353;
  transition: 0.10s ease-in-out;
  &:hover {
    color: white;
  }
}
</style>
