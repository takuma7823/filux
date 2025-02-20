<script lang="ts" setup>
import { imageList } from '~/utils/imageList'
import { overlayList } from '~/utils/overlayList'

definePageMeta({
  layout: false,
})

const route = useRoute()
const router = useRouter()
const id = ref(route.params.id)

const changePage = (id: string) => {
  router.push(id)
}

const getTopImage = computed(() => {
  return imageList[Number(id.value)][0]
})

const getImages = computed(() => {
  const FilteredImages = imageList[Number(id.value)].slice(1)
  return FilteredImages
})

const getOverlayList = computed(() => {
  return overlayList[Number(id.value)]
})
</script>

<template>
  <div class="page">
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
        </ul>
      </div>
    </header>
    <div class="page_cont">
      <div class="page_cont_top">
        <img :src="getTopImage">
      </div>
      <div class="page_cont_label">
        <div class="page_cont_label_border">
          <h2>{{ getOverlayList.title }}</h2>
          <h2>- {{ getOverlayList.mvTitle }} -</h2>
          <p v-if="getOverlayList.artist">
            Artist Name「{{ getOverlayList.artist }}」
          </p>
          <p v-if="getOverlayList.director">Directed By {{ getOverlayList.director }}</p>
        </div>
      </div>
      <div class="page_cont_images">
        <div 
          v-for="(image, index) in getImages"
          :key="index"
          class="page_cont_images_image"
        >
          <img :src="image">
        </div>
      </div>
      <div v-if="getOverlayList.youtubeId" class="page_cont_youtube">
        <iframe 
          :src="'https://www.youtube.com/embed/' + getOverlayList.youtubeId"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <footer>
      <div class="copyright">
        &copy; 2024 Your Website. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .page {
    background-color: black;
    position: relative;
    &_cont {
      background-color: black;
      &_top {
        width: 100%;
        height: 450px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &_label {
        &_border {
          margin: 80px 60px;
          padding: 30px 0;
          border: 1px solid white;
          border-radius: 10px;
          color: white;
          font-family: "Times New Roman", serif;
          text-align: center;
          h2 {
            margin-top: 12px;
          }
          p {
            margin-top: 8px;
          }
        }
      }
      &_images {
        margin: 40px 0;
        &_image {
          margin: 0 auto;
          width: 70%;
          height: 380px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.3);
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
          }
          &:hover::after {
            opacity: 1;
          }
        }
      }
      &_youtube {
        margin: 80px auto;
        text-align: center;
        iframe {
          width: 960px;
          height: 720px;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0;
      animation: lightAnimation 0.5s ease-out forwards;
      z-index: 10;
    }
  }
  .header {
    width: 100%;
    height: 120px;
    background-color: black;
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
  .copyright {
    color: white;
    background-color: black;
    font-size: 1.6rem;
    padding: 20px 0;
    text-align: center;
  }
}

@include mq.sp {
  .page {
    background-color: black;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0;
      animation: lightAnimation 0.5s ease-out forwards;
      z-index: 10;
    }
    &_cont {
      margin-top: 5vw;
      background-color: black;
      &_top {
        width: 100%;
        height: 35vw;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &_label {
        &_border {
          margin: 6vw 3vw;
          padding: 3vw 0;
          border: 1px solid white;
          border-radius: 10px;
          color: white;
          font-family: "Times New Roman", serif;
          text-align: center;
          h2 {
            margin-top: 2vw;
            font-size: 1.2rem;
          }
          p {
            margin-top: 2vw;
            font-size: 1rem;
          }
        }
      }
      &_images {
        margin: 8vw 0;
        &_image {
          margin: 0 auto;
          width: 80%;
          height: 32vw;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      &_youtube {
        margin: 8vw auto;
        text-align: center;
        iframe {
          width: 80vw;
          height: 45vw;
        }
      }
    }
  }
  .header {
    width: 100vw;
    height: 15vw;
    background-color: black;
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
          margin-left: 8vw;
          position: relative;
          cursor: pointer;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 12vw;
            height: 1px;
            background-color: white;
          }
        }
      }
    }
  }
  .copyright {
    color: white;
    background-color: black;
    font-size: 1.2rem;
    padding: 10vw 0;
    text-align: center;
  }
}

@keyframes lightAnimation {
  0% {
    opacity: 1;
    background-color: white;
  }
  50% {
    opacity: 0.5;
    background-color: white;
  }
  100% {
    display: none;
    opacity: 0;
    background-color: white;
  }
}
</style>