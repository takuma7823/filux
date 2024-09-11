<script lang="ts" setup>

  const router = useRouter()

  const changePage = (id: string) => {
    router.push(id)
  }

</script>

<template>
  <header class="header">
    <div class="header_cont">
      <div class="header_cont_left">
        <div class="header_cont_left_img" />
      </div>
      <ul class="header_cont_right">
        <li @click="changePage('/')">
          Home
        </li>
        <li @click="changePage('/works')">
          Works
        </li>
        <li @click="changePage('/services')">
          Services
        </li>
        <li @click="changePage('/contact')">
          Contact
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .header {
    border-bottom: 1px solid;
    width: 100%;
    height: 71px;
    background-color: white;
    &_cont {
      margin: 0 auto;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      &_left {
        &_img {
          width: 212px;
          height: 71px;
          background-image: url('@/assets/img/logo.jpg');
          background-repeat: no-repeat;
          background-size: 140px, 36px;
        }
      }
      &_right {
        width: 60%;
        font-size: 1.8rem;
        display: flex;
        justify-content: right;
        align-items: center;
        li {
          margin-right: 40px;
          position: relative;
          cursor: pointer;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: black;
            transition: width 0.3s ease;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
}

</style>