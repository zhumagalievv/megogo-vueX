<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider widget-block-title="ФИЛЬМЫ" :card-data="fimdData"/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Films',
  components: {
    "webapp-widgetslider": WidgetSlider,
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },
  data: function () {
    return {
      fimdData: [
        {
          'name': 'Телохранитель жены киллера',
          'link': '/ru/search-extended?category_id=films&main_tab=filters&sort=popular',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s9.vcdn.biz/static/f/3316411971/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Ограбление по-джентльменски',
          'link': '/ru/collection/new_2017_sub?utm_source=megogo&utm_medium=films&utm_campaign=films_new_2017_sub',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s3.vcdn.biz/static/f/3273962151/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Круэлла',
          'link': '/ru/premiere/main',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s2.vcdn.biz/static/f/3414798461/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Боевой робот номер 4',
          'link': '/ru/collection/films_vipplay_sub',
          'year': '2020',
          'category': 'Боевики',
          'img_link': 'https://s8.vcdn.biz/static/f/3242806091/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Адский ад',
          'link': '/ru/films/genres_action',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s3.vcdn.biz/static/f/3689624811/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Расторгуев',
          'link': 'https://megogo.net/ru/view/12167665-telohranitel-zheny-killera.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s1.vcdn.biz/static/f/3850951411/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Чёрное и синее',
          'link': 'https://megogo.net/ru/view/13339365-ograblenie-po-dzhentlmenski.html',
          'year': '2019',
          'category': 'Боевики',
          'img_link': 'https://s8.vcdn.biz/static/f/1943541791/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Джамбо',
          'link': 'https://megogo.net/ru/view/13186925-kruella.html',
          'year': '2020',
          'category': 'Драмы',
          'img_link': 'https://s9.vcdn.biz/static/f/3051270711/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Одни дома',
          'link': 'https://megogo.net/ru/view/13333605-boevoy-robot-nomer-4.html',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s9.vcdn.biz/static/f/3284101971/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Приворот. Черное венчание',
          'link': 'https://megogo.net/ru/view/13810255-adskiy-ad.html',
          'year': '2020',
          'category': 'Мелодрамы',
          'img_link': 'https://s1.vcdn.biz/static/f/3718133551/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Гори, гори ясно',
          'link': 'https://megogo.net/ru/view/16575435-rastorguev.html',
          'year': '2019',
          'category': 'Ужасы',
          'img_link': 'https://s5.vcdn.biz/static/f/3627830471/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Последний урок',
          'link': 'https://megogo.net/ru/view/5338665-chernoe-i-sinee.html',
          'year': '2019',
          'category': 'Драмы',
          'img_link': 'https://s9.vcdn.biz/static/f/3628431171/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Не время умирать',
          'link': 'https://megogo.net/ru/view/12477085-dzhambo.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s7.vcdn.biz/static/f/3934120651/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Тина',
          'link': 'https://megogo.net/ru/view/12875775-odni-doma.html',
          'year': '2021',
          'category': 'Биография',
          'img_link': 'https://s6.vcdn.biz/static/f/3909539031/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Веном 2',
          'link': 'https://megogo.net/ru/view/10674125-privorot-chernoe-venchanie.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s8.vcdn.biz/static/f/3745224431/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Тайна Сен-Тропе',
          'link': 'https://megogo.net/ru/view/15945295-gori-gori-yasno.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/3866956541/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Красавчики до нашей эры',
          'link': 'https://megogo.net/ru/view/14242505-posledniy-urok.html',
          'year': '2019',
          'category': 'Комедии',
          'img_link': 'https://s7.vcdn.biz/static/f/3850866691/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Хороший Джо Белл',
          'link': 'https://megogo.net/ru/view/3945831-ne-vremya-umirat.html',
          'year': '2020',
          'category': 'Драмы',
          'img_link': 'https://s5.vcdn.biz/static/f/3870544271/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Хороший, плохой, коп',
          'link': 'https://megogo.net/ru/view/16028205-tina.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s5.vcdn.biz/static/f/3721801091/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Шан-Чи и легенда десяти колец',
          'link': 'https://megogo.net/ru/view/12325825-venom-2.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s1.vcdn.biz/static/f/3732754411/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Измена',
          'link': 'https://megogo.net/ru/view/13345595-tayna-sen-trope.html',
          'year': '2021',
          'category': 'Мелодрамы',
          'img_link': 'https://s9.vcdn.biz/static/f/3729760011/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Дом на другой стороне',
          'link': 'https://megogo.net/ru/view/16463635-krasavchiki-do-nashey-ery.html',
          'year': '2020',
          'category': 'Ужасы',
          'img_link': 'https://s2.vcdn.biz/static/f/3789884891/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Кошачьи миры Луиса Уэйна',
          'link': 'https://megogo.net/ru/view/16636935-horoshiy-dzho-bell.html',
          'year': '2021',
          'category': 'Драмы',
          'img_link': 'https://s1.vcdn.biz/static/f/3720890791/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Кэндимен',
          'link': 'https://megogo.net/ru/view/13842095-horoshiy-plohoy-kop.html',
          'year': '2020',
          'category': 'Триллеры',
          'img_link': 'https://s3.vcdn.biz/static/f/3787169511/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Фантастические твари и где они обитают',
          'link': 'https://megogo.net/ru/view/12190445-shan-chi-i-legenda-desyati-kolec.html',
          'year': '2016',
          'category': 'Приключения',
          'img_link': 'https://s4.vcdn.biz/static/f/869024281/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Фантастические твари: Преступления Грин-де-Ва…',
          'link': 'https://megogo.net/ru/view/16337875-izmena.html',
          'year': '2018',
          'category': 'Приключения',
          'img_link': 'https://s9.vcdn.biz/static/f/3315106071/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Гарри Поттер и философский камень',
          'link': 'https://megogo.net/ru/view/12390355-dom-na-drugoy-storone.html',
          'year': '2001',
          'category': 'Приключения',
          'img_link': 'https://s9.vcdn.biz/static/f/3315129831/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Гарри Поттер и Тайная комната',
          'link': 'https://megogo.net/ru/view/15878675-koshachi-miry-luisa-ueyna.html',
          'year': '2002',
          'category': 'Приключения',
          'img_link': 'https://s3.vcdn.biz/static/f/3315107091/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Гарри Поттер и узник Азкабана',
          'link': 'https://megogo.net/ru/view/6466805-kendimen.html',
          'year': '2004',
          'category': 'Детективы',
          'img_link': 'https://s9.vcdn.biz/static/f/3315125061/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Гарри Поттер и Кубок огня',
          'link': 'https://megogo.net/ru/view/2013241-fantasticheskie-tvari-i-gde-oni-obitayut.html',
          'year': '2005',
          'category': 'Приключения',
          'img_link': 'https://s7.vcdn.biz/static/f/3315111181/image.jpg/pt/r193x272x4'
        }
      ]
    }
  }
}
</script>
