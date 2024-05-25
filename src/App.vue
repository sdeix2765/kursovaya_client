<template>
      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <nav class="border-nav navbar navbar-expand-lg navbar-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">Курсовая</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse item-menu" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-show="!userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/">Главная страница</router-link>
        </li>
        <li v-show="!userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/login">Авторизация</router-link>
        </li>
        <li v-show="!userAuthed" class="nav-item ms-1 item-bron">
          <router-link  to="/classes">Забронировать</router-link>
        </li>
        <li v-show="!userAuthed" class="nav-item ms-1 item-reviews">
          <router-link  to="/reviews">Отзывы</router-link>
        </li>
        <li v-show="!userAuthed" class="nav-item ms-1 item-reviews">
          <router-link  to="/contacts">Контакты</router-link>
        </li>
        <li v-show="userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/addclasses">Добавить класс номеров</router-link>
        </li>
        <li v-show="userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/addrooms">Добавить номер</router-link>
        </li>
        <li v-show="userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/adminrooms">Список номеров</router-link>
        </li>
        <li v-show="userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/adminclass">Список классов номеров</router-link>
        </li>
        <li v-show="userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/adminbook">Заявки на бронь</router-link>
        </li>
        <li v-show="userAuthed" class="nav-item ms-1 item-prices">
          <router-link  to="/adminguests">Список гостей</router-link>
        </li>
      </ul>
      <div v-show="userAuthed" >
        <button @click="LogOut" class="btn btn-outline" >Выйти</button>
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
      console.log(this.$store.getters.getToken)
      if(this.$store.getters.getToken == "" || this.$store.getters.getToken == null){
        return false
      }
      return true
    },


  },
  methods: {
    LogOut() {
      localStorage.removeItem('token');
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
    this.$store.dispatch('getReviews')
    this.$store.dispatch('getBooks')
    this.$store.dispatch('getRooms')
    this.$store.dispatch('getGuests')
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
