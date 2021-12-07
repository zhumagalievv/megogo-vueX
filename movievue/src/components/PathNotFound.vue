<template>
  <div class="container">
    <img src="https://s5.vcdn.biz/static/44130411/page404-bg.jpg" alt="as">
    <div class="page404__block">
      <div class="page404__content">
        <h1 class="page404-title">Страница не найдена</h1>
        <p class="page404-description">
          Неправильно набран адрес или такой страницы не существует.
        </p>
        <button>Перейти на главную</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 650px;
  position: relative;
}
.container img{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.container .page404__block{
  z-index: 10;
}

.page404__content {
  width: 78%;
  margin: 0 auto;
}

.page404-title {
  margin-bottom: 15px;
  width: 556px;
  font-size: 40px;
  font-weight: 600;
  font-style: normal;
  color: #fff;
  text-transform: uppercase;
}

.page404-description {
  margin: 15px 0;
  width: 364px;
  line-height: 25px;
  font-size: 18px;
  color: #fff;
  color: rgba(255, 255, 255, .65);
}

.page404__content button {
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 45px;
  background-color: #f60;
  color: #fff;
  padding: 13px 32px 15px 32px;
  height: 50px;
  font-size: 18px;
}
</style>