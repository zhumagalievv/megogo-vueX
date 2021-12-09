<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider widget-block-title="Блогеры" :card-data="blogersData"/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Blogers',
  components: {
    "webapp-widgetslider": WidgetSlider,
    "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  },
  data: function () {
    return {
      blogersData: [
        {
          'name': 'TamerlanAlena',
          'link': '/ru/collection/popular_blogers',
          'year': '2012 - 2021',
          'category': 'Музыкальные',
          'img_link': 'https://s9.vcdn.biz/static/f/3934986201/image.jpg/pt/r193x272x4'
        },{
          'name': 'Приключения рыбака и охотника',
          'link': '/ru/collection/food_blogers',
          'year': '2010 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s8.vcdn.biz/static/f/3874226921/image.jpg/pt/r193x272x4'
        },{
          'name': 'Советские радиодетали и не только от Alex1977…',
          'link': '/ru/collection/cybersport_blogers',
          'year': '2010 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s5.vcdn.biz/static/f/3849767681/image.jpg/pt/r193x272x4'
        },{
          'name': 'Mr Sagoo',
          'link': '/ru/collection/hobbies_blogers',
          'year': '2015 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s3.vcdn.biz/static/f/3480187251/image.jpg/pt/r193x272x4'
        },{
          'name': 'Школа Автозвука Сергея Туманова',
          'link': '/ru/collection/travell_blogers',
          'year': '2009 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s8.vcdn.biz/static/f/3874252031/image.jpg/pt/r193x272x4'
        },{
          'name': 'Papa Play',
          'link': 'https://megogo.net/ru/view/15994085-tamerlanalena.html',
          'year': '2020 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s9.vcdn.biz/static/f/3480177141/image.jpg/pt/r193x272x4'
        },{
          'name': 'ZikValera',
          'link': 'https://megogo.net/ru/view/15993815-priklyucheniya-rybaka-i-ohotnika.html',
          'year': '2009 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s2.vcdn.biz/static/f/3874205261/image.jpg/pt/r193x272x4'
        },{
          'name': 'Scale Models',
          'link': 'https://megogo.net/ru/view/15720935-sovetskie-radiodetali-i-ne-tolko-ot-alex1977t.html',
          'year': '2016 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s3.vcdn.biz/static/f/3475392681/image.jpg/pt/r193x272x4'
        },{
          'name': 'IGOR IGOREVICH LIVE',
          'link': 'https://megogo.net/ru/view/15723825-mr-sagoo.html',
          'year': '2015 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s1.vcdn.biz/static/f/3844483831/image.jpg/pt/r193x272x4'
        },{
          'name': 'Максим Балачевцев',
          'link': 'https://megogo.net/ru/view/14521765-shkola-avtozvuka-sergeya-tumanova.html',
          'year': '2010 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s2.vcdn.biz/static/f/3844405541/image.jpg/pt/r193x272x4'
        },{
          'name': 'Agugugu',
          'link': 'https://megogo.net/ru/view/15993875-papa-play.html',
          'year': '2014 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s2.vcdn.biz/static/f/3843862481/image.jpg/pt/r193x272x4'
        },{
          'name': 'MediaGroupUZ',
          'link': 'https://megogo.net/ru/view/14521625-zikvalera.html',
          'year': '2015 - 2021',
          'category': 'Музыкальные',
          'img_link': 'https://s1.vcdn.biz/static/f/3722965921/image.jpg/pt/r193x272x4'
        },{
          'name': 'Max TV',
          'link': 'https://megogo.net/ru/view/15993765-scale-models.html',
          'year': '2017 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s9.vcdn.biz/static/f/3721891581/image.jpg/pt/r193x272x4'
        },{
          'name': 'GAZ',
          'link': 'https://megogo.net/ru/view/14516755-igor-igorevich-live.html',
          'year': '2014',
          'category': 'Развлекательные',
          'img_link': 'https://s2.vcdn.biz/static/f/3721920401/image.jpg/pt/r193x272x4'
        },{
          'name': 'ViteC - Play',
          'link': 'https://megogo.net/ru/view/15723775-maksim-balachevcev.html',
          'year': '2012',
          'category': 'Игры',
          'img_link': 'https://s7.vcdn.biz/static/f/3757972291/image.jpg/pt/r193x272x4'
        },{
          'name': 'Песни Для Детей .tv',
          'link': 'https://megogo.net/ru/view/15723765-agugugu.html',
          'year': '2015 - 2021',
          'category': 'Для детей',
          'img_link': 'https://s9.vcdn.biz/static/f/3722249241/image.jpg/pt/r193x272x4'
        },{
          'name': 'TheWarpath',
          'link': 'https://megogo.net/ru/view/15723735-mediagroupuz.html',
          'year': '2012 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s9.vcdn.biz/static/f/3757661541/image.jpg/pt/r193x272x4'
        },{
          'name': 'Мистик',
          'link': 'https://megogo.net/ru/view/4181081-max-tv.html',
          'year': '2011 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s4.vcdn.biz/static/f/3722292121/image.jpg/pt/r193x272x4'
        },{
          'name': 'DiDiKa TV',
          'link': 'https://megogo.net/ru/view/10803305-gaz.html',
          'year': '2017 - 2021',
          'category': 'Для детей',
          'img_link': 'https://s4.vcdn.biz/static/f/3722303551/image.jpg/pt/r193x272x4'
        },{
          'name': 'Alex Tubefun',
          'link': 'https://megogo.net/ru/view/10803415-vitec-play.html',
          'year': '2016 - 2021',
          'category': 'Для детей',
          'img_link': 'https://s9.vcdn.biz/static/f/3646353771/image.jpg/pt/r193x272x4'
        },{
          'name': 'Hitzh',
          'link': 'https://megogo.net/ru/view/11453825-pesni-dlya-detey-tv.html',
          'year': '2014 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s6.vcdn.biz/static/f/2924442861/image.jpg/pt/r193x272x4'
        },{
          'name': 'TheBrainDit',
          'link': 'https://megogo.net/ru/view/11454345-thewarpath.html',
          'year': '2011 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s4.vcdn.biz/static/f/2921506411/image.jpg/pt/r193x272x4'
        },{
          'name': 'DenLion TV',
          'link': 'https://megogo.net/ru/view/11454375-mistik.html',
          'year': '2012 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s2.vcdn.biz/static/f/2924620841/image.jpg/pt/r193x272x4'
        },{
          'name': 'Boys and Toys',
          'link': 'https://megogo.net/ru/view/11456885-didika-tv.html',
          'year': '2015 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s2.vcdn.biz/static/f/3844405541/image.jpg/pt/r193x272x4'
        },{
          'name': 'Agugugu',
          'link': 'https://megogo.net/ru/view/11457615-alex-tubefun.html',
          'year': '2014 - 2021',
          'category': 'Познавательные',
          'img_link': 'https://s6.vcdn.biz/static/f/3804683091/image.jpg/pt/r193x272x4'
        },{
          'name': 'ALEX TOY SHOW',
          'link': 'https://megogo.net/ru/view/11871585-hitzh.html',
          'year': '2014 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s2.vcdn.biz/static/f/3877173011/image.jpg/pt/r193x272x4'
        },{
          'name': 'Boram Tube Stories',
          'link': 'https://megogo.net/ru/view/12201705-thebraindit.html',
          'year': '2011 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s5.vcdn.biz/static/f/3856219331/image.jpg/pt/r193x272x4'
        },{
          'name': 'Boram Tube Play',
          'link': 'https://megogo.net/ru/view/12201755-denlion-tv.html',
          'year': '2008 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s6.vcdn.biz/static/f/3856135821/image.jpg/pt/r193x272x4'
        },{
          'name': 'Boram y Juguetes',
          'link': 'https://megogo.net/ru/view/12205125-boys-and-toys.html',
          'year': '2017 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s6.vcdn.biz/static/f/3844813371/image.jpg/pt/r193x272x4'
        },{
          'name': 'Планета АГУ',
          'link': 'https://megogo.net/ru/view/15723765-agugugu.html',
          'year': '2020 - 2021',
          'category': 'Развлекательные',
          'img_link': 'https://s9.vcdn.biz/static/f/3687820731/image.jpg/pt/r193x272x4'
        }
      ]
    }
  }
}
</script>
