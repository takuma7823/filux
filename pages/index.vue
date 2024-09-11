<script setup lang="ts">

  const router = useRouter()

  const currentVideoIndex = ref(0)
  const videoPlayer = ref<HTMLVideoElement | null>(null)

  const videos = [
    '/videos/white.mp4',
    '/videos/interview.mp4',
  ] 

  const youtubeIds = [
    {
      id:  '4X6dx3lh9fk',
      ttl: '白ホリ Portrait Movie',
      tags: [
        'エンタメ',
        'ポートレート'
      ]
    },
    {
      id:  'bvJ7MVv7jRg',
      ttl: 'Hard Rock Cafe ライブ撮影',
      tags: [
        'エンタメ',
        'ライブ撮影'
      ]
    },
    {
      id:  'COpXo1bDXug',
      ttl: 'Tokyo Station Portrait Movie',
      tags: [
        'エンタメ',
        'ポートレート'
      ]
    },
    {
      id:  '/EPeyiZwET3E',
      ttl: 'Japan Hot Cocktail Fair',
      tags: [
        'エンタメ',
        'web広告'
      ]
    },
    {
      id:  'R8udefSc_-c',
      ttl: '春音楽祭',
      tags: [
        'エンタメ',
      ]
    },
    {
      id:  'Fa4jXd8ZkhA',
      ttl: 'Tokyo Station Portrait Movie',
      tags: [
        'エンタメ',
        'パーパス'
      ]
    },
  ]

  const playNextVideo = () => {
    currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length
    if (videoPlayer.value !== null) {
      videoPlayer.value.load()
      videoPlayer.value.play()
    }
    
  }

  const changePage = (id: string) => {
    router.push(id)
  }

</script>

<template>
  <div class="page">
    <div class="page_cont">
      <div class="page_cont_video">
        <video
          ref="videoPlayer"
          @ended="playNextVideo"
          autoplay muted
        >
          <source :src="videos[currentVideoIndex]" type="video/mp4" />
        </video>
      </div>
      <div class="message">
        <h3 class="message_label">
          All in One Production
        </h3>
        <h4 class="message_subLabel">
          コトバ以上の想いをカタチに
        </h4>
        <div class="message_subTtl">
          年間<span>1,000</span>本以上の映像を制作しています
        </div>
        <div class="message_cont">
          VECKSは、プロの映像クリエイターが多数所属する動画・映像制作会社です。<br>
          CM、PR動画、番組、SNS動画、エンタメコンテンツ、オフィシャル撮影、配信サービスなど様々な映像を制作しています。<br>
          あらゆるジャンルの動画・映像制作にハイクオリティ、ローコストで対応。<br>
          また、ベクトルグループのシナジーを活用して「つくっただけで終わらせない」、運用のお手伝いも行っています。
        </div>
      </div>
      <div class="works">
        <h3 class="works_label">
          Works
        </h3>
        <div class="works_cont">
          <div 
            v-for="card in youtubeIds" :key="card.id"
            class="works_cont_card"
          >
            <iframe
              :src="'https://www.youtube.com/embed/' + card.id"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="works_cont_card_ttl">
              {{ card.ttl }}
            </div>
            <div class="works_cont_card_tags">
              <div 
                v-for="(tag, index) in card.tags" :key="index"
                
              >
                <span>{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="works_btn">
          <button @click="changePage('works')">
            View ALL >>
          </button>
        </div>
      </div>
      <div class="why">
        <h3 class="why_label">
          Why
        </h3>
        <h4 class="why_subLabel">
          何故動画を作るのか
        </h4>
        <div class="why_cont">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
          テキストテキストテキストテキストテキストテキストテキステキストテキストテキストテキスト明テキストテキストテキストテキスト<br>
          テキストテキストテキストテキストテキストテキストテキストテキストテストテキストテキストテキストテキストテキストテキストテキスト説<br>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
      </div>
      <div class="partner">
        <h3 class="partner_label">
          Partner
        </h3>
        <div class="partner_cont">
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">Shooting Assistant</div>
            </div>
            <div class="partner_cont_card_txt">撮影アシスタント</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">Hair Make up/Stylist</div>
            </div>
            <div class="partner_cont_card_txt">ヘアメイク・スタイリスト</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">Animation/Illustrator</div>
            </div>
            <div class="partner_cont_card_txt">アニメーション/イラストレーター</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">Casting</div>
            </div>
            <div class="partner_cont_card_txt">キャスティング</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">Shooting Assistant</div>
            </div>
            <div class="partner_cont_card_txt">撮影アシスタント</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">Shooting Assistant</div>
            </div>
            <div class="partner_cont_card_txt">撮影アシスタント</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  .page {
    padding-top: 71px;
    width: 100%;
    &_cont {
      width: 100%;
      &_video {
        padding: 71px 0;
        background-color: black;
        video {
          margin: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .message {
    padding: 120px 0;
    text-align: center;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 400px;
      font-size: 4.2rem;
      border-bottom: 1px solid;
    }
    &_subLabel {
      margin-top: 12px;
      font-size: 2.4rem;
    }
    &_subTtl {
      margin-top: 36px;
      font-size: 1.8rem;
      span {
        font-size: 3rem;
      }
    }
    &_cont {
      margin-top: 12px;
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
  .works {
    margin: 0 auto;
    padding: 120px 0;
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
    &_cont {
      margin: 20px auto 0;
      width: 1200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &_card {
        margin-top: 40px;
        background-color: white;
        color: black;
        iframe {
          width: 364px;
          height: 205px;
        }
        &_ttl {
          padding: 6px;
          font-size: 1.8rem;
        }
        &_tags {
          padding: 6px 6px 16px;
          display: flex;
          span {
            margin-right: 4px;
            padding: 6px 19px;
            font-size: 1.3rem;
            background-color: #d9d9d9;
          }
        }
        &:hover {
          box-shadow: 0 12px 24px rgba(255, 255, 255, 0.2);
          transform: translateY(-4px) scale(1.01);
          animation: floating 0.3s ease;
        }
      }
    }
    &_btn {
      margin-top: 70px;
      display: flex;
      justify-content: center;
      button {
        border: 1px solid;
        padding: 8px 24px;
        font-size: 1.8rem;
        color: white;
      }
    }
  }
  .why {
    margin: 0 auto;
    padding: 120px 0;
    width: 1240px;
    text-align: center;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 100px;
      text-align: center;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_subLabel {
      margin-top: 12px;
      font-size: 2.4rem;
    }
    &_cont {
      margin-top: 12px;
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }
  .partner {
    margin: 0 auto;
    padding: 120px 0 200px;
    width: 100%;
    background-color: black;
    text-align: center;
    color: white;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 140px;
      text-align: center;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_cont {
      margin: 20px auto 0;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &_card {
        margin-top: 30px;
        &_img {
          border-radius: 8px;
          width: 364px;
          height: 140px;
          background-repeat: no-repeat;
          background-size: 364px, 140px;
          position: relative;
          &_label {
            margin: auto;
            position: absolute;
            top: 55px;
            right: 0;
            bottom: 0;
            left: 0;
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          }
        }
        &_txt {
          margin-top: 8px;
          text-align: left;
          font-size: 1.4rem;
        }
        &:nth-child(1) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/shooting.jpeg');
          }
        }
        &:nth-child(2) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/hairMake.jpeg');
          }
        }
        &:nth-child(3) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/animater.jpeg');
          }
        }
        &:nth-child(4) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/shooting.jpeg');
          }
        }
        &:nth-child(5) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/hairMake.jpeg');
          }
        }
        &:nth-child(6) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/animater.jpeg');
          }
        }
      }
    }
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

</style>