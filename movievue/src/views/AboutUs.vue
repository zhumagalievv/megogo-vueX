<template>
  <div class="mainClass">
    <div class="title1">
      О НАС
    </div>
    <div class="main">
      <div class="left">
        <p>
          <a href="/ru">MEGOGO</a> — это ТВ и кино для всей семьи на любом устройстве, подключенном к интернету. Сервис
          объединяет все видеоразвлечения, предоставляя пользователю огромный каталог кино, мультфильмов и сериалов,
          популярные телеканалы, интерактивное ТВ нового поколения и эксклюзивные прямые трансляции. Мировые киноновинки
          от ведущих голливудских студий открываются на<a href="/ru">MEGOGO </a> одновременно со всем миром.
        </p>
        <p>
          Сервис предлагает новый формат онлайн-вещания телеканалов, доступных по единой подписке на телевизорах <a
            href="/ru/devices-tv">Smart TV</a>, компьютерах, планшетных ПК, смартфонах, игровых консолях и других
          платформах. Рейтинговые локальные и международные ТВ-каналы дополнены собственными интерактивными
          тематическими HD-каналами <a href="/ru">MEGOGO</a>. Сегодня на всех территориях работы сервиса суммарно
          доступно более 250 ТВ-каналов, из которых более 30 — собственные.
        </p>
        <p>
          Ежемесячная&nbsp;аудитория <a href="/ru">MEGOGO</a>, крупнейшего в Восточной Европе видеосервиса, составляет
          40 млн. уникальных пользователей в странах СНГ. Каталог ресурса — более 77 000 видео, из которых свыше 5000
          художественных фильмов и сериалов, более 1500 мультфильмов, порядка 45 000 телевизионных шоу, концертов и
          музыкального видео, а также более 20 000 новостных программ. Кроме того, в рамках проекта <a href="/ru/live">MEGOGO
          LIVE </a> производятся эксклюзивные онлайн-трансляции ведущих музыкальных и культурных событий, конференций и
          фестивалей.
        </p>
        <p>
          <a href="/ru">MEGOGO </a> активно занимается социальными инициативами, выступая организатором и меценатом
          различных кино-, интернет- и культурно-общественных мероприятий, и заботится о людях с нарушением слуха в
          рамках проекта «Смотри как слышно». Так, например, видеосервис запустил собственную студию сурдоперевода и
          открыл специальный раздел на сайте с тысячами фильмов для людей с нарушением слуха.
        </p>
      </div>
      <div class="right">
        <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMegogoKZ%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <br><br><br>

        <!-- VK Widget -->
        <div id="vk_groups"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
.mainClass {
  padding: 100px 0;
  width: 70%;
  margin: 0 auto;
}
.title1 {
  font-size: 40px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
}

p a {
  color: #f60;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: color .2s;
  -moz-transition: color .2s;
  -ms-transition: color .2s;
  transition: color .2s;
}

.main {
  display: flex;
  justify-content: space-between;

}

main {
  width: 70%;
  margin: 0 auto;
}

.left {
  width: 66%;
}

.right {
  width: 23%;
}



@media only screen and (max-width: 850px) {

  .title1 {
    font-family: Gotham;
    font-size: 40px;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
  }

  p a {
    color: #f60;
    cursor: pointer;
    text-decoration: none;
    -webkit-transition: color .2s;
    -moz-transition: color .2s;
    -ms-transition: color .2s;
    transition: color .2s;
  }

  main {
    width: 80%;
    margin: 0 auto;
    align-items: center;
  }

  .main {
    display: block;
    width: 150%;
    /*justify-content: space-between;*/
  }

  .left {
    width: 100%;
    margin-bottom: 50px;
  }

  .right {
    width: 100%;
    margin-bottom: 50px;
  }
}


.limit__container {
  margin: 0 6%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0 4px 8px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 4px 8px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 0 4px 8px 3px rgba(34, 60, 80, 0.2);
}

footer {
  background: #E6E6E6;
}

.header__navigation {
  background: #1A1A1A;
  height: 50px;
}

.header__limit, .footer__limit, .widget__limit__container {
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