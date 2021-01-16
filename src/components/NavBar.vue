<template>
  <div class="nav-container mb-3">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <div class="navbar-brand logo"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li v-if="$auth.isAuthenticated" class="nav-item">
              <router-link to="/external-api" class="nav-link"
                >External API</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav d-none d-md-block">
            <li
              v-if="!$auth.isAuthenticated && !$auth.loading"
              class="nav-item"
            >
              <button
                id="qsLoginBtn"
                class="btn btn-primary btn-margin"
                @click.prevent="login"
              >
                Login
              </button>
            </li>

            <li v-if="$auth.isAuthenticated" class="nav-item dropdown">
              <a
                id="profileDropDown"
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  :src="$auth.user.picture"
                  alt="User's profile picture"
                  class="nav-user-profile rounded-circle"
                  width="50"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header">{{ userName }}</div>
                <router-link
                  to="/profile"
                  class="dropdown-item dropdown-profile"
                >
                  <font-awesome-icon class="mr-3" icon="user" />Profile
                </router-link>
                <a
                  id="qsLogoutBtn"
                  href="#"
                  class="dropdown-item"
                  @click.prevent="logout"
                >
                  <font-awesome-icon class="mr-3" icon="power-off" />Log out
                </a>
              </div>
            </li>
          </ul>

          <ul
            v-if="!$auth.isAuthenticated && !$auth.loading"
            class="navbar-nav d-md-none"
          >
            <button
              id="qsLoginBtn"
              class="btn btn-primary btn-block"
              @click="login"
            >
              Log in
            </button>
          </ul>

          <ul
            v-if="$auth.isAuthenticated"
            id="mobileAuthNavBar"
            class="navbar-nav d-md-none d-flex"
          >
            <li class="nav-item">
              <span class="user-info">
                <img
                  :src="$auth.user.picture"
                  alt="User's profile picture"
                  class="nav-user-profile d-inline-block rounded-circle mr-3"
                  width="50"
                />
                <h6 class="d-inline-block">{{ $auth.user.name }}</h6>
              </span>
            </li>
            <li>
              <font-awesome-icon icon="user" class="mr-3" />
              <router-link to="/profile">Profile</router-link>
            </li>

            <li>
              <font-awesome-icon icon="power-off" class="mr-3" />
              <a id="qsLogoutBtn" href="#" class @click.prevent="logout"
                >Log out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    userName() {
      const userName = this.$auth.user.name
      return userName
    }
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect()
    },
    logout() {
      this.$auth.logout({ returnTo: 'http://localhost:3000' })
      //this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}
</style>
