<template>
  <title>авторизации для администраторов</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <div class="container">
    
    <div class="admin-login-page">
      <h1>Вход для администратора 👨‍💼</h1>
      <form class="admin-login-form" @submit.prevent="SignIn">
        
          <input  type="text" class=" admin-login-input" placeholder="Ваш логин" v-model="form.login"><br>
          <input type="password" class=" admin-login-input" placeholder="Ваш пароль" v-model="form.password">
        <div class="actions">
          <button type="submit" class="admin-login-button"> Войти </button>
        </div>
      </form>
      <p v-if="errors">{{ errors }}</p>
    </div>
  </div>

  <footer>
    <div class="footer-content">
      <a href="/">Отель «FSe», Томск</a>
      <p>© 2024 Официальный сайт</p>
      <p>Томск, Герцена 18</p>
      <p>+7(954)68-25-14</p>
      <div class="weather-info">
        <p>+1 °C</p>
        <p>Погода в Томске</p>
      </div>
    </div>
  </footer>


</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        login: '',
        password: ''
      },
      errors: ''
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost
    }
  },
  methods: {
    async SignIn() {
      const res = await fetch(`${this.host}/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: this.form.login,
          password: this.form.password
        })
      })
      const data = await res.json()
      if (res.status == 200) {

        this.errors = ''
        console.log(data)
        this.$store.dispatch('setToken', data['token'])
        localStorage.setItem('token', data['token'])
        this.$router.push('/');
      }
      else if (res.status == 401) {
        this.errors = ''
        this.errors = "Ошибка авторизации"
      }

    }
  }
}
</script>
<style>
@import '@/assets/style.css';
</style>