<script setup lang="ts">

  import { imageList } from '~/utils/imageList';

  useHead({
    title: 'About | filux',
  })
  useSeoMeta({
    description: 'filuxについて。視覚だけでない想いを届ける映像制作チームです。',
    ogTitle: 'About | filux',
    ogDescription: 'filuxについて。視覚だけでない想いを届ける映像制作チームです。',
  })

  definePageMeta({
    layout: false,
  })

  const router = useRouter()

  const youtubeIds = [
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
      id:  'ouQwaAmkx2g',
      ttl: 'PIST6 promotion video',
      tags: [
        'プロモーション',
      ],
      txt: 'PIST6 プロモーション',
    },
    {
      id:  '0xP5TCvuo08',
      ttl: '短編映画「モテ気」',
      tags: [
        '短編映画',
      ],
      txt: 'U-NEXT公開短編映画',
    },
    {
      id:  'pAwtYrx3irw',
      ttl: '佐埜めるの - アイドル♥最強宣言',
      tags: [
        'MV',
      ],
      txt: '佐埜めるの様 ミュージックビデオ',
    },
    {
      id:  'JdXZCzTMaU8',
      ttl: '株式会社アーツ staff interview',
      tags: [
        'インタビュー',
      ],
      txt: '株式会社アーツ様 会社紹介動画'
    },
  ]

  const changePage = (id: string) => {
    router.push(id)
  }

  const getImages = computed(() => {
    const filteredImages = imageList.map(subArray => subArray.slice(0, -1)).flat();
    for (let i = filteredImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredImages[i], filteredImages[j]] = [filteredImages[j], filteredImages[i]];
    }

    return filteredImages.slice(0, 10);
  })

</script>

