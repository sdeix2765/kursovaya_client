<template>
  <div class="book">

    <form @submit.prevent="Add">
      <h3>Добавить номер</h3>
      <label class="form-label">
        Имя
        <input type="text" required class="form-control" placeholder="Имя" v-model="form.first_name">
      </label>
      <label class="form-label">
        Фамилия
        <input class="form-control" required placeholder="Фамилия" v-model="form.last_name">
      </label>
      <label class="form-label">
        Отчество
        <input class="form-control" required placeholder="Отчество" v-model="form.patronymic">
      </label>
      <label class="form-label">
        Ваш номер
        <input type=number min=80000000000 max="89999999999" class="form-control" required placeholder="Номер"
          v-model="form.number">
      </label>
      <label class="form-label">
        Почта
        <input type=email class="form-control" required placeholder="Почта" v-model="form.email">
      </label>


      <br><br>

      <label class="form-label">
        Выберите номер
        <select required name="select" v-model="form.room_id">
          <option v-for="room in rooms" :value="room.id"> {{ room.name }} {{ room.description }}</option>
        </select>
      </label>

      <label class="form-label">
        Кол-во людей
        <input type=number min="1" :max="rclass.max_people" class="form-control" required placeholder="Кол-во людей"
          v-model="form.guest_count">
      </label>

      <label class="form-label">
        С
        <input type=date :min="curdate" :max="newdate" class="form-control" required placeholder="С "
          v-model="form.date_from">
      </label>
      <label class="form-label">
        До
        <input type=date :min="curdate" :max="newdate" class="form-control" required placeholder="До"
          v-model="form.date_to">
      </label>
      <div class="actions">
        <button type="submit" class="btn btn-primary"> Подтвердить </button>
      </div>
    </form>

    <p v-if="errors">{{ errors }}</p>


  </div>
</template>

<script>


export default {
  name: 'BookView',
  beforeCreate() {
    this.$store.dispatch('getRooms')
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        patronymic: '',
        number: '',
        email: '',
        guest_count: '',
        date_from: '',
        date_to: '',
        room_id: '',
        guest_id: ""
      },
      roomss: [],
      errors: ''
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost
    },
    rooms() {


      try {
        this.roomss = []
        let allrooms = this.$store.getters.getRooms
        for (let i of allrooms) {


          if (i.class_id == this.$store.getters.getClass.id) {
            this.roomss.push(i)
          }
        }
      }
      catch {
        pass
      }
      return this.roomss
    },
    token() {
      return this.$store.getters.getToken
    },
    rclass() {
      console.log(this.$store.getters.getClass)
      if (this.$store.getters.getClass.length == 0) {
        this.$router.push('/classes')
      }
      return this.$store.getters.getClass
    },

    curdate() {
      const currentDate = new Date();
      const currentDateString = currentDate.toISOString().split('T')[0];
      return currentDateString
    },
    newdate() {
      const currentDate = new Date();
      const nextMonthDate = new Date(currentDate);
      nextMonthDate.setMonth(currentDate.getMonth() + 1);

      const nextMonthDateString = nextMonthDate.toISOString().split('T')[0];
      return nextMonthDateString;
    }
  },
  components: {

  },

  methods: {
    async Add() {
      console.log(this.rooms)

      if (this.rclass.length == 0) {
        this.$router.push('/classes')
      }
      if (this.form.date_from < this.form.date_to) {
        let formData = new FormData();
        formData.append('first_name', this.form.first_name);
        formData.append('last_name', this.form.last_name);
        formData.append('patronymic', this.form.patronymic);
        formData.append('number', this.form.number);
        formData.append('email', this.form.email);
        const res = await fetch(`${this.host}/addguest`, {
          method: "POST",
          body: formData
        }).then(response => response.json())
          .then(data => {
            console.log(this.guest_id = data.guest_id);
          })
        console.log("res")
        console.log(res)
        let formData2 = new FormData();
        formData2.append('room_id', this.form.room_id);
        formData2.append('guest_id', this.guest_id);
        formData2.append('guest_count', this.form.guest_count);
        formData2.append('time_from', this.form.date_from);
        formData2.append('time_to', this.form.date_to);
        const res2 = await fetch(`${this.host}/addbook`, {
          method: "POST",
          body: formData2
        })
        function formDataToObject(formData) {
          const data = {};
          for (const [key, value] of formData.entries()) {
            data[key] = value;
          }
          return data;
        }
        const formDataObject = formDataToObject(formData2);
        console.log(formDataObject);
        if (res2.status == 200) {

          this.errors = ''
          this.$router.push('/');
        }
      }
      else {
        this.errors += 'Неверно заполнена дата'
      }


    }
  }
}
</script>
