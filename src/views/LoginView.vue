<template>

    <div class="login">
      <form @submit.prevent="SignIn">
      <h3>Войти</h3>
      <label class="form-label">
        Email
        <input 
          type="text"
          class="form-control"
          placeholder="Ваш логин"
          v-model="form.login"
        >
      </label>
      <label class="form-label">
        Пароль
        <input
          type="password"
          class="form-control"
          placeholder="Ваш пароль"
          v-model="form.password"
        >
      </label>
      <div class="actions">
        <button type="submit" class="btn btn-primary" > Подтвердить </button>
      </div>
    </form>
    <p v-if="errors">{{errors}}</p>
</div>
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
  computed:{
    host(){
        return this.$store.getters.getHost
    }
  },
  methods: {
    async SignIn(){
      const res = await fetch(`${this.host}/login`,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login:this.form.login,
          password:this.form.password
        })
      })
    const data = await res.json()
    if(res.status==200){
      
      this.errors =''
      console.log(data)
      this.$store.dispatch('setToken',data['token'])
      localStorage.setItem('token',data['token'])
      this.$router.push('/');
    }
    else if(res.status==401){
      this.errors =''
      this.errors="Ошибка авторизации"
    }
    
    }
  }
}
</script>
