<template>
  <div class="reviews">
    <h1>Номера</h1>
    <p v-if="errors">{{ errors }}</p>
    <ul>
        <li class="" v-for="(room, index) in rooms" :key="room.id">
          <div class="nomer-standart">
        <div class="info">
          <h1>{{ room.name }}</h1>
          <button @click="deleteThis(room.id)">Удалить</button>
          <p>{{ room.class_id }} - айди номера класса</p>
          <textarea class="bg-gray" readonly name="" id="" cols="30" rows="10">{{ room.description }}</textarea>
        </div>
      </div>
        </li>
      </ul>

    
  </div>
</template>


<script scoped>
export default {
  name: "Room classes",
  computed: {
    rooms() {
      return this.$store.getters.getRooms
    },
    token() {
      return this.$store.getters.getToken
    },
    host() {
      return this.$store.getters.getHost
    },
  }, methods: {
         async deleteThis(id) {
      const res = await fetch(`${this.host}/deleteroom/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      })
      if (res.status == 200) {
        this.errors = 'Удалено'
        this.$store.dispatch('getRooms')
      }
      else if (res.status == 500) {
        this.errors = 'Невозможно удалить тк есть бронь этого номера'
        this.$store.dispatch('getRooms')
      }
    }
  }
}

</script>

<style scoped>
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