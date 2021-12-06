<template>
  <header>
    <div class="header__navigation">
      <div class="header__limit">
        <div class="header__menu">
          <div class="menu__item">
            <span class="logo">Megogo</span>
            <ul class="menu__item__categories">
              <li>Телеканалы</li>
              <li>Фильмы</li>
              <li>Мультфильмы</li>
              <li>Сериалы</li>
              <li>Шоу</li>
              <li>Блогеры</li>
              <li>Киберспорт</li>
            </ul>
          </div>
          <div class="menu__item">
            <button>Попробовать за 19 тенге</button>
            <span class="login">Войти</span>
          </div>
        </div>
      </div>
    </div>
    <!--  Header Carousel  -->
    <Carousel/>
    <!--  Header favourites  -->
    <HeaderFavourites/>
  </header>
</template>

<script>
import Carousel from "./Carousel";
import HeaderFavourites from "./HeaderFavourites"

export default {
  name: "Header",
  components: {
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },

}
</script>

<style scoped>


.header__navigation {
  background: #1A1A1A;
  height: 50px;
}

.header__limit {
  width: 78%;
  height: 100%;
  margin: 0 auto;
  display: flex;
}

.header__menu {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.menu__item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu__item .logo {
  color: white;
  cursor: pointer;
  margin-right: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}

.menu__item__categories {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: white;
  list-style-type: none;
}

.menu__item__categories li {
  margin: 0 8px;
  cursor: pointer;
  color: white;
  transition: 0.5s;
  font-weight: 500;
  font-size: 16px;
}

.menu__item__categories li:hover {
  color: red;
}

.menu__item button {
  background: none;
  color: white;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid white;
  transition: 0.5s;
  font-size: 16px;
  border-radius: 5px;
}

.menu__item button:hover {
  color: red;
  border-color: red;
  cursor: pointer;
}

.menu__item .login {
  color: white;
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.5s;
}

.menu__item .login:hover {
  color: red;
}
</style>