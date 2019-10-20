<template>
  <fragment>
    <!--    <aside>-->
    <!--      <p>Some Aside Content</p>-->
    <!--    </aside>-->
    <basic-navbar></basic-navbar>
    <main :id="id" role="main" class="container">
      <router-view />
    </main>
  </fragment>
</template>

<script>
import BasicNavbar from "@/components/BasicNavbar";
export default {
  name: "basic-layout",
  components: {
    BasicNavbar
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    setLanguage(event) {
      this.$store.dispatch("i18n/setLanguage", event.target.rel);
    }
  },
  mounted() {
    this.$store.dispatch("i18n/setLanguage", "fr");
  }
};
</script>

<style scoped></style>
