<script lang="ts" setup>
  const imageList = [
    [
      '/img/film/クローゼット/2.png',
      '/img/film/クローゼット/3.png',
      '/img/film/クローゼット/4.png',
      '/img/film/クローゼット/5.png',
      '/img/film/クローゼット/6.png',
      '/img/film/クローゼット/7.png',
      '/img/film/クローゼット/8.png',
      '/img/film/クローゼット/9.png',
      '/img/film/クローゼット/1.png',
    ],
    [
      '/img/film/pirateShip/1.png',
      '/img/film/pirateShip/2.png',
      '/img/film/pirateShip/3.png',
      '/img/film/pirateShip/4.png',
      '/img/film/pirateShip/5.png',
      '/img/film/pirateShip/6.png',
      '/img/film/pirateShip/7.png',
      '/img/film/pirateShip/8.png',
      '/img/film/pirateShip/9.png',
      '/img/film/pirateShip/10.png',
      '/img/film/pirateShip/11.png',
      '/img/film/pirateShip/12.png',
      
    ],
    [
      '/img/film/半透明/1.png',
      '/img/film/半透明/2.png',
      '/img/film/半透明/3.png',
      '/img/film/半透明/4.png',
      '/img/film/半透明/5.png',
      '/img/film/半透明/6.png',
      '/img/film/半透明/7.png',
      '/img/film/半透明/8.png',
      '/img/film/半透明/9.png',
      '/img/film/半透明/10.png',
    ],
    [
      '/img/film/&/1.png',
      '/img/film/&/2.png',
      '/img/film/&/3.png',
      '/img/film/&/4.png',
      '/img/film/&/5.png',
      '/img/film/&/6.png',
      '/img/film/&/7.png',
      '/img/film/&/8.png',
      '/img/film/&/9.png',
      '/img/film/&/10.png',
      '/img/film/&/11.png',
      '/img/film/&/12.png',
      '/img/film/&/13.png',
      '/img/film/&/14.png',
    ],
    [
      '/img/film/ステーション/1.png',
      '/img/film/ステーション/2.png',
      '/img/film/ステーション/3.png',
      '/img/film/ステーション/4.png',
      '/img/film/ステーション/5.png',
      '/img/film/ステーション/6.png',
      '/img/film/ステーション/7.png',
      '/img/film/ステーション/8.png',
      '/img/film/ステーション/9.png',
      '/img/film/ステーション/10.png',
      '/img/film/ステーション/11.png',
      '/img/film/ステーション/12.png',
      '/img/film/ステーション/13.png',
      '/img/film/ステーション/14.png',
      '/img/film/ステーション/15.png',
    ],
  ]

  const overlayList = [
    {
      title: 'Music Video',
      mvTitle: 'クローゼット',
      artist: 'dbs',
      director: 'Kohei Yamagami',
    },
    {
      title: 'Music Video',
      mvTitle: 'Pirate Ship',
      artist: 'nastylone',
      director: 'Kohei Yamagami',
    },
    {
      title: 'Music Video',
      mvTitle: '半透明',
      artist: 'ゲネラルパウぜ',
      director: 'Kohei Yamagami & Haruto Koduka',
    },
    {
      title: 'Promotion Video',
      mvTitle: '&',
      artist: '',
      director: 'Kohei Yamagami',
    },
    {
      title: 'Music Video',
      mvTitle: 'ステーション',
      artist: 'dbs',
      director: 'Kohei Yamagami',
    },
  ]
</script>

<template>
  <div>
    <div class="page">
      <div class="page_background"></div>
      <div class="page_cont">
        <div class="filmBlock">
          <div 
            class="filmBlock_cont"
            v-for="(images, index) in imageList" :key="index"
          >
            <Slider :images="images" :overlay-cont="overlayList[index]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/scss/variables' as va;
  @use '@/assets/scss/_mq.scss' as mq;

  @include mq.pc {
    .page {
      &_background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        background-color: black;
      }
      &_cont {
        padding-bottom: 100px;
      }
    }
  }

  @include mq.sp {
    .page {
      &_background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        background-color: black;
      }
      &_cont {
        padding-bottom: 20vw;
      }
    }
  }
</style>