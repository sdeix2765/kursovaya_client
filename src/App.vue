<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Просто купить</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-1">
          <router-link to="/">Каталог</router-link> 
        </li>
        <li class="nav-item ms-1">
          <router-link v-show="!userAuthed" to="/login">Авторизация</router-link>
        </li>
        <li class="nav-item ms-1">
          <router-link v-show="!userAuthed" to="/register">Регистрация</router-link>
        </li>
        <li class="nav-item ms-1">
          <router-link v-show="userAuthed" to="/cart">Корзина</router-link>
        </li>
        <li class="nav-item ms-1">
          <router-link v-show="userAuthed" to="/orders">Заказы</router-link>
        </li>
      </ul>
      <div v-show="userAuthed" >
        <button @click="LogOut" class="btn btn-outline-success" >Выйти</button>
      </div>
    </div>
  </div>
</nav>

  <router-view />
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        fio: '',
        email: '',
        password: '',
        token: null
      },
      errors: ""
    }
  },
  computed: {
    userAuthed() {

      return this.$store.getters.isAuthenticated
    },


  },
  methods: {
    LogOut() {
      this.$store.dispatch('deleteToken').then(() => {
        this.$router.push('/')
      }
      ).catch((error) => {
        console.error('Logout failed:', error);
      });
    },
  },

  created() {
    this.$store.dispatch('getClasses')
    if (localStorage.getItem('token')) {
      try {
        this.token = localStorage.getItem('token');
        this.$store.dispatch('setToken', this.token)
      } catch (e) {
        localStorage.removeItem('token');
      }
    }

  }
}
</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.preloader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 999;
  display: block;
}

.loader-line1 {
  width: 120px;
  height: 120px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: blue;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  animation: 2s spin infinite;
  z-index: 2;
}

.loader-line2 {
  width: 130px;
  height: 130px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: blue;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  animation: 3s spin infinite;
  z-index: 1;
}

.loader-line3 {
  width: 140px;
  height: 140px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: blue;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  animation: 3s spin infinite;
  z-index: 1;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.router-link-active{
  color: #6c757d;
  font-weight: bolder;
  text-decoration: underline;
}
a{
  color: #97a0a9;
  text-decoration: none;
}
</style>
