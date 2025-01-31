<script lang="ts" setup>
  
  import { imageList } from '~/utils/imageList';
  import { overlayList } from '~/utils/overlayList';

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