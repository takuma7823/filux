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
        <li @click="changePage('/film')">
          Film
        </li>
        <li @click="changePage('/index2')">
          About
        </li>
        <li @click="changePage('/works')">
          ALL Works
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
    width: 100%;
    height: 120px;
    background-color: transparent;
    &_cont {
      margin-top: 0;
      margin-left: 20px;
      width: 80%;
      display: flex;
      justify-content: space-between;
      &_left {
        &_img {
          width: 280px;
          height: 120px;
          background-image: url('@/assets/img/logo2.png');
          background-repeat: no-repeat;
          background-size: 280px, 120px;
        }
      }
      &_right {
        font-size: 2.2rem;
        display: flex;
        justify-content: right;
        align-items: center;
        color: white;
        li {
          margin-left: 120px;
          position: relative;
          cursor: pointer;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 280px;
            height: 1px;
            background-color: white;
            // transition: width 0.3s ease;
          }
          // &:hover::after {
          //   width: 100%;
          // }
        }
      }
    }
  }
}

@include mq.sp {
  .header {
    width: 100vw;
    height: 15vw;
    background-color: transparent;
    &_cont {
      width: 90vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_left {
        &_img {
          width: 40vw;
          height: 15vw;
          background-image: url('@/assets/img/logo2.png');
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
      &_right {
        font-size: 1.2rem;
        display: flex;
        justify-content: right;
        align-items: center;
        color: white;
        li {
          position: relative;
          cursor: pointer;
          &:not(:first-child) {
            margin-left: 4vw;
          }
        }
      }
    }
  }
}

</style>