<template>
  <b-navbar toggleable="lg" type="dark" variant="olive">
    <b-navbar-brand href="#">
      <img
        alt="robot logo"
        class="b-navbar-brand__img align-top"
        src="@/assets/robot.svg"
      />
      <span class="b-navbar-brand__greeting">{{
        $i18n.t("message.hello")
      }}</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item rel="en" @click="setLanguage" href="#"
            >English</b-dropdown-item
          >
          <b-dropdown-item rel="de" @click="setLanguage" href="#"
            >German</b-dropdown-item
          >
          <b-dropdown-item rel="fr" @click="setLanguage" href="#"
            >French</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <strong>User</strong>
          </template>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "basic-navbar",
  methods: {
    async setLanguage(event) {
      await this.$store.dispatch("i18n/setLanguage", event.target.rel);
    }
  }
};
</script>

<style scoped>
.b-navbar-brand__img {
  width: 2rem;
  height: auto;
  position: relative;
  top: -0.125rem;
}

.b-navbar-brand__greeting {
  color: antiquewhite;
  margin: 0 1rem;
}
</style>
