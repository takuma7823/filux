<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  overlayCont: {
    type: Object,
    required: false
  }
})
const currentIndex = ref(0)
const isHovered = ref(false)
let interval

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// スライドショーを開始
const startSlideshow = () => {
  isHovered.value = true
  restartSlideshow(2000) // マウスオーバー時は2秒でスライド
}

// スライドショーを停止
const stopSlideshow = () => {
  isHovered.value = false
  restartSlideshow(3000) // 通常時は3秒でスライド
}

// インターバルを設定し直す
const restartSlideshow = (intervalTime) => {
  clearInterval(interval)
  interval = setInterval(nextSlide, intervalTime)
}

// 初回スライドショースタート（通常3秒）
onMounted(() => {
  restartSlideshow(3000)
})

// コンポーネントが破棄されるときにインターバルをクリア
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div 
    class="slider-container"
    @mouseenter="startSlideshow"
    @mouseleave="stopSlideshow"
  >
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :class="{ 'active': index === currentIndex, 'inactive': index !== currentIndex }"
      class="slide-image"
      loading="lazy"
    />

    <!-- マウスオーバー時に表示するオーバーレイ -->
    <div 
      v-if="overlayCont"
      class="overlay" 
      :class="{ 'show': isHovered }"
    >
      <div class="overlay-border"></div>
      <div class="overlay-text">
        <h2>{{ props.overlayCont.title }}</h2>
        <h2>- {{ props.overlayCont.mvTitle }} -</h2>
        <p v-if="props.overlayCont.artist">
          Artist Name「{{ props.overlayCont.artist }}」
        </p>
        <p v-if="props.overlayCont.director">Directed By {{ props.overlayCont.director }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .slider-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }

  .slide-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  .slide-image.active {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: "Times New Roman", serif;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .overlay-border {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    pointer-events: none;
  }

  /* テキスト */
  .overlay-text {
    text-align: center;
    font-size: 18px;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  /* マウスオーバー時の表示 */
  .overlay.show {
    opacity: 1;
  }

  .overlay.show .overlay-text {
    opacity: 1;
    transform: translateY(0);
  }
}

@include mq.sp {
  .slider-container {
    position: relative;
    width: 100%;
    height: 42vw;
    overflow: hidden;
  }

  .slide-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  .slide-image.active {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: "Times New Roman", serif;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .overlay-border {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    pointer-events: none;
  }

  /* テキスト */
  .overlay-text {
    text-align: center;
    font-size: 1rem;
    opacity: 1;
    transform: translateY(10px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  /* マウスオーバー時の表示 */
  .overlay.show {
    opacity: 0;
  }

  .overlay.show .overlay-text {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>