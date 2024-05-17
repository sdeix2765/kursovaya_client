<template>
<div class="home">

    <RoomClass/>

    <h1 v-if="text">{{ text }}</h1>
</div>
</template>

<script>
import RoomClass from "../components/RoomClass.vue"

export default {
name: 'RoomClassView',
computed: {
    token(){
        return this.$store.getters.getToken
    }
},
components: {
  RoomClass
},
data() {
  return {
    text: ""
  }
},
methods:{
 
}
}
</script>
