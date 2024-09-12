<script setup lang="ts">

  const router = useRouter()

  const currentVideoIndex = ref(0)
  const videoPlayer = ref<HTMLVideoElement | null>(null)

  const videos = [
    '/videos/main.mp4',
  ] 

  const youtubeIds = [
    {
      id:  'CA8XnL8Dz4c',
      ttl: 'みそる-ヒカル×バンから',
      tags: [
        'プロモーション',
      ],
      txt: 'みそる プロモーション動画',
    },
    {
      id:  'XKOw60Hr_hw',
      ttl: 'and group 2024 promotion video',
      tags: [
        'プロモーション',
      ],
      txt: '「&」高円寺店様 プロモーション映像',
    },
    {
      id:  'goetf6WsZRY',
      ttl: 'TEASOBI - チェリら',
      tags: [
        'MV',
      ],
      txt: 'TEASOBI様 ミュージックビデオ',
    },
    {
      id:  'HaeakAetO-o',
      ttl: 'ALBA LAB branding movie',
      tags: [
        'WEB広告',
      ],
      txt: 'ALBA LAB様 ブランディング動画',
    },
    {
      id:  'QqyAAPF6W44',
      ttl: '株式会社OBS staff interview',
      tags: [
        'インタビュー',
        'プロモーション',
      ],
      txt: '株式会社OBS様 インタビュー動画',
    },
    {
      id:  'JdXZCzTMaU8',
      ttl: '株式会社アーツ staff interview',
      tags: [
        'インタビュー',
        'プロモーション',
      ],
      txt: '株式会社アーツ様 会社紹介動画'
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
          Conveying emotions beyond visuals
        </h3>
        <h4 class="message_subLabel">
          視覚だけでない想いを届ける
        </h4>
        <div class="message_subTtl">
          <span>filux</span>は映画制作を志すチームです
        </div>
        <div class="message_cont">
          その為、誰よりも想い、表現、感情を大事にしています。<br>
          広告映像に加え、採用向け動画、ブランディング動画、WEBCM、PR動画、<br>
          SNS動画、インフォグラフィックス、エンタメコンテンツ、MV、ライブ撮影<br>
          など様々な映像を制作しています。<br><br>
          あらゆるジャンルの動画・映像制作にハイクオリティで対応させて頂きます。
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
            <div class="works_cont_card_txt">
              {{ card.txt }}
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
        <div class="why_cont">
          <h3 class="why_cont_label">
            Why
          </h3>
          <h4 class="why_cont_subLabel">
            何故動画を作るのか
          </h4>
          <div class="why_cont_exp">
            <div class="why_cont_exp_txt"> 
              動画制作は、視覚だけでは伝えきれない感情や<br>
              メッセージを効果的に届けるための強力なツールです。<br>
              視覚的な情報と音声が組み合わさることで、<br>
              文字や静止画では表現できない深い感動やインパクトを与えます。<br>
              また、動画は短時間で多くの情報を伝えることができ、<br>
              視聴者の心に残りやすい特徴があります。<br>
              ブランドのストーリーや製品の魅力をリアルに感じてもらうことで、<br>
              信頼性を高め、より強い共感を呼び起こすことができます。
            </div>
            <div class="why_cont_exp_img" />
          </div>
        </div>
      </div>
      <div class="sns">
      <div class="sns_cont">
        <h3 class="sns_cont_label">
          SNS Management
        </h3>
        <h4 class="sns_cont_subLabel">
          クリエイティブ<span>×</span>データ
        </h4>
        <div class="sns_cont_exp">
          <div class="sns_cont_exp_img" />
          <div class="sns_cont_exp_txt"> 
            クリエイティブなコンテンツ制作とデータに基づいた分析を融合させ、<br>
            効果的なSNS戦略を実現します。<br>
            魅力的なビジュアルやメッセージを発信するだけでなく、<br>
            ユーザーの反応や行動をデータで解析し、<br>
            最適なタイミングや方法でアプローチします。<br>
            これにより、単なる情報発信ではなく、ユーザーの心を動かし、<br>
            共感やアクションを促すことができるSNS運用を提供します。
          </div>
        </div>
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
              <div class="partner_cont_card_img_label">LINE Marketer</div>
            </div>
            <div class="partner_cont_card_txt">LINEマーケター</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <div class="partner_cont_card_img_label">HP Production</div>
            </div>
            <div class="partner_cont_card_txt">ホームページ制作</div>
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
      width: 660px;
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
          margin-top: 6px;
          padding: 0 10px;
          font-size: 1.8rem;
        }
        &_tags {
          margin-top: 12px;
          padding: 0 10px;
          display: flex;
          span {
            margin-right: 4px;
            padding: 6px 10px;
            font-size: 1.3rem;
            background-color: #d9d9d9;
          }
        }
        &_txt {
          margin: 12px 0 12px;
          padding: 0 10px;
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
    padding: 120px 0;
    width: 100%;
    text-align: center;
    &_cont {
      margin: 0 auto;
      width: 1200px;
      &_label {
        margin: 0 auto;
        padding-bottom: 4px;
        width: 80px;
        font-size: 4rem;
        border-bottom: 1px solid;
      }
      &_subLabel {
        margin-top: 12px;
        font-size: 2rem;
      }
      &_exp {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        &_txt {
          width: 50%;
          font-size: 1.7rem;
          line-height: 1.6;
          text-align: left;
        }
        &_img {
          border: 1px solid black;
          width: 500px;
          height: 260px;
          background-image: url('@/assets/img/why.jpeg');
          background-repeat: no-repeat;
          background-size: 600px, 220px;
        }
      }
    }
  }
  .sns {
    padding: 120px 0;
    width: 100%;
    text-align: center;
    background-color: black;
    color: white;
    &_cont {
      margin: 0 auto;
      width: 1200px;
      &_label {
        margin: 0 auto;
        padding-bottom: 4px;
        width: 330px;
        font-size: 4rem;
        border-bottom: 1px solid;
      }
      &_subLabel {
        font-size: 2.7rem;
        span {
          margin: 0 12px;
          font-size: 5rem;
        }
      }
      &_exp {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        &_txt {
          width: 50%;
          font-size: 1.7rem;
          line-height: 1.6;
          text-align: left;
        }
        &_img {
          border: 1px solid white;
          width: 500px;
          height: 260px;
          background-image: url('@/assets/img/management.jpeg');
          background-repeat: no-repeat;
          background-size: 600px, 220px;
        }
      }
    }
  }
  .partner {
    margin: 0 auto;
    padding: 120px 0 200px;
    width: 100%;
    text-align: center;
    &_label {
      margin: 0 auto;
      border-bottom: 1px solid;
      padding-bottom: 4px;
      width: 140px;
      text-align: center;
      font-size: 4rem;
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
            color: white;
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
            background-image: url('@/assets/img/casting.jpeg');
          }
        }
        &:nth-child(5) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/LINE.jpeg');
          }
        }
        &:nth-child(6) {
          .partner_cont_card_img {
            background-image: url('@/assets/img/HP.jpeg');
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