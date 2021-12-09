<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider widget-block-title="СЕРИАЛЫ" :card-data="serialData"/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Serials',
  components: {
    "webapp-widgetslider": WidgetSlider,
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },
  data: function () {
    return {
      serialData: [
        {
          'name': 'Непосредственно Каха. Сказки',
          'link': '/ru/search-extended?category_id=series&main_tab=filters&sort=popular',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s3.vcdn.biz/static/f/3854371341/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Джек и Лондон',
          'link': '/ru/collection/serial_more_tv',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s3.vcdn.biz/static/f/3758454291/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Ангелы',
          'link': '/ru/collection/serial_amediateka_sub',
          'year': '2020 - 2021',
          'category': 'Боевики',
          'img_link': 'https://s7.vcdn.biz/static/f/3760018351/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Жена олигарха',
          'link': '/ru/collection/start_serial',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/3660686711/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Мистик',
          'link': '/ru/search-extended?category_id=4&main_tab=filters&sort=popular&video_genre_id=comedy',
          'year': '2020',
          'category': 'Приключения',
          'img_link': 'https://s2.vcdn.biz/static/f/3744529841/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Брюс',
          'link': 'https://megogo.net/ru/view/16550035-neposredstvenno-kaha-skazki.html',
          'year': '2021',
          'category': 'Боевики',
          'img_link': 'https://s8.vcdn.biz/static/f/3671566001/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Мамы',
          'link': 'https://megogo.net/ru/view/16379635-dzhek-i-london.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s2.vcdn.biz/static/f/3700881101/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Звёздный путь: Пикар',
          'link': 'https://megogo.net/ru/view/10167295-angely.html',
          'year': '2020',
          'category': 'Боевики',
          'img_link': 'https://s7.vcdn.biz/static/f/3584445901/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Детство Шелдона (Сезон 1)',
          'link': 'https://megogo.net/ru/view/16030895-zhena-oligarha.html',
          'year': '2017',
          'category': 'Комедии',
          'img_link': 'https://s5.vcdn.biz/static/f/3634026971/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Тайны Броукенвуда',
          'link': 'https://megogo.net/ru/view/16360495-mistik.html',
          'year': '2014',
          'category': 'Детективы',
          'img_link': 'https://s2.vcdn.biz/static/f/3646685171/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Бесстыжие (Сезон 7)',
          'link': 'https://megogo.net/ru/view/15996452-bryus.html',
          'year': '2011',
          'category': 'Комедии',
          'img_link': 'https://s6.vcdn.biz/static/f/3633286011/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Бесстыжие (Сезон 8)',
          'link': 'https://megogo.net/ru/view/16253135-mamy.html',
          'year': '2011',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/3629867431/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Обучаю игре на гитаре',
          'link': 'https://megogo.net/ru/view/14706305-zvezdnyy-put-pikar.html',
          'year': '2012',
          'category': 'Мелодрамы',
          'img_link': 'https://s9.vcdn.biz/static/f/789685281/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Первая попытка',
          'link': 'https://megogo.net/ru/view/11187785-detstvo-sheldona-sezon-1.html',
          'year': '2009',
          'category': 'Мелодрамы',
          'img_link': 'https://s8.vcdn.biz/static/f/942025751/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Подари мне воскресенье',
          'link': 'https://megogo.net/ru/view/15798625-tayny-broukenvuda.html',
          'year': '2012',
          'category': 'Мелодрамы',
          'img_link': 'https://s1.vcdn.biz/static/f/962795611/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Безрассудно влюблённые',
          'link': 'https://megogo.net/ru/view/13298805-besstyzhie-sezon-7.html',
          'year': '2016',
          'category': 'Мелодрамы',
          'img_link': 'https://s4.vcdn.biz/static/f/1140897361/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Девушка средних лет',
          'link': 'https://megogo.net/ru/view/13298815-besstyzhie-sezon-8.html',
          'year': '2014',
          'category': 'Мелодрамы',
          'img_link': 'https://s2.vcdn.biz/static/f/2567845541/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Год в Тоскане',
          'link': 'https://megogo.net/ru/view/54181-obuchayu-igre-na-gitare.html',
          'year': '2015',
          'category': 'Мелодрамы',
          'img_link': 'https://s6.vcdn.biz/static/f/943834281/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Легкая улыбка покоряет мир',
          'link': 'https://megogo.net/ru/view/2917631-pervaya-popytka.html',
          'year': '2016',
          'category': 'Мелодрамы',
          'img_link': 'https://s5.vcdn.biz/static/f/2271594731/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Хочу романтики',
          'link': 'https://megogo.net/ru/view/2909391-podari-mne-voskresene.html',
          'year': '2011 - 2014',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/1881469781/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Один на всех',
          'link': 'https://megogo.net/ru/view/3294341-bezrassudno-vlyublennye.html',
          'year': '2013',
          'category': 'Мелодрамы',
          'img_link': 'https://s4.vcdn.biz/static/f/2149438711/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Снайперы: Любовь под прицелом',
          'link': 'https://megogo.net/ru/view/1903311-devushka-srednih-let.html',
          'year': '2012',
          'category': 'Драмы',
          'img_link': 'https://s9.vcdn.biz/static/f/2567842911/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Операция "Невеста"',
          'link': 'https://megogo.net/ru/view/2904761-god-v-toskane.html',
          'year': '2018',
          'category': 'Драмы',
          'img_link': 'https://s6.vcdn.biz/static/f/1831531101/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Другой',
          'link': 'https://megogo.net/ru/view/9687075-legkaya-ulybka-pokoryaet-mir.html',
          'year': '2018',
          'category': 'Мелодрамы',
          'img_link': 'https://s4.vcdn.biz/static/f/2638075891/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Садоводы',
          'link': 'https://megogo.net/ru/view/4704555-hochu-romantiki.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s3.vcdn.biz/static/f/3916907211/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Оса',
          'link': 'https://megogo.net/ru/view/77691-odin-na-vseh.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/3915098581/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Полезные советы от Джона Уилсона',
          'link': 'https://megogo.net/ru/view/584521-snaypery-lyubov-pod-pricelom.html',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s6.vcdn.biz/static/f/3889103991/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Черные и пропавшие',
          'link': 'https://megogo.net/ru/view/4620915-operaciya-nevesta.html',
          'year': '2021',
          'category': 'Документальные',
          'img_link': 'https://s2.vcdn.biz/static/f/3877378031/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Декстер: новая кровь',
          'link': 'https://megogo.net/ru/view/8172935-drugoy.html',
          'year': '2021',
          'category': 'Драмы',
          'img_link': 'https://s5.vcdn.biz/static/f/3709174361/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Сексуальная жизнь студенток',
          'link': 'https://megogo.net/ru/view/16518815-sadovody.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s1.vcdn.biz/static/f/3803936671/image.jpg/pt/r193x272x4'
        }
      ],
    }
  }
}
</script>
