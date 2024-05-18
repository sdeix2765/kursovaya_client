<template>
  <div class="reviews">

    <ul>
  <h1>Отзывы</h1>
    <li class="" v-for="(review, index) in reviews" :key="review.id"><b>Имя</b>{{ review.name }} <br> <b>Почта:</b> {{ review.email }} <br> <b>Сообщение:</b> {{ review.message }} <br>  {{ review.date}} 
 </li>
</ul>
    <form  @submit.prevent="Add">
      <h3>Добавить отзыв</h3>
      <label class="form-label">
        Ваше имя
        <input type="text" required class="form-control" placeholder="Имя" v-model="form.name">
      </label>
      <label class="form-label">
        Ваша почта
        <input type=email class="form-control" required placeholder="Почта" v-model="form.email">
      </label>
      <label class="form-label">
        Ваш комментарий
        <input type=text class="form-control" required placeholder="Комментарий" v-model="form.message">
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
        email: '',
        message: ''
      },
      errors: ''
    };
  },
  computed: {
    reviews() {
      return this.$store.getters.getReviews
    },
    token() {
      return this.$store.getters.getToken
    },
    host() {
      return this.$store.getters.getHost
    },
  }, methods: {
         async Add() {
      console.log(this.form.class);
      let formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('message', this.form.message);
      const res = await fetch(`${this.host}/addreview`, {
        method: "POST",
        body: formData
      })
      if (res.status == 200) {
        this.errors += 'Добавлен новый отзыв'
        this.$store.dispatch('getReviews')
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