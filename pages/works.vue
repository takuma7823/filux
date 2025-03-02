<script lang="ts" setup>
  import { youtubeIds } from '~/utils/youtubeIds';

  definePageMeta({
    layout: false,
  })

  const router = useRouter()
  const currentCategory = ref('ALL')

  const categories = [
    'ALL',
    'インタビュー',
    'MV',
    'WEB広告',
    'プロモーション',
    '短編映画',
    'ライブ映像',
  ]

  const currentIds = ref<any>([])

  const changeCategory = (id: string) => {
    currentCategory.value = id
    if (id === currentCategory.value) {
      if (id === 'ALL') {
        currentIds.value = youtubeIds
      } else {
        const filteredYoutubeIds = youtubeIds.filter(item => item.tags.includes(id))
        currentIds.value = filteredYoutubeIds
      }
    }
  }

  const changeCategorySp = (event: Event) => {
    const target = event.target as HTMLSelectElement
    const selectedValue = target.value
    if (selectedValue === 'ALL') {
      currentIds.value = youtubeIds
    } else {
      const filteredYoutubeIds = youtubeIds.filter(item => item.tags.includes(selectedValue))
      currentIds.value = filteredYoutubeIds
    }
  }

  const getRandomIds = () => {
    const shuffled = youtubeIds.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    currentIds.value = shuffled.slice(0, 12);
  }

  const changePage = (id: string) => {
    router.push(id)
  }

  // NOTE: created
  getRandomIds()

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
          <li @click="changePage('/works')">
            ALL Works
          </li>
        </ul>
      </div>
    </header>
    <div class="works">
      <h3 class="works_label">
        Works
      </h3>
      <div class="works_category" data-device="pc">
        <div 
          v-for="(category, index) in categories" :key="index"
          class="works_category_item"
          :class="{ isActive: category === currentCategory }"
          @click="changeCategory(category)"
        >
          {{ category }}
        </div>
      </div>
      <div class="works_category" data-device="sp">
        <select name="categories" @change="changeCategorySp">
          <option disabled value="">選択してください</option>
          <option v-for="(category, index) in categories" :key="index" :value="category">
            {{ category }}
          </option>
        </select>
        <div class="works_category_icon">></div>
      </div>
      <div class="works_cont">
        <div 
          v-for="(card, index) in currentIds" :key="index"
          class="works_cont_wrapper"
        >
          <div class="works_cont_wrapper_card">
            <iframe
              :src="'https://www.youtube.com/embed/' + card.id"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="works_cont_wrapper_card_ttl">
              {{ card.ttl }}
            </div>
            <div class="works_cont_wrapper_card_tags">
              <div 
                v-for="(tag, index) in card.tags" :key="index"
                
              >
                <span>{{ tag }}</span>
              </div>
            </div>
            <div class="works_cont_wrapper_card_txt">{{ card.txt }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sns">
      <h3 class="sns_label">
        SNS事例紹介
      </h3>
      <div class="sns_cont">
        <iframe
          :src="'https://www.youtube.com/embed/8jz46UXKJew'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div class="sns_cont_wrapper"> 
          <div class="sns_cont_wrapper_ttl">
            「<span>HAIR & BEAUTY & </span>」高円寺店様<br data-device="sp">採用向け動画
          </div>
          <div class="sns_cont_wrapper_txt">
            採用向けのプロモーション動画を制作し、採用数が5倍に増加。<br>
            応募者が10人以上増えたといったお声も頂いております。
          </div>
        </div>
      </div>
      <div class="sns_cont">
        <div class="sns_cont_img1" />
        <div class="sns_cont_wrapper"> 
          <div class="sns_cont_wrapper_ttl">
            <span>Tik Tok</span>運用
          </div>
          <div class="sns_cont_wrapper_txt">
            ターゲットを明確にし制作する動画を企画することで再生数・リアクション数が増加。<br>
            投稿を重ねて得たデータを元に分析を重ねることでお客様の目標を達成することが可能となりました。
          </div>
        </div>
      </div>
      <div class="sns_cont">
        <div class="sns_cont_img2" />
        <div class="sns_cont_wrapper"> 
          <div class="sns_cont_wrapper_ttl">
            <span>Instagram</span>リール動画運用
          </div>
          <div class="sns_cont_wrapper_txt">
            クオリティの高いリール動画を制作、運用することで登録者1000人を達成。<br>
            リアクションの数・質が上がったというお声を頂いています。
          </div>
        </div>
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
    padding: 0 0 160px;
    width: 100%;
  }
  .works {
    margin: 0 auto;
    padding: 60px;
    width: 100%;
    background-color: black;
    color: white;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 120px;
      text-align: center;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_category {
      margin: 60px auto 0;
      width: 1200px;
      display: flex;
      &_item {
        margin-right: 12px;
        padding: 4px 8px;
        border: 1px solid;
        cursor: pointer;
      }
      .isActive {
        background-color: white;
        color: black;
      }
    }
    &_cont {
      margin: 20px auto 0;
      width: 1200px;
      display: flex;
      flex-wrap: wrap;
      &_wrapper {
        &:not(:nth-child(4n)) {
          .works_cont_wrapper_card {
            margin-right: 26.6px;
          }
        }
        &_card {
          margin-top: 40px;
          padding-bottom: 8px;
          background-color: white;
          color: black;
          cursor: pointer;
          iframe {
            width: 280px;
            height: 158px;
          }
          &_ttl {
            padding: 0 6px;
            font-size: 1.6rem;
            width: 280px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &_tags {
            margin-top: 2px;
            padding: 0 6px;
            display: flex;
            span {
              margin-right: 4px;
              padding: 6px 8px;
              font-size: 1rem;
              background-color: #d9d9d9;
            }
          }
          &_txt {
            margin-top: 8px;
            padding: 0 6px;
            font-size: 1.5rem;
            width: 280px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &:hover {
            box-shadow: 0 12px 24px rgba(255, 255, 255, 0.3);
            transform: translateY(-4px) scale(1.01);
            animation: floating 0.3s ease;
          }
        }
      }
    }
  }
  .sns {
    margin: 60px auto 120px;
    padding: 60px 0;
    width: 1200px;
    &_label {
      margin: 0 auto 40px;
      padding-bottom: 4px;
      width: 240px;
      text-align: center;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_cont {
      margin: 0 auto;
      border-bottom: 1px solid;
      padding: 40px 0;
      display: flex;
      justify-content: space-between;
      &_wrapper {
        width: 70%;
        text-align: left;
        &_ttl {
          margin-top: 12px;
          font-size: 2rem;
        }
        &_txt {
          margin-top: 12px;
        }
      }
      &_img1 {
        width: 300px;
        height: 120px;
        background-image: url('@/assets/img/tiktok.jpeg');
        background-repeat: no-repeat;
        background-size: 300px 120px;
      }
      &_img2 {
        width: 300px;
        height: 120px;
        background-image: url('@/assets/img/instagram.jpeg');
        background-repeat: no-repeat;
        background-size: 300px 120px;
      }
      span {
        font-weight: bold;
      }
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
  @keyframes floating {
    0% {
      transform: translateY(0) scale(1);
    }
    100% {
      transform: translateY(-4px) scale(1.01);
    }
  }
}

@include mq.sp {
  .page {
    width: 100%;
  }
  .works {
    margin: 0 auto;
    padding: 12vw 0;
    width: 100%;
    background-color: black;
    color: white;
    &_label {
      margin: 0 auto;
      padding-bottom: 1vw;
      width: 28vw;
      text-align: center;
      border-bottom: 1px solid;
      font-size: 3.6rem;
    }
    &_category {
      margin-top: 6vw;
      width: 36vw;
      position: relative;
      select {
        margin: 4vw 2.4vw 0;
        border: 1px solid white;
        padding: 2vw 0;
        padding-left: 2vw;
        width: 36vw;
        text-align: left;
        color: white;
        font-size: 1.4rem;
      }
      &_icon {
        color: white;
        font-size: 1.6rem;
        position: absolute;
        bottom: 1.4vw;
        right: -0.6vw;
      }
    }
    &_cont {
      margin: 6vw auto 0;
      padding: 0 2.4vw;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &_wrapper {
        &_card {
          margin-top: 2.4vw;
          width: 46.3vw;
          height: 71.8vw;
          background-color: white;
          color: black;
          iframe {
            width: 46.5vw;
            height: 40vw;
          }
          &_ttl {
            padding: 0 1vw;
            font-size: 1.5rem;
          }
          &_tags {
            margin-top: 1vw;
            padding: 0 1vw;
            span {
              padding: 1vw 2vw;
              font-size: 1.3rem;
              background-color: #d9d9d9;
            }
          }
          &_txt {
            margin: 1vw 0 2vw;
            padding: 0 1vw;
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  .sns {
    margin: 0 auto;
    padding: 12vw 0 20vw;
    width: 100%;
    background-color: black;
    color: white;
    &_label {
      margin: 0 auto;
      padding-bottom: 1vw;
      width: 38vw;
      text-align: center;
      border-bottom: 1px solid;
      font-size: 2.4rem;
    }
    &_cont {
      margin: 4vw auto;
      padding: 0 8vw;
      iframe {
        width: 100%;
        height: 46vw;
      }
      &_wrapper {
        padding: 6vw 0;
        border-bottom: 1px solid;
        &_ttl {
          font-size: 1.8rem;
          font-weight: bold;
        }
        &_txt {
          margin-top: 2vw;
        }
      }
      &_img1 {
        border: 1px solid white;
        width: 100%;
        height: 30vw;
        background-image: url('@/assets/img/tiktok.jpeg');
        background-repeat: no-repeat;
        background-size: 100% 30vw;
      }
      &_img2 {
        width: 100%;
        height: 36vw;
        background-image: url('@/assets/img/instagram.jpeg');
        background-repeat: no-repeat;
        background-size: 100% 36vw;
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
          position: relative;
          cursor: pointer;
          &:not(:first-child) {
            margin-left: 4vw;
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

</style>