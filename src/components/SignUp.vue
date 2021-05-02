<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <img src='@/assets/logo.png'/>
    <input type="file" name="pic">
    <button>Register</button>
    <p>Do you have an account?
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {}
}
</script>
