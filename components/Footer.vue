<template>
    <footer>
      <div class="copyright">
        &copy; 2024 Your Website. All Rights Reserved.
      </div>
    </footer>
  </template>
  
  <style lang="scss" scoped>
  
  @use '@/assets/scss/variables' as va;
  @use '@/assets/scss/_mq.scss' as mq;
  
  @include mq.pc {
    .copyright {
      color: white;
      font-size: 1.6rem;
      padding-bottom: 20px;
      text-align: center;
    }
  }
  
  </style>