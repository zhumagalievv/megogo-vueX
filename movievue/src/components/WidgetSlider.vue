<template>
  <div class="widget__container">
    <h2>{{ widgetBlockTitle }}</h2>
    <Splide :options="options" class="widget__slider">
      <WidgetCard v-for="card in cardData" class="widget__card">
        <div class="card__img">
          <img class='img__loaded' :src="card.img_link" alt="">
          <a class='overlay' href="#">
            <div class='overlay__playBlock'>
              <img src="../assets/play-img.png" alt="">
              <span>Смотреть</span>
            </div>
          </a>
        </div>
        <div class="card__title">{{ card.name }}</div>
        <div class="card__desc">{{ card.year }}, {{ card.category }}</div>
        <div class="card__payment">Покупка</div>
      </WidgetCard>
    </Splide>
  </div>
</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {
    Splide,
    "WidgetCard": SplideSlide,
  },
  data() {
    return {
      widgetBlockTitle: 'ПРЕМЬЕРЫ',
      cardData: [
        {
          'name': 'Тина',
          'link': 'https://megogo.net/ru/view/16028205-tina.html',
          'year': '2021',
          'category': 'Биография',
          'img_link': 'https://s6.vcdn.biz/static/f/3909539031/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Веном 2',
          'link': 'https://megogo.net/ru/view/12325825-venom-2.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s8.vcdn.biz/static/f/3745224431/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Хороший, плохой, коп',
          'link': 'https://megogo.net/ru/view/13842095-horoshiy-plohoy-kop.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s5.vcdn.biz/static/f/3721801091/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Тайна Сен-Тропе',
          'link': 'https://megogo.net/ru/view/13345595-tayna-sen-trope.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/3866956541/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Хороший Джо Белл',
          'link': 'https://megogo.net/ru/view/16636935-horoshiy-dzho-bell.html',
          'year': '2020',
          'category': 'Драмы',
          'img_link': 'https://s5.vcdn.biz/static/f/3870544271/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Губка Боб в бегах',
          'link': 'https://megogo.net/ru/view/2993481-gubka-bob-v-begah.html',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s6.vcdn.biz/static/f/3846947541/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Шан-Чи и легенда десяти колец',
          'link': 'https://megogo.net/ru/view/12190445-shan-chi-i-legenda-desyati-kolec.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s1.vcdn.biz/static/f/3732754411/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Измена',
          'link': 'https://megogo.net/ru/view/16337875-izmena.html',
          'year': '2021',
          'category': 'Мелодрамы',
          'img_link': 'https://s9.vcdn.biz/static/f/3729760011/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Дом на другой стороне',
          'link': 'https://megogo.net/ru/view/12390355-dom-na-drugoy-storone.html',
          'year': '2020',
          'category': 'Ужасы',
          'img_link': 'https://s2.vcdn.biz/static/f/3789884891/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Кэндимен',
          'link': 'https://megogo.net/ru/view/6466805-kendimen.html',
          'year': '2020',
          'category': 'Триллеры',
          'img_link': 'https://s3.vcdn.biz/static/f/3787169511/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Демоник',
          'link': 'https://megogo.net/ru/view/13344465-demonik.html',
          'year': '2021',
          'category': 'Ужасы',
          'img_link': 'https://s4.vcdn.biz/static/f/3775783261/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Дюна',
          'link': 'https://megogo.net/ru/view/4474861-dyuna.html',
          'year': '2021',
          'category': 'Приключения',
          'img_link': 'https://s1.vcdn.biz/static/f/3921072931/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Круиз по джунглям',
          'link': 'https://megogo.net/ru/view/4474981-kruiz-po-dzhunglyam.html',
          'year': '2021',
          'category': 'Приключения',
          'img_link': 'https://s5.vcdn.biz/static/f/3611641451/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Щенячий патруль в кино',
          'link': 'https://megogo.net/ru/view/16030595-shchenyachiy-patrul-v-kino.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s5.vcdn.biz/static/f/3727075181/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Не дыши 2',
          'link': 'https://megogo.net/ru/view/13279285-ne-dyshi-2.html',
          'year': '2021',
          'category': 'Триллеры',
          'img_link': 'https://s3.vcdn.biz/static/f/3694527021/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Отчаянные аферистки',
          'link': 'https://megogo.net/ru/view/13344485-otchayannye-aferistki.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s6.vcdn.biz/static/f/3670790361/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Главный герой',
          'link': 'https://megogo.net/ru/view/5340225-glavnyy-geroy.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s2.vcdn.biz/static/f/1921861631/image.jpg/pt/r193x272x4'
        }, {
          'name': 'В западне',
          'link': 'https://megogo.net/ru/view/13772745-v-zapadne.html',
          'year': '2021',
          'category': 'Триллеры',
          'img_link': 'https://s4.vcdn.biz/static/f/3603793531/image.jpg/pt/r193x272x4'
        }, {
          'name': 'После. Глава 3',
          'link': 'https://megogo.net/ru/view/11364455-posle-glava-3.html',
          'year': '2021',
          'category': 'Драмы',
          'img_link': 'https://s5.vcdn.biz/static/f/3670781531/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Бомбардировка',
          'link': 'https://megogo.net/ru/view/16360845-bombardirovka.html',
          'year': '2018',
          'category': 'Боевики',
          'img_link': 'https://s8.vcdn.biz/static/f/3745249181/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Время',
          'link': 'https://megogo.net/ru/view/12534055-vremya.html',
          'year': '2021',
          'category': 'Триллеры',
          'img_link': 'https://s8.vcdn.biz/static/f/3672153791/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Босс-молокосос 2',
          'link': 'https://megogo.net/ru/view/2993231-boss-molokosos-2.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/3672108301/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Холодный расчет',
          'link': 'https://megogo.net/ru/view/14245555-holodnyy-raschet.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s7.vcdn.biz/static/f/3573132991/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Мистериум. Тьма в бутылке',
          'link': 'https://megogo.net/ru/view/15936385-misterium-tma-v-butylke.html',
          'year': '2016',
          'category': 'Детективы',
          'img_link': 'https://s9.vcdn.biz/static/f/3638980611/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Свадьбы не будет!',
          'link': 'https://megogo.net/ru/view/12126775-svadby-ne-budet.html',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/3603812021/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Кодекс киллера',
          'link': 'https://megogo.net/ru/view/12389465-kodeks-killera.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s4.vcdn.biz/static/f/3573134941/image.jpg/pt/r193x272x4'
        }, {
          'name': '12 могучих сирот',
          'link': 'https://megogo.net/ru/view/13103455-12-moguchih-sirot.html',
          'year': '2021',
          'category': 'Спортивные',
          'img_link': 'https://s3.vcdn.biz/static/f/3633244131/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Зона 414',
          'link': 'https://megogo.net/ru/view/14491885-zona-414.html',
          'year': '2021',
          'category': 'Триллеры',
          'img_link': 'https://s4.vcdn.biz/static/f/3573124861/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Макс Фист',
          'link': 'https://megogo.net/ru/view/14587245-maks-fist.html',
          'year': '2020',
          'category': 'Боевики',
          'img_link': 'https://s4.vcdn.biz/static/f/3538170391/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Злое',
          'link': 'https://megogo.net/ru/view/13577045-zloe.html',
          'year': '2021',
          'category': 'Детективы',
          'img_link': 'https://s8.vcdn.biz/static/f/3797427041/image.jpg/pt/r193x272x4'
        }
      ],
    }
  },
  setup() {
    const options = {
      gap: '15px',
      perPage: 3,
      perMove: 5,
      pagination: false,
    };

    return {options};
  },
});
</script>

