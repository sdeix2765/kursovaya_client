<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <div class="container">
    <div class="nomera-osnova">

      <ul>
        <li class="" v-for="(book, index) in books" :key="book.id">
          <div class="nomer-standart">
            <div class="info">
              <h1>{{ book.id }}</h1>
              <button @click="deleteBook(book.id)">Удалить</button>
              <p>Кол-во гостей: {{ book.guest_count }}</p>
              <p>ID гостя: {{ book.guest_id }}</p>
              <p>ID номера: {{ book.room_id }}</p>
              <p>С {{ book.time_from }} до {{ book.time_to }}</p>
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
    books() {
      return this.$store.getters.getBooks
    },
    token() {
      return this.$store.getters.getToken
    },
    host() {
      return this.$store.getters.getHost
    }
  }, methods: {

    async deleteBook(id) {

      const res = await fetch(`${this.host}/deletebook/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      })
      if (res.status == 200) {
        this.errors = 'Удалено'
        this.$store.dispatch('getBooks')
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