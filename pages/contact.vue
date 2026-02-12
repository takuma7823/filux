<template>
  <div class="page">
    contact
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contact | filux',
})
useSeoMeta({
  description: 'filuxへのお問い合わせ。映像制作のご依頼・ご相談はこちらから。',
  ogTitle: 'Contact | filux',
  ogDescription: 'filuxへのお問い合わせ。映像制作のご依頼・ご相談はこちらから。',
})
</script>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .page {
    padding-top: 71px;
    width: 100%;
  }
}

</style>