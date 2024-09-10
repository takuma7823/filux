<script setup lang="ts">

  const currentVideoIndex = ref(0)
  const videoPlayer = ref<HTMLVideoElement | null>(null)
  const youtubeEmbedUrl = ref('https://www.youtube.com/embed/4X6dx3lh9fk')

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
          <button>
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
    padding: 50px;
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
    padding: 40px;
    width: 1240px;
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
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
          transform: translateY(-4px) scale(1.01);
          animation: floating 0.3s ease;
        }
      }
    }
    &_btn {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      button {
        border: 1px solid;
        padding: 8px 24px;
        font-size: 1.8rem;
      }
    }
  }
  .why {
    margin: 0 auto;
    padding: 40px 0 120px;
    width: 1240px;
    text-align: center;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 120px;
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