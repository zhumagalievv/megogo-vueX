<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider widget-block-title="ПРЕМЬЕРЫ" :card-data="cardData"/>
    <webapp-widgetslider widget-block-title="МУЛЬТФИЛЬМЫ" :card-data="multData"/>
    <webapp-widgetslider widget-block-title="СЕРИАЛЫ" :card-data="serialData"/>
    <webapp-widgetslider widget-block-title="ФИЛЬМЫ" :card-data="fimdData"/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Home',
  components: {
    "webapp-widgetslider": WidgetSlider,
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },
  data: function () {
    return {
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
