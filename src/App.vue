<template>
  <div id="app">
    <router-link to="/">Top</router-link> |
    <router-link to="/signup">SignUp</router-link> |
    <router-link to="/signin">SignIn</router-link> |
    <router-link to="/join">Join</router-link> |
    <router-link to="/chat/default">Chat</router-link> |
    <router-link to="/trim">Trimming</router-link> |
    <router-link to="/face">FaceProcess</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
