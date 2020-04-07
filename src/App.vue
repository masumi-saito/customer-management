<template>
  <v-app>
    <v-app-bar
    app
    dark
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        アドレス帳
      </v-toolbar-title>
      <v-toolbar-item v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-item>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <SideNav/>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created() {
    firebase.auth().onAuthStateChanged(user =>{
      if(user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        if(this.$router.currentRoute.name === 'home') this.$router.push({ name: 'addresses' })
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  data() {
    //
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
}
</script>
