<template>
  <div>
    <Header class="header"/>
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    z-index: 1000;
  }
</style>