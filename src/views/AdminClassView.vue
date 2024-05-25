<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <div class="container">
    <div class="nomera-osnova">

      <ul>
        <li class="" v-for="(room, index) in rooms" :key="room.id">
          <div class="nomer-standart">
            <img :src="getImageUrl(room.img)" alt="qwe">
        <div class="info">
          <h1>{{ room.name }}</h1>
          <button @click="deleteClass(room.id)">Удалить</button>
          <p>Максимальное кол-во людей {{room.max_people}}</p>
          <p>{{ room.price }} руб/день</p>
          <textarea class="bg-gray" readonly name="" id="" cols="30" rows="10">{{ room.description }}</textarea>
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
    rooms() {
      return this.$store.getters.getClasses
    },
    token() {
      return this.$store.getters.getToken
    },
    host() {
      return this.$store.getters.getHost
    }
  }, methods: {
    getImageUrl(path) {
      return this.host + '/images/' + path;
    },
    async deleteClass(id) {

      const res = await fetch(`${this.host}/deleteclass/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      })
      if (res.status == 200) {
        this.errors = 'Удалено'
        this.$store.dispatch('getClasses')
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