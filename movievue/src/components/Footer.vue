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
                <li>О нас</li>
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
            <span class='contact'>Все контакты</span>
            <span class='contact'>Вопросы и ответы</span>
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
  width: 78%;
  height: 100%;
  margin: 0 auto;
  display: flex;
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
  width: 70%;
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

.block__list li {
  margin-bottom: 9px;
  padding: 2px 0;
  color: #a6a6a6;
  transition: 0.5s;
}

.block__list li:hover, .contact:hover {
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
</style>