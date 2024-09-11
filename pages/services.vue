<script lang="ts" setup>

</script>

<template>
  <div class="page">
    <div class="services">
      <h3 class="services_label">
        One-stop video creation
      </h3>
      <h4 class="services_subLabel">
        企画から制作までワンストップで
      </h4>
      <ul class="services_icon">
        <li class="services_icon_item">
          <div class="services_icon_item_label">ヒアリング</div>
          <div class="services_icon_item_subLabel">Hearing</div>
        </li>
        <li class="services_icon_item">
          <div class="services_icon_item_label">企画</div>
          <div class="services_icon_item_subLabel">Proposal</div>
        </li>
        <li class="services_icon_item">
          <div class="services_icon_item_label">撮影</div>
          <div class="services_icon_item_subLabel">Shooting</div>
        </li>
        <li class="services_icon_item">
          <div class="services_icon_item_label">編集</div>
          <div class="services_icon_item_subLabel">Edit</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .page {
    padding: 71px 0 160px;
    width: 100%;
  }
  .services {
    margin: 0 auto;
    padding: 60px;
    width: 100%;
    color: black;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 420px;
      text-align: center;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_subLabel {
      margin-top: 12px;
      font-size: 2.4rem;
      text-align: center;
    }
  }
}

</style>