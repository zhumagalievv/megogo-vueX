<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider widget-block-title="МУЛЬТФИЛЬМЫ" :card-data="multData"/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Cartoons',
  components: {
    "webapp-widgetslider": WidgetSlider,
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },
  data: function () {
    return {
      multData: [
        {
          'name': 'Кругляши. Колыбельная',
          'link': '/ru/search-extended?category_id=mult&main_tab=filters&sort=popular',
          'year': '2020',
          'category': 'Для детей',
          'img_link': 'https://s6.vcdn.biz/static/f/3917575311/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Игры Котэ',
          'link': '/ru/collection/Populiarnue_multserialy_besplatno',
          'year': '2021',
          'category': 'Для детей',
          'img_link': 'https://s2.vcdn.biz/static/f/3915059681/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Зимние истории',
          'link': '/ru/collection/baby_tv',
          'year': '2021',
          'category': 'Для детей',
          'img_link': 'https://s3.vcdn.biz/static/f/3914204241/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Долина муми-троллей',
          'link': '/ru/collection/tom_and_jerry',
          'year': '2019',
          'category': 'Драмы',
          'img_link': 'https://s2.vcdn.biz/static/f/3877254371/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Тортик и свечки',
          'link': '/ru/search-extended?category_id=mult&main_tab=filters&sort=popular&video_genre_id=adventures&vod_free=true',
          'year': '2021',
          'category': 'Мультсериалы',
          'img_link': 'https://s9.vcdn.biz/static/f/3874022631/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Тихий час',
          'link': 'https://megogo.net/ru/view/17050545-kruglyashi-kolybelnaya.html',
          'year': '2021',
          'category': 'Мультсериалы',
          'img_link': 'https://s3.vcdn.biz/static/f/3874003041/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Джунгли ТВ',
          'link': 'https://megogo.net/ru/view/17046545-igry-kote.html',
          'year': '2021',
          'category': 'Семейные',
          'img_link': 'https://s8.vcdn.biz/static/f/3854170061/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Губка Боб в бегах',
          'link': 'https://megogo.net/ru/view/17045645-zimnie-istorii.html',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s6.vcdn.biz/static/f/3846947541/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Видеоклипы Джинджи',
          'link': 'https://megogo.net/ru/view/16958235-dolina-mumi-trolley.html',
          'year': '2021',
          'category': 'Для детей',
          'img_link': 'https://s7.vcdn.biz/static/f/3843630061/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Машины-помощники',
          'link': 'https://megogo.net/ru/view/16946225-tortik-i-svechki.html',
          'year': '2016',
          'category': 'Для детей',
          'img_link': 'https://s3.vcdn.biz/static/f/3877259421/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Джинджи',
          'link': 'https://megogo.net/ru/view/16946215-tihiy-chas.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/3843624181/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Братцы кролики: Байки старого замка',
          'link': 'https://megogo.net/ru/view/16839995-dzhungli-tv.html',
          'year': '2021',
          'category': 'Семейные',
          'img_link': 'https://s9.vcdn.biz/static/f/3646184391/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Барашек Шон',
          'link': 'https://megogo.net/ru/view/2993481-gubka-bob-v-begah.html',
          'year': '2007',
          'category': 'Комедии',
          'img_link': 'https://s1.vcdn.biz/static/f/3005470171/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Игрушечный полицейский',
          'link': 'https://megogo.net/ru/view/16659365-videoklipy-dzhindzhi.html',
          'year': '2017',
          'category': 'Комедии',
          'img_link': 'https://s2.vcdn.biz/static/f/2792156771/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Суперкрылья. Джетт и его друзья',
          'link': 'https://megogo.net/ru/view/16958245-mashiny-pomoshchniki.html',
          'year': '2015 - 2019',
          'category': 'Приключения',
          'img_link': 'https://s8.vcdn.biz/static/f/839028221/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Босс-молокосос: Снова в деле',
          'link': 'https://megogo.net/ru/view/16659375-dzhindzhi.html',
          'year': '2018',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/3084198911/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Люк - Путешественник во времени',
          'link': 'https://megogo.net/ru/view/16025425-bratcy-kroliki-bayki-starogo-zamka.html',
          'year': '2020',
          'category': 'Для детей',
          'img_link': 'https://s5.vcdn.biz/static/f/3091857071/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Школьный автобус Гордон',
          'link': 'https://megogo.net/ru/view/11170055-barashek-shon.html',
          'year': '2019',
          'category': 'Для детей',
          'img_link': 'https://s1.vcdn.biz/static/f/3091900681/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Ниндзяго: Мастера Кружитцу',
          'link': 'https://megogo.net/ru/view/11927685-igrushechnyy-policeyskiy.html',
          'year': '2011 - 2019',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/1748506261/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Супер Зак',
          'link': 'https://megogo.net/ru/view/2745451-superkrylya-dzhett-i-ego-druzya.html',
          'year': '2018 - 2020',
          'category': 'Приключения',
          'img_link': 'https://s3.vcdn.biz/static/f/2508517461/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Monster High: Приключение Команды Монстров',
          'link': 'https://megogo.net/ru/view/12544605-boss-molokosos-snova-v-dele.html',
          'year': '2017 - 2018',
          'category': 'Приключения',
          'img_link': 'https://s4.vcdn.biz/static/f/2753652901/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Монсики',
          'link': 'https://megogo.net/ru/view/11927665-lyuk-puteshestvennik-vo-vremeni.html',
          'year': '2018 - 2019',
          'category': 'Для детей',
          'img_link': 'https://s1.vcdn.biz/static/f/1988104141/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Фееринки',
          'link': 'https://megogo.net/ru/view/12740255-shkolnyy-avtobus-gordon.html',
          'year': '2019',
          'category': 'Мультсериалы',
          'img_link': 'https://s6.vcdn.biz/static/f/2266767051/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Юху и его друзья',
          'link': 'https://megogo.net/ru/view/4173181-nindzyago-mastera-kruzhitcu.html',
          'year': '2010 - 2011',
          'category': 'Для детей',
          'img_link': 'https://s7.vcdn.biz/static/f/760139521/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Лука',
          'link': 'https://megogo.net/ru/view/8759435-super-zak.html',
          'year': '2021',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/3495951301/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Гринч',
          'link': 'https://megogo.net/ru/view/10635995-monster-high-priklyuchenie-komandy-monstrov.html',
          'year': '2018',
          'category': 'Комедии',
          'img_link': 'https://s8.vcdn.biz/static/f/2203985681/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Моана',
          'link': 'https://megogo.net/ru/view/6528445-monsiki.html',
          'year': '2016',
          'category': 'Комедии',
          'img_link': 'https://s1.vcdn.biz/static/f/2048781331/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Шрек',
          'link': 'https://megogo.net/ru/view/6103215-feerinki.html',
          'year': '2001',
          'category': 'Комедии',
          'img_link': 'https://s2.vcdn.biz/static/f/3375081911/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Человек-паук: Через вселенные',
          'link': 'https://megogo.net/ru/view/2559581-yuhu-i-ego-druzya.html',
          'year': '2018',
          'category': 'Приключения',
          'img_link': 'https://s6.vcdn.biz/static/f/1595214501/image.jpg/pt/r193x272x4'
        }, {
          'name': 'Соник в кино',
          'link': 'https://megogo.net/ru/view/11616505-luka.html',
          'year': '2020',
          'category': 'Комедии',
          'img_link': 'https://s4.vcdn.biz/static/f/2690467681/image.jpg/pt/r193x272x4'
        }
      ],
    }
  }
}
</script>
