<template>
  <div class="mainClass">
    <a name="scrolltop" id="scrolltop"></a>
    <div
        class="widget static_v1 product-main type-contacts has-narrow-container 9eb3fc37eb547bb04bd90de9bc019f6b.mustache"
        style="padding-top: 56px !important; padding-bottom: 35px !important; " id="widget_7">
      <div class="container">
        <h1 class="widget-title">КОНТАКТЫ</h1>
        <p class="widget-description">
          Если у вас возникли проблемы с работой сервиса, пожалуйста, сообщите нам об этом.
        </p>
      </div>
    </div>
    <section class="widget contactsForm_v1 product-main has-narrow-container" style="" id="widget_8"
             data-widget="{&quot;class&quot;:&quot;contactsForm_v1&quot;,&quot;id&quot;:&quot;widget_8&quot;,&quot;options&quot;:null}"
             data-position="1">
      <div class="">
        <div class="container">
          <div class="contacts-left">
            <div class="contacts-block contacts-support">
              <h4>
                Поддержка пользователей
              </h4>
              <div class="support-phone">
                <div class="support-phone-item">
                  +7 (727) 350 52 75
                </div>
              </div>
              <div class="support-email">
                <a class="link-default" href="mailto:support@megogo.net">support@megogo.net</a>
              </div>
              <div class="supports">
                <a href="https://telegram.me/megogonetbot" class="support-item telegram">
                  <span class="iconify" data-icon="logos:telegram" data-width="20" data-height="20"></span>
                  <span class="social-text">Telegram</span>
                </a>
                <a href="https://www.viber.com/support_megogo" target="_blank" class="support-item viber">
                  <span class="iconify" data-icon="cib:viber" style="color: #665cac;" data-width="20"
                        data-height="20"></span>
                  <span class="social-text">Viber</span>
                </a>
              </div>
            </div>
            <div class="contacts-block contacts-partnership">
              <div class="widget static_v1 product-main has-narrow-container 5c606043c05ad83087ef7b6ae800be23.mustache"
                   style="" id="widget_9">
                <h4>Сотрудничество</h4>
                <p>
                  Обсудить партнерские проекты, разместить рекламу на MEGOGO или предложить свой контент можно на
                  странице&nbsp;<a href="/ru/partnership">Сотрудничество</a>
                </p>
              </div>
            </div>
            <div class="contacts-block contacts-social">
              <h4>
                Мы в социальных сетях
              </h4>
              <div class="widget static_v1 product-main  5c606043c05ad83087ef7b6ae800b32b" style="" id="widget_12">
                <div class="container">
                  <div class="social-buttons">
                    <!-- facebook  Button -->
                    <a href="http://www.facebook.com" target="blank" class="social-margin">
                      <div class="social-icon facebook">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                    </a>
                    <!-- LinkedIn Button -->
                    <a href="http://linkedin.com/" class="social-margin" target="blank">
                      <div class="social-icon linkedin">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </div>
                    </a>
                    <!-- Github Button -->
                    <a href="https://github.com/" target="blank" class="social-margin">
                      <div class="social-icon github">
                        <i class="fa fa-github-alt" aria-hidden="true"></i>
                      </div>
                    </a>
                    <!-- Youtube Button -->
                    <a href="http://youtube.com/" target="blank" class="social-margin">
                      <div class="social-icon youtube">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </div>
                    </a>
                    <!-- TwitterButton -->
                    <a href="http://twitter.com/" target="blank" class="social-margin">
                      <div class="social-icon twitter">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contacts-right">
            <div class="contacts-block contacts-form">
              <h4>Обратная связь</h4>
              <form class="form" action="#" onsubmit="return false">
                <div class="form-group">
                  <input class="form-control" name="name" placeholder="Ваше имя">
                  <div class="form-error"></div>
                </div>
                <div class="form-group">
                  <input class="form-control" name="email" placeholder="Ваш email">
                  <div class="form-error"></div>
                </div>
                <div class="form-group contacts-form-message">
                  <textarea class="form-control form-control-last" name="message" placeholder="Сообщение"></textarea>
                  <div class="form-error"></div>
                </div>
                <div class="form-action">
                  <button class="btn type-fill" type="submit">Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: "Contact.html"
}
</script>

<style scoped>
.mainClass {
  width: 70%;
  margin: 0 auto;
}

.widget-description {
  font-size: 20px;
  font-weight: 300;
}

.widget-title {
  font-family: Gotham, Verdana;
  font-size: 40px;
  font-weight: 400;
  text-transform: uppercase;
}

.contacts-left, .contacts-right {
  width: 47%;
}

section div .container {
  display: flex;
  justify-content: space-between;
}

.contacts-block h4 {
  margin: 0 0 10px;
  padding: 0;
  font-family: PF DinDisplay;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: .3px;
  text-transform: uppercase;
  color: #a6a6a6;
}

