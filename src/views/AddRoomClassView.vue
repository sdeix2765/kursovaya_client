<template>
  <div class="add">
    <form enctype="multipart/form-data" @submit.prevent="Add" >
      <h3>Добавить класс номеров</h3>
      <label class="form-label">
        Название
        <input type="text" required class="form-control" placeholder="Название" v-model="form.name">
      </label>
      <label class="form-label">
        Цена
        <input class="form-control" required type="number" min="1000" max="100000"placeholder="Цена от 1000 до 100000" v-model="form.price">
      </label>
      <label class="form-label">
        Максимальное кол-во людей
        <input class="form-control" required placeholder="1-100" type="number" min="1" max="10" v-model="form.max_people">
      </label>
      <label class="form-label">
        Описание
        <input class="form-control" required placeholder="Описание" v-model="form.description">
      </label>
      <label class="form-label">
        Изображение

        <input type="file" required class="form-control" placeholder="Изображение" @change="handleFileUpload">
      </label>
      <div class="actions">
        <button type="submit" class="btn btn-primary"> Подтвердить </button>
      </div>
    </form>
    <p v-if="errors">{{ errors }}</p>
  </div>
</template>


<script scoped>
export default {
  name: "Room classes",
  data() {
    return {
      selectedFile: null,
      form: {
        name: '',
        price: '',
        description: '',
        max_people: ''
      },
      errors: ''
    };
  },
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
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    }, async Add() {

      let formData = new FormData();
      formData.append('img', this.selectedFile);
      formData.append('name', this.form.name);
      formData.append('price', this.form.price);
      formData.append('description', this.form.description);
      formData.append('max_people', this.form.max_people);
      const res = await fetch(`${this.host}/addroom_class`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
        body: formData
      })
      if(res.status==200){
        this.errors += 'Создано'
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