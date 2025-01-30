<script lang="ts" setup>

</script>
<template>
  <div class="page">
    <div class="page_background">
      <video
        ref="videoPlayer"
        autoplay muted playsinline loop
      >
        <source :src="'/videos/top.mp4'" type="video/mp4" />
      </video>
    </div>
    <div class="page_cont"></div>
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
      video {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: auto;
        min-width: 100%;
        min-height: 100%;
        transform: translate(-50%, -50%);
        object-fit: cover;
      }
    }
    &_cont {
      height: 1000px;
    }
  }
}

@include mq.sp {
  .page {
    &_background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      overflow: hidden;
      video {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 100vh;
        min-width: 100vw;
        min-height: 100vh;
        transform: translate(-50%, -50%);
        object-fit: cover;
      }
    }
    &_cont {
      height: 180vw;
    }
  }
}

</style>