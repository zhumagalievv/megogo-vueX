<template>
  <footer>
    <div class='footer__limit'>
      <div class='footer__flex'>
        <div class='flex__column left'>
          <div class=column__item1>
            <div class='item1__block'>
              <h2>Пользователям и партнёрам</h2>
              <ul class='block__list'>
                <li>Все о подписках</li>
                <li>Бонусы и подарки</li>
                <li>Активировать промокод</li>
                <li>Соглашение</li>
              </ul>
            </div>
            <div class='item1__block'>
              <ul class='block__list'>
                <li><a href="/about">О нас</a></li>
                <li>Новости компании</li>
                <li>Добавить подкаст</li>
                <li>Сотрудничество</li>
              </ul>
            </div>
            <div class='item1__block'>
              <h2>На устройствах</h2>
              <ul class='block__list'>
                <li>Телевизоры и медиаплееры</li>
                <li>Мобильные устройства</li>
                <li>Компьютер</li>
                <li>Подключить телевизор</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='flex__column'>
          <h2>Поддержка пользователей</h2>
          <span class='contact__number'>+7 (727) 350 52 75</span>
          <span class='contact__number'>support@megogo.net</span>
          <div class='contact_link'>
            <span class='contact'><a href="/contact">Все контакты</a></span>
            <span class='contact'>Вопросы и ответы</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header__navigation">
      <div class="header__limit">
        <div class="header__menu">
          <div class="menu__item">
            <span class="logo"><a href="/">Megogo</a></span>
            <ul class="menu__item__categories">
              <li>Телеканалы</li>
              <li>
                <router-link :to="{ name: 'Films' }">Фильмы</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Cartoons' }">Мультфильмы</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Serials' }">Сериалы</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Shows' }">Шоу</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Blogers' }">Блогеры</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Cybersport' }">Киберспорт</router-link>
              </li>
            </ul>
          </div>
          <div class="menu__item">
            <p>© 2021 MEGOGO. Все права защищены.</p>
            <div class="footer-age">
              18+
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerText: "Hi there I'm footer",
    }
  }
}
</script>

<style scoped>
footer {
  background: #E6E6E6;
}

.footer__limit {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.footer__flex {
  margin-top: 45px;
  margin-bottom: 37px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.flex__column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.left {
  width: 60%;
}

.column__item1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
}

.column__item1 .item1__block {
  margin-right: 30px;
}

.flex__column h2 {
  color: #666;
  font-size: 14px;
  font-weight: 700;
}

.block__list {
  padding: 0;
  list-style-type: none;
}

.block__list li, .block__list li a {
  margin-bottom: 9px;
  padding: 2px 0;
  color: #a6a6a6;
  transition: 0.5s;
}
.contact a{
  color: #a6a6a6;
}
.block__list li:hover, .contact a:hover {
  color: red;
  cursor: pointer;
}

.block__list li:last-child {
  margin-bottom: 0px;
  padding: 0
}

.contact__number, .contact__number {
  margin: 4px 0;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.25;
  color: #a6a6a6;
}

.contact_link {
  margin-top: 20px;
}

.contact {
  display: inline-block;
  color: #a6a6a6;
  line-height: 1.25;
  font-size: 16px;
  transition: 0.5s;
}

.contact:first-child {
  margin-right: 16px;
}

/*-----------------Footer Menu----------------*/
a {
  text-decoration: none;
  color: white;
}

.router-link-active {
  color: red;
}

.header__navigation {
  background: #1A1A1A;
  height: 55px;
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
  transition: 0.5s;
  font-weight: 500;
  font-size: 16px;
}

.menu__item__categories li:hover {
  color: red;
}

.menu__item p {
  line-height: 1.25;
  font-size: 16px;
  color: gray;
}

.menu__item .footer-age {
  color: gray;
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 18px;
  border: 1px solid;
  font-size: 16px;
  line-height: 36px;
  vertical-align: middle;
  text-align: center;
}
</style>