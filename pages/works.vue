<script lang="ts" setup>

  const currentCategory = ref('ALL')

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
      id:  '8jz46UXKJew',
      ttl: 'HAIR & BEAUTY 「&」 staff interview',
      tags: [
        'インタビュー',
      ],
      txt: '「&」高円寺店様 採用動画',
    },
    {
      id:  '954r-e1Tmh0',
      ttl: '短編映画「創造者」',
      tags: [
        '短編映画',
      ],
      txt: '立川映画祭 立川市部門賞',
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
      id:  'QqyAAPF6W44',
      ttl: '株式会社OBS staff interview',
      tags: [
        'インタビュー',
      ],
      txt: '株式会社OBS様 インタビュー動画',
    },
    {
      id:  'goetf6WsZRY',
      ttl: 'TEASOBI - チェリら',
      tags: [
        'MV',
      ],
      txt: 'TEASOBI様 ミュージックビデオ',
    },
    // {
    //   id:  'pAwtYrx3irw',
    //   ttl: '佐埜めるの - アイドル♥最強宣言',
    //   tags: [
    //     'MV',
    //   ],
    //   txt: '佐埜めるの様 ミュージックビデオ',
    // },
    {
      id:  'Yt6tY68Ngow',
      ttl: 'GENN - ME',
      tags: [
        'MV',
      ],
      txt: 'GENN様 ミュージックビデオ',
    },
    {
      id:  'OmHcVUe3BPA',
      ttl: 'SonSon, GENN - Limit!!',
      tags: [
        'MV',
      ],
      txt: 'SonSon, GENN様 ミュージックビデオ',
    },
    {
      id:  'yN2wNOW6Zuk',
      ttl: 'aimmé - monochrome',
      tags: [
        'MV',
      ],
      txt: 'aimmé様 ミュージックビデオ',
    },
    {
      id:  'XRikXbMGFUM',
      ttl: 'DINGO - Meaning',
      tags: [
        'MV',
      ],
      txt: 'DINGO様 ミュージックビデオ',
    },
    {
      id:  'IE8tfk0hZb8',
      ttl: 'RechaLu staff interview',
      tags: [
        'インタビュー',
      ],
      txt: 'RechaLu様 採用動画',
    },
    {
      id:  'JdXZCzTMaU8',
      ttl: '株式会社アーツ staff interview',
      tags: [
        'インタビュー',
      ],
      txt: '株式会社アーツ様 会社紹介動画'
    },
    {
      id:  '6TqSqMUkrKA',
      ttl: '福耳会 branding movie',
      tags: [
        'インタビュー',
      ],
      txt: '福耳会様 ブランディング動画'
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
      id:  'fCJGaM2bEYo',
      ttl: 'WPT OSAKA 2024 FINAL MOVIE',
      tags: [
        'プロモーション',
      ],
      txt: 'WPT OSAKA 2024 ブランディング動画'
    },
    {
      id:  'PD4RXaITnkw',
      ttl: 'TEASOBI - HIMAWARI',
      tags: [
        'MV',
      ],
      txt: 'TEASOBI様 ミュージックビデオ',
    },
    {
      id:  'bF67xSLct2c',
      ttl: 'Yvng Patra - 4 MY CUL',
      tags: [
        'MV',
      ],
      txt: 'Yvng Patra様 ミュージックビデオ',
    },
    {
      id:  'eBe8rzL9NWs',
      ttl: '「GOEN」アプリ ',
      tags: [
        'WEB広告',
      ],
      txt: 'ZEN Integration様 WEB広告',
    },
    {
      id:  'mJy9bvx0Tag',
      ttl: 'RIU DOMURA - SECOND SCENE',
      tags: [
        'MV',
      ],
      txt: 'RIU DOMURA様 ミュージックビデオ',
    },
    {
      id:  'YifSfQm1UVs',
      ttl: 'S.I. - 幸せのカタチ',
      tags: [
        'MV',
      ],
      txt: 'S.I.様 ミュージックビデオ',
    },
    {
      id:  '0jeXFUc-0Qk',
      ttl: 'RechaLu branding movie',
      tags: [
        'プロモーション',
      ],
      txt: 'RechaLu様 ブランディング動画',
    },
    {
      id:  '5Oem7annHVk',
      ttl: 'Growth Cup Kanagawa U-15 2023',
      tags: [
        'プロモーション',
      ],
      txt: 'Growth Cup Kanagawa ブランディング動画',
    },
    {
      id:  'TZRk3RRiaVg',
      ttl: '【家族で使える！全身用保湿クリーム】アベンヌ トリクセラNT フルイドシリーズで、乾燥に負けない肌を育む',
      tags: [
        'WEB広告',
      ],
      txt: 'AveneJapan様 WEB広告',
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
      id:  'b84rf8kS2PM',
      ttl: 'ハイエナカー - とけないハート',
      tags: [
        'MV',
      ],
      txt: 'ハイエナカー様 ミュージックビデオ',
    },
    {
      id:  'Atms_4iNaGc',
      ttl: 'Hard Rock Cafe - THE TOMBOYS',
      tags: [
        'ライブ映像',
      ],
      txt: 'Hard Rock Cafe ライブ映像',
    },
    {
      id:  'gxsqizlOAls',
      ttl: 'dbs - 星',
      tags: [
        'MV',
      ],
      txt: 'dbs様 ミュージックビデオ',
    },
    {
      id:  'weCqAog5FBs',
      ttl: 'dbs - クローゼット',
      tags: [
        'MV',
      ],
      txt: 'dbs様 ミュージックビデオ',
    },
    {
      id:  '7SMxP0rP1QE',
      ttl: '農家の台所 みのすけ interview',
      tags: [
        'インタビュー',
      ],
      txt: '農家の台所 みのすけ様 インタビュー',
    },
    {
      id:  'odd9M6iXDOw',
      ttl: 'めがね製作所カフェ藍丸 interview',
      tags: [
        'インタビュー',
      ],
      txt: 'めがね製作所カフェ藍丸様 インタビュー',
    },
    {
      id:  'qH8RBepihrg',
      ttl: 'and group 2024 making video',
      tags: [
        'プロモーション',
      ],
      txt: '「&」グループ様 メイキング',
    },
  ]

  const categories = [
    'ALL',
    'インタビュー',
    'MV',
    'WEB広告',
    'プロモーション',
    '短編映画',
    'ライブ映像',
  ]

  const currentIds = ref([
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
      id:  'ouQwaAmkx2g',
      ttl: 'PIST6 promotion video',
      tags: [
        'プロモーション',
      ],
      txt: 'PIST6 プロモーション',
    },
    // {
    //   id:  'pAwtYrx3irw',
    //   ttl: '佐埜めるの - アイドル♥最強宣言',
    //   tags: [
    //     'MV',
    //   ],
    //   txt: '佐埜めるの様 ミュージックビデオ',
    // },
    {
      id:  '0xP5TCvuo08',
      ttl: '短編映画「モテ気」',
      tags: [
        '短編映画',
      ],
      txt: 'U-NEXT公開短編映画',
    },
    {
      id:  'IE8tfk0hZb8',
      ttl: 'RechaLu staff interview',
      tags: [
        'インタビュー',
      ],
      txt: 'RechaLu様 採用動画',
    },
    {
      id:  '6TqSqMUkrKA',
      ttl: '福耳会 branding movie',
      tags: [
        'インタビュー',
      ],
      txt: '福耳会様 ブランディング動画'
    },
    {
      id:  'PD4RXaITnkw',
      ttl: 'TEASOBI - HIMAWARI',
      tags: [
        'MV',
      ],
      txt: 'TEASOBI様 ミュージックビデオ',
    },
    {
      id:  'bF67xSLct2c',
      ttl: 'Yvng Patra - 4 MY CUL',
      tags: [
        'MV',
      ],
      txt: 'Yvng Patra様 ミュージックビデオ',
    },
    {
      id:  'eBe8rzL9NWs',
      ttl: '「GOEN」アプリ ',
      tags: [
        'WEB広告',
      ],
      txt: 'ZEN Integration様 WEB広告',
    },
    {
      id:  'OmHcVUe3BPA',
      ttl: 'SonSon, GENN - Limit!!',
      tags: [
        'MV',
      ],
      txt: 'SonSon, GENN様 ミュージックビデオ',
    },
  ])

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

</script>

<template>
  <div class="page">
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
    padding-top: 18vw;
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
}

</style>