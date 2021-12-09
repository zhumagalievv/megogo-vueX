<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider widget-block-title="Яркие события" :card-data="ShowData"/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Shows',
  components: {
    "webapp-widgetslider": WidgetSlider,
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },
  data: function () {
    return {
      ShowData: [
        {
          'name': 'Истории о нас',
          'link': 'https://megogo.net/ru/search-extended?category_id=show&main_tab=filters&sort=popular',
          'year': '2021',
          'category': 'Исторические',
          'img_link': 'https://s8.vcdn.biz/static/f/3922484471/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mercedes-Benz Fashion Week Russia',
          'link': '/ru/collection/start_show',
          'year': '2019',
          'category': 'Познавательные',
          'img_link': 'https://s9.vcdn.biz/static/f/3690010161/image.jpg/pt/r193x272x4'
        },{
          'name': 'Ukrainian Fashion Week noseason sept 2021',
          'link': '/ru/discovery+',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s3.vcdn.biz/static/f/3455596641/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mercedes-Benz Fashion Week Russia',
          'link': '/ru/collection/karaoke',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s9.vcdn.biz/static/f/3690010161/image.jpg/pt/r193x272x4'
        },{
          'name': 'Китайско-российский онлайн-концерт "Веселый п…',
          'link': '/ru/blogers',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s9.vcdn.biz/static/f/3690010161/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mercedes-Benz Fashion Week Russia',
          'link': 'https://megogo.net/ru/view/17055145-istorii-o-nas.html',
          'year': '2021',
          'category': 'Спортивные',
          'img_link': 'https://s1.vcdn.biz/static/f/2165534191/image.jpg/pt/r193x272x4'
        },{
          'name': 'Global Talents Digital Vol. 1',
          'link': 'https://megogo.net/ru/view/16213375-mercedes-benz-fashion-week-russia.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s3.vcdn.biz/static/f/2072218701/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mercedes-Benz Fashion Week',
          'link': 'https://megogo.net/ru/view/14437305-ukrainian-fashion-week-noseason-sept-2021.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s7.vcdn.biz/static/f/1885262461/image.jpg/pt/r193x272x4'
        },{
          'name': 'Гала-концерт «Хиты 20 века»',
          'link': 'https://megogo.net/ru/view/12172595-mercedes-benz-fashion-week-russia.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s3.vcdn.biz/static/f/2072218701/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mercedes-Benz Fashion Week',
          'link': 'https://megogo.net/ru/view/11272725-kitaysko-rossiyskiy-onlayn-koncert-veselyy-prazdnik-vesny-2021-goda.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s3.vcdn.biz/static/f/2072218701/image.jpg/pt/r193x272x4'
        },{
          'name': 'МАММ. Экскурсия по выставке "Игорь Верещагин.…',
          'link': 'https://megogo.net/ru/view/10169135-mercedes-benz-fashion-week-russia.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s2.vcdn.biz/static/f/3910948481/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mercedes-Benz Fashion Week',
          'link': 'https://megogo.net/ru/view/8588295-global-talents-digital-vol-1.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s9.vcdn.biz/static/f/2642957901/image.jpg/pt/r193x272x4'
        },{
          'name': 'Преступная жизнь 1984-2020',
          'link': 'https://megogo.net/ru/view/7760585-mercedes-benz-fashion-week.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s4.vcdn.biz/static/f/2657525431/image.jpg/pt/r193x272x4'
        },{
          'name': 'Фальшивая популярность',
          'link': 'https://megogo.net/ru/view/4887905-gala-koncert-hity-20-veka.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s5.vcdn.biz/static/f/2798657321/image.jpg/pt/r193x272x4'
        },{
          'name': 'Черное искусство: в отсутствии света',
          'link': 'https://megogo.net/ru/view/4700885-mercedes-benz-fashion-week.html',
          'year': '2019',
          'category': 'Документальные',
          'img_link': 'https://s8.vcdn.biz/static/f/2812101101/image.jpg/pt/r193x272x4'
        },{
          'name': 'День, когда спорт остановился',
          'link': 'https://megogo.net/ru/view/4404521-mamm-ekskursiya-po-vystavke-igor-vereshchagin-neobektivnaya-realnost.html',
          'year': '2021',
          'category': 'Исторические',
          'img_link': 'https://s9.vcdn.biz/static/f/2867569821/image.jpg/pt/r193x272x4'
        },{
          'name': 'Последний круиз',
          'link': 'https://megogo.net/ru/view/4206611-mercedes-benz-fashion-week.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s7.vcdn.biz/static/f/3177777391/image.jpg/pt/r193x272x4'
        },{
          'name': 'Наши города',
          'link': 'https://megogo.net/ru/view/16518765-prestupnaya-zhizn-1984-2020.html',
          'year': '2019 - 2021',
          'category': 'Исторические',
          'img_link': 'https://s5.vcdn.biz/static/f/3401263841/image.jpg/pt/r193x272x4'
        },{
          'name': 'Легенда Андеграунда',
          'link': 'https://megogo.net/ru/view/11179175-falshivaya-populyarnost.html',
          'year': '2007 - 2021',
          'category': 'Драмы',
          'img_link': 'https://s1.vcdn.biz/static/f/3616228801/image.jpg/pt/r193x272x4'
        },{
          'name': 'На одном дыхании',
          'link': 'https://megogo.net/ru/view/11249015-chernoe-iskusstvo-v-otsutstvii-sveta.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s7.vcdn.biz/static/f/3749089471/image.jpg/pt/r193x272x4'
        },{
          'name': 'Марлон Уайанс: Вы знаете, что это',
          'link': 'https://megogo.net/ru/view/11938725-den-kogda-sport-ostanovilsya.html',
          'year': '2017',
          'category': 'Военные',
          'img_link': 'https://s7.vcdn.biz/static/f/3744256651/image.jpg/pt/r193x272x4'
        },{
          'name': 'Персона: Темная правда о психологических тест…',
          'link': 'https://megogo.net/ru/view/11959035-posledniy-kruiz.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s9.vcdn.biz/static/f/3901289931/image.jpg/pt/r193x272x4'
        },{
          'name': '15 минут позора',
          'link': 'https://megogo.net/ru/view/12089485-nashi-goroda.html',
          'year': '2011',
          'category': 'Документальные',
          'img_link': 'https://s4.vcdn.biz/static/f/3901297801/image.jpg/pt/r193x272x4'
        },{
          'name': 'В сексе втроем нет "я"',
          'link': 'https://megogo.net/ru/view/13063975-legenda-andegraunda.html',
          'year': '2012',
          'category': 'Познавательные',
          'img_link': 'https://s9.vcdn.biz/static/f/3797863371/image.jpg/pt/r193x272x4'
        },{
          'name': 'Неизведанные воды с Джереми Уэйдом',
          'link': 'https://megogo.net/ru/view/13501535-na-odnom-dyhanii.html',
          'year': '2020',
          'category': 'Познавательные',
          'img_link': 'https://s3.vcdn.biz/static/f/3767183661/image.jpg/pt/r193x272x4'
        },{
          'name': 'Тихоокеанская война',
          'link': 'https://megogo.net/ru/view/14765255-marlon-uayans-vy-znaete-chto-eto.html',
          'year': '2018 - 2020',
          'category': 'Документальные',
          'img_link': 'https://s5.vcdn.biz/static/f/3725167541/image.jpg/pt/r193x272x4'
        },{
          'name': 'Супер аэропорт Нью-Йорка',
          'link': 'https://megogo.net/ru/view/15676225-persona-temnaya-pravda-o-psihologicheskih-testah.html',
          'year': '2018',
          'category': 'Познавательные',
          'img_link': 'https://s7.vcdn.biz/static/f/3617597581/image.jpg/pt/r193x272x4'
        },{
          'name': 'Крупнейшие техногенные катастрофы',
          'link': 'https://megogo.net/ru/view/16354945-15-minut-pozora.html',
          'year': '2018',
          'category': 'Спортивные',
          'img_link': 'https://s8.vcdn.biz/static/f/3454496531/image.jpg/pt/r193x272x4'
        },{
          'name': 'Злоключения за границей 14',
          'link': 'https://megogo.net/ru/view/16359055-v-sekse-vtroem-net-ya.html',
          'year': '2018',
          'category': 'Спортивные',
          'img_link': 'https://s8.vcdn.biz/static/f/3508208981/image.jpg/pt/r193x272x4'
        },{
          'name': 'Месяц афроамериканской истории',
          'link': 'https://megogo.net/ru/view/17022105-neizvedannye-vody-s-dzheremi-ueydom.html',
          'year': '2018',
          'category': 'Спортивные',
          'img_link': 'https://s1.vcdn.biz/static/f/3020076451/image.jpg/pt/r193x272x4'
        }
      ],
    }
  }
}
</script>
