<template>
  <fragment>
    <b-navbar toggleable="lg" type="dark" variant="olive">
      <b-navbar-brand href="#">
        <img class="header__image align-top" src="@/assets/robot.svg" />
        <span class="header__text">{{ $i18n.t("message.hello") }}</span>
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
            <b-dropdown-item rel="en" @click="setLanguage" href="#">English</b-dropdown-item>
            <b-dropdown-item rel="de" @click="setLanguage" href="#">German</b-dropdown-item>
            <b-dropdown-item rel="fr" @click="setLanguage" href="#">French</b-dropdown-item>
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
    <!--    <aside>-->
    <!--      <p>Some Aside Content</p>-->
    <!--    </aside>-->
    <main :id="id" role="main" class="container">
      <router-view />
    </main>
  </fragment>
</template>

<script>
export default {
  name: "basic-layout",
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

<style scoped>
.header {
  background: var(--gray-dark);
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
}

.header__image {
  width: 2rem;
  height: auto;
  position: relative;
  top: -0.125rem;
}

.header__text {
  color: antiquewhite;
  margin: 0 1rem;
}
</style>