<style>
.widget__container {
  margin: 30px auto;
  width: 90%;
}

.widget__container h2 {
  font-size: 36px !important;
  line-height: 36px !important;
  font-weight: 400 !important;
  font-style: normal !important;
  text-transform: uppercase !important;
}

.widget__slider {
  padding: 60px 0;
  overflow: hidden;
  box-sizing: content-box;
  min-height: 370px;
  position: relative;
}

.widget__slider .splide__arrows {
  position: absolute;
  width: 90px;
  height: 38px;
  border: 1px solid gray;
  border-radius: 5px;
  top: 0;
  right: 0;
}

.widget__slider .splide__arrows button {
  width: 30px;
  height: 40px
}

.widget__slider .splide__arrows button:hover {
  opacity: 0.5;
}

.splide__arrow svg {
  height: 23px;
  width: 144px;
  fill: #000;
}

.widget__card {
  margin: 5px 0;
  max-width: 230px !important;
  height: 370px !important;
  display: inline-block;
  padding: 5px 9px;
  box-sizing: border-box;
}

.splide__arrow--next {
}

.widget__card .card__img {
  position: relative;
}

.widget__card .card__img .img__loaded {
  width: 100%;
  height: 278px;
  cursor: pointer;
}

.overlay {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.733);
  display: flex;
  transition: 0.2s;
  text-decoration: none;
}

.overlay .overlay__playBlock {
  text-align: center;
  margin: auto auto;
  width: 50px;
  height: 50px;
}

.overlay .overlay__playBlock img {
  margin-left: 10px;
  width: 45px;
  height: 45px;
}

.overlay .overlay__playBlock span {
  color: white;
  text-decoration: none;
}

.widget__card .card__img:hover .overlay {
  opacity: 1;
}

.card__title {
  margin-top: 12px;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: #333;
  transition: 0.3s;
}

.card__title:hover {
  color: red;
  cursor: pointer;
}

.widget__card .card__desc {
  margin: 2px 0;
  color: #a6a6a6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}

.widget__card .card__payment {
  color: #00b2b2;
  font-weight: 700;
  letter-spacing: .3px;
  text-transform: uppercase;
  font-size: 12px;
}
</style>