<template>
  <div class="page">
    <header class="header">
      <div class="header_cont">
        <div class="header_cont_left">
          <img class="header_cont_left_img" src="@/assets/img/logo2.webp" alt="filux" />
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
    <div class="page_cont">
      <Slider :images="getImages"/>
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
          その為、誰よりも想い、表現、<br data-device="sp">感情を大事にしています。<br data-device="sp"><br data-device="sp"><br data-device="pc">
          広告映像に加え、採用向け動画、ブランディング動画、WEBCM、PR動画、<br data-device="pc">
          SNS動画、インフォグラフィックス、エンタメコンテンツ、MV、ライブ撮影<br data-device="pc">
          など様々な映像を制作しています。<br data-device="sp"><br data-device="sp"><br data-device="pc"><br data-device="pc">
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
          <div class="why_cont_exp" data-device="pc">
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
            <img class="why_cont_exp_img" src="@/assets/img/why.webp" alt="何故動画を作るのか" loading="lazy" />
          </div>
          <div class="why_cont_img" data-device="sp">
            <img src="@/assets/img/why.webp" alt="何故動画を作るのか" loading="lazy" />
            <div class="why_cont_img_txt">
              動画制作は、視覚だけでは伝えきれない感情や<br>
              メッセージを効果的に届けるための<br>強力なツールです。<br><br>
              視覚的な情報と音声が組み合わさることで、<br>
              文字や静止画では表現できない深い感動や<br>インパクトを与えます。<br><br>
              また、動画は短時間で多くの情報を<br>伝えることができ、<br>
              視聴者の心に残りやすい特徴があります。<br><br>
              ブランドのストーリーや製品の魅力を<br>リアルに感じてもらうことで、<br>
              信頼性を高め、より強い共感を<br>呼び起こすことができます。
            </div>
          </div>
        </div>
      </div>
      <div class="sns">
        <div class="sns_cont">
          <h3 class="sns_cont_label" data-device="pc">
            SNS Management
          </h3>
          <h3 class="sns_cont_label" data-device="sp">
            Management
          </h3>
          <h4 class="sns_cont_subLabel">
            クリエイティブ<span>×</span>データ
          </h4>
          <div class="sns_cont_exp" data-device="pc">
            <img class="sns_cont_exp_img" src="@/assets/img/management.webp" alt="SNS Management" loading="lazy" />
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
          <div class="sns_cont_img" data-device="sp">
            <img src="@/assets/img/management.webp" alt="SNS Management" loading="lazy" />
            <div class="sns_cont_img_txt">
              クリエイティブなコンテンツ制作と<br>データに基づいた分析を融合させ、<br>
              効果的なSNS戦略を実現します。<br><br>
              魅力的なビジュアルやメッセージを<br>発信するだけでなく、<br>
              ユーザーの反応や行動をデータで解析し、<br>
              最適なタイミングや方法でアプローチします。<br><br>
              これにより、単なる情報発信ではなく、<br>ユーザーの心を動かし、<br>
              共感やアクションを促すことができる<br>SNS運用を提供します。
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
              <img src="@/assets/img/shooting.webp" alt="Shooting" loading="lazy" />
              <div class="partner_cont_card_img_label">Shooting</div>
            </div>
            <div class="partner_cont_card_txt">カメラ/ライティング/アシスタント</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <img src="@/assets/img/hairMake.webp" alt="Hair Make up/Stylist" loading="lazy" />
              <div class="partner_cont_card_img_label">Hair Make up/Stylist</div>
            </div>
            <div class="partner_cont_card_txt">ヘアメイク/スタイリスト</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <img src="@/assets/img/animater.webp" alt="Animation/Illustrator" loading="lazy" />
              <div class="partner_cont_card_img_label">Animation/Illustrator</div>
            </div>
            <div class="partner_cont_card_txt">アニメーション/イラストレーター</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <img src="@/assets/img/casting.webp" alt="Casting" loading="lazy" />
              <div class="partner_cont_card_img_label">Casting</div>
            </div>
            <div class="partner_cont_card_txt">キャスティング</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <img src="@/assets/img/LINE.webp" alt="LINE Marketer" loading="lazy" />
              <div class="partner_cont_card_img_label">LINE Marketer</div>
            </div>
            <div class="partner_cont_card_txt">LINEマーケター</div>
          </div>
          <div class="partner_cont_card">
            <div class="partner_cont_card_img">
              <img src="@/assets/img/HP.webp" alt="HP Production" loading="lazy" />
              <div class="partner_cont_card_img_label">HP Production</div>
            </div>
            <div class="partner_cont_card_txt">ホームページ制作</div>
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
          object-fit: cover;
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
          object-fit: cover;
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
          height: 190px;
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          &_label {
            margin: auto;
            position: absolute;
            top: 75px;
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
          font-size: 1.5rem;
        }
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
          object-fit: contain;
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
    &_cont {
      width: 100%;
      &_video {
        padding: 4vw 0;
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
    padding: 12vw 0;
    text-align: center;
    &_label {
      margin: 0 auto;
      padding-bottom: 1vw;
      width: 50vw;
      font-size: 2rem;
      border-bottom: 1px solid;
    }
    &_subLabel {
      margin-top: 2vw;
      font-size: 2rem;
    }
    &_subTtl {
      margin-top: 8vw;
      font-size: 1.8rem;
      span {
        font-size: 2.2rem;
      }
    }
    &_cont {
      margin-top: 2vw;
      padding: 0 2.4vw;
      font-size: 1.5rem;
      line-height: 1.6;
    }
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
    &_cont {
      margin: 4vw auto 0;
      padding: 0 2.4vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &_card {
        margin-top: 2.4vw;
        width: 46.3vw;
        height: 71.8vw;
        background-color: white;
        color: black;
        iframe {
          width: 46.5vw;
          height: 40vw;
          background-color: black;
        }
        &_ttl {
          padding: 0 1vw;
          font-size: 1.5rem;
        }
        &_tags {
          margin-top: 1vw;
          padding: 0 1vw;
          display: flex;
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
    &_btn {
      margin-top: 8vw;
      display: flex;
      justify-content: center;
      button {
        border: 1px solid;
        padding: 2vw 6vw;
        font-size: 1.6rem;
        color: white;
      }
    }
  }
  .why {
    padding: 12vw 0;
    width: 100%;
    text-align: center;
    background-color: black;
    color: white;
    &_cont {
      margin: 0 auto;
      &_label {
        margin: 0 auto;
        padding-bottom: 1vw;
        width: 22vw;
        font-size: 4rem;
        border-bottom: 1px solid;
        text-align: center;
      }
      &_subLabel {
        margin-top: 2vw;
        font-size: 2rem;
      }
      &_img {
        margin-top: 24vw;
        width: 100%;
        height: 80vw;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &_txt {
          padding: 0 2.4vw;
          width: 100%;
          font-size: 1.5rem;
          position: absolute;
          top: -14vw;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 1), -2px -2px 10px rgba(0, 0, 0, 1);
          
        }
      }
    }
  }
  .sns {
    padding: 12vw 0;
    width: 100%;
    text-align: center;
    background-color: black;
    color: white;
    text-align: center;
    &_cont {
      margin: 0 auto;
      &_label {
        margin: 0 auto;
        padding-bottom: 1vw;
        width: 62vw;
        font-size: 4rem;
        border-bottom: 1px solid;
        text-align: center;
      }
      &_subLabel {
        margin-top: -1vw;
        font-size: 2rem;
        span {
          font-size: 3rem;
        }
      }
      &_img {
        margin-top: 12vw;
        width: 100%;
        height: 80vw;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &_txt {
          padding: 0 2.4vw;
          width: 100%;
          font-size: 1.5rem;
          position: absolute;
          top: -4vw;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 1), -2px -2px 10px rgba(0, 0, 0, 1);
          
        }
      }
    }
  }
  .partner {
    padding: 12vw 0 10vw;
    text-align: center;
    &_label {
      margin: 0 auto;
      padding-bottom: 1vw;
      width: 34vw;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_cont {
      margin-top: 8vw;
      padding: 0 12vw;
      &_card {
        margin-top: 4vw;
        &_img {
          padding-top: 7.6vw;
          width: 100%;
          height: 24vw;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          &_label {
            position: relative;
            font-size: 2.4rem;
            color: white;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
        }
        &_txt {
          margin-top: 1vw;
        }
        &:nth-child(1) {
          margin-top: 0;
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
          object-fit: contain;
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