.support-phone-item, .support-email a {
  font-size: 28px;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  color: black;
}

.support-item {
  text-decoration: none;
  font-size: 20px;
  color: black;
}


.support-email a:hover {
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: color .2s;
  -moz-transition: color .2s;
  -ms-transition: color .2s;
  transition: color .2s;
  color: #f60;
}

.contacts-block {
  margin-bottom: 50px;
}

.supports {
  margin-top: 10px;
}

p a {
  color: #f60;
}

p a {
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: color .2s;
  -moz-transition: color .2s;
  -ms-transition: color .2s;
  transition: color .2s;
}


@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
html, body {
  margin: 0;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}

.headline {
  text-align: center;

}

.headline h1 {
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}


/* Helper class to divide the icons */
.social-margin {
  margin-right: 15px;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
}

.social-icon {
  margin-bottom: 15px;
  box-sizing: border-box;
  -moz-border-radius: 138px;
  -webkit-border-radius: 138px;
  border-radius: 138px;
  border: 5px solid;
  text-align: center;
  width: 50px;
  height: 50px;
  display: inline-block;
  line-height: 1px;
  padding-top: 11px;
  transition: all 0.5s;
}

.social-icon:hover {
  transform: rotate(360deg) scale(1.3);
}

/* Facebook Button Styling */
.facebook {
  font-size: 22px;
  padding-top: 9px;
  border-color: #3b5998;
  background-color: #3b5998;
  color: #ffffff;

}

.facebook:hover {
  background-color: #ffffff;
  color: #3b5998;
}

/* Twitter Button Styling */
.twitter {
  font-size: 22px;
  padding-top: 10px;
  padding-left: 2px;
  border-color: #55acee;
  background-color: #55acee;
  color: #ffffff;

}

.twitter:hover {
  background-color: #ffffff;
  color: #55acee;
}

/* Google+ Button Styling */
.google-plus {
  font-size: 22px;
  padding-top: 9px;
  padding-left: 2px;
  background-color: #dd4b39;
  color: #ffffff;
  border-color: #dd4b39;

}

.google-plus :hover {
  background-color: #ffffff;
  color: #dd4b39;
}

/* Linkedin Button Styling */
.linkedin {
  font-size: 24px;
  padding-top: 8px;
  padding-left: 1px;
  background-color: #0976b4;
  color: #ffffff;
  border-color: #0976b4;

}

.linkedin :hover {
  background-color: #ffffff;
  color: #0976b4;
}

/* Pinterest Button Styling */
.pinterest {
  font-size: 22px;
  padding-top: 9px;
  background-color: #cb2027;
  color: #ffffff;
  border-color: #cb2027;

}

.pinterest:hover {
  background-color: #ffffff;
  color: #cb2027;
}

/* Behance Button Styling */
.behance {
  font-size: 22px;
  padding-top: 9px;
  background-color: #1769ff;
  color: #ffffff;
  border-color: #1769ff;

}

.behance :hover {
  background-color: #ffffff;
  color: #1769ff;
}

/* Github Button Styling */
.github {
  font-size: 22px;
  padding-top: 9px;
  background-color: #4183c4;
  color: #ffffff;
  border-color: #4183c4;

}

.github:hover {
  background-color: #ffffff;
  color: #4183c4;
}

/* Youtube Button Styling */
.youtube {
  font-size: 22px;
  padding-top: 9px;
  padding-left: 0px;
  background-color: #bb0000;
  color: #ffffff;
  border-color: #bb0000;

}

.youtube :hover {
  background-color: #ffffff;
  color: #bb0000;
}

/* Soundcloud Button Styling */
.soundcloud {
  font-size: 22px;
  padding-top: 9px;
  padding-left: 0px;
  background-color: #ff3a00;
  color: #ffffff;
  border-color: #ff3a00;

}

.soundcloud :hover {
  background-color: #ffffff;
  color: #ff3a00;
}

.form-control {
  box-sizing: border-box;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 3px;
  width: 80%;
  height: 40px;
  background: #fff none;
  line-height: 20px;
  font-size: 16px;
  color: #333;
}

.form-control-last {
  width: 100%;
  height: 120px;
  resize: none;
}

.btn {
  background-color: #f60;
  color: white;
  user-select: none;
  box-sizing: border-box;
  display: inline-block;
  height: 40px;
  margin: 0;
  padding: 9px 23px 11px;
  border: 1px solid transparent;

}

@media only screen and (max-width: 850px) {
  .container {
    flex-direction: column;
  }

  .support-phone-item, .support-email a {
    font-size: 18px;
  }

  main {
    width: 90%;
  }

  .contacts-left, .contacts-right {
    width: 100%;
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