<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <div class="container">
    <div class="nomera-osnova">

      <ul>
        <li class="" v-for="(guest, index) in guests" :key="guest.id">
          <div class="nomer-standart">
            <div class="info">
              <h1>{{ guest.id }}</h1>
              <button @click="deleteGuest(guest.id)">Удалить</button>
              <p>ФИО: {{ guest.first_name }}  {{ guest.last_name }}  {{ guest.patronymic }}</p>
              <p>Номер: {{ guest.number }}</p>
              <p>Почта: {{ guest.email }}</p>
            </div>
          </div>
        </li>
      </ul>
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


<script scoped>
export default {
  name: "Room classes",
  computed: {
    guests() {
      return this.$store.getters.getGuests
    },
    token() {
      return this.$store.getters.getToken
    },
    host() {
      return this.$store.getters.getHost
    }
  }, methods: {

    async deleteGuest(id) {

      const res = await fetch(`${this.host}/deleteguest/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      })
      if (res.status == 200) {
        this.errors = 'Удалено'
        this.$store.dispatch('getGuests')
      }


    }
  }
}

</script>

<style scoped>
@import '@/assets/style.css';

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

li {
  margin: 10px;
  padding: 10px;
  text-align: left;

}
</style>