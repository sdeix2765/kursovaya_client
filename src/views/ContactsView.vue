<template>
  <div class="home">
    <div class="centered">
            <div class="opisanie-contacts">
                <div class="contacts">
                    <h2>Контактная информация</h2>
                    <h3>Адрес:</h3>
                    <address>ул. Герцена, д. 18, г. Томск</address>
                    
                    <h4>Телефон:</h4>
                    <div>
                        <p>Телефон 1: <a href="tel:+7(954)68-25-14">+1 (234) 567-89</a></p>
                    </div>
                    
                    <h4>Email:</h4>
                    <div>
                        <p>Email 1: <a href="mailto:Fse@mail.ru">Fse@mail.ru</a></p>
                    </div>
                </div>
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

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {

    }
  },

}
</script>
<style>
@import '@/assets/style.css';
</style>