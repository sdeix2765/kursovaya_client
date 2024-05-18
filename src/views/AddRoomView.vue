<template>
  <div class="add">
    <form enctype="multipart/form-data" @submit.prevent="Add">
      <h3>Добавить номер</h3>
      <label class="form-label">
        Название
        <input type="text" required class="form-control" placeholder="Название" v-model="form.name">
      </label>
      <label class="form-label">
        Описание
        <input class="form-control" required placeholder="Описание" v-model="form.description">
      </label>
      <label class="form-label">
        Класс номера
        <select required name="select" v-model="form.class" >
        <option v-for="room in rooms" :value=room.id>{{room.name}}</option>
        </select>
      </label>
      <label class="form-label">
        изображение
        <input type="file" required class="form-control" placeholder="изображение" @change="handleFileUpload">
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
        description: '',
        class: ''
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
    },
  }, methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    }, async Add() {
      console.log(this.form.class);
      let formData = new FormData();
      formData.append('img', this.selectedFile);
      formData.append('name', this.form.name);
      formData.append('description', this.form.description);
      formData.append('class_id', this.form.class);
      const res = await fetch(`${this.host}/addroom`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
        body: formData
      })
      if (res.status == 200) {
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