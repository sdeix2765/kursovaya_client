<template>
<ul>
  <h1>Класс номеров</h1>
    <li class="" v-for="(room, index) in rooms" :key="room.id">id: {{ room.id }} <br>  {{ room.name }} <br> <b>Описание:</b> {{ room.description }} <br> <b>Цена:</b> {{ room.price }} <br> <b>Максимальное кол-во людей:</b> {{ room.max_people}} <br> <b>Изображение:</b> 
      <img src="{{host}}/image/{{room.img}}" alt="">
      <img :src="getImageUrl(room.img)" alt="">
      
    <br>
 </li>
</ul>
</template>


<script scoped>
export default {
    name: "Room classes",
    computed: {
    rooms(){
        return this.$store.getters.getClasses
    },
    token(){
        return this.$store.getters.getToken
    },
    host(){
        return this.$store.getters.getHost
    }
  },methods: {
    getImageUrl(path) {
      return this.host + '/images/' + path;
    }
  }
}

</script>

<style scoped>
ul{
    list-style-type: none;
    margin:0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
li{
    margin:10px;
    padding: 10px ;
    text-align: left;
    
}

</style>