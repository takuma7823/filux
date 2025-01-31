<script setup>

const isVisible = ref(true)
const isFading = ref(false)

onMounted(() => {
  setTimeout(() => {
    isFading.value = true
    setTimeout(() => {
      isVisible.value = false
    }, 1000)
  }, 3000)
})
</script>

<template>
  <div v-if="isVisible" class="loadingScreen" :class="{ fadeOut: isFading }">
    <span class="text">Filux</span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .loadingScreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 1s ease-out;
  }

  .fadeOut {
    opacity: 0;
  }

  .text {
    width: 0;
    opacity: 0;
    overflow: hidden;
    white-space: nowrap;
    color: black;
    animation: typing 0.5s steps(5) 1s forwards;
    font-family: 'Courier New', monospace;
    font-size: 4rem;
  }

  @keyframes typing {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 5ch;
      opacity: 1;
    }
  }
}

@include mq.sp {
  .loadingScreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 9999;
    transition: opacity 1s ease-out;
  }

  .fadeOut {
    opacity: 0;
  }

  .text {
    width: 0;
    opacity: 0;
    overflow: hidden;
    white-space: nowrap;
    color: black;
    animation: typing 0.5s steps(5) 1s forwards;
    font-family: 'Courier New', monospace;
    font-size: 2.5rem;
  }

  @keyframes typing {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 5ch;
      opacity: 1;
    }
  }
}

</style>
