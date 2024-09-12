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
        'プロモーション',
      ],
      txt: '「&」高円寺店様 採用動画',
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
      id:  'IE8tfk0hZb8',
      ttl: 'RechaLu staff interview',
      tags: [
        'インタビュー',
        'プロモーション',
      ],
      txt: 'RechaLu様 採用動画',
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
    {
      id:  '6TqSqMUkrKA',
      ttl: '福耳会 branding movie',
      tags: [
        'インタビュー',
        'プロモーション',
      ],
      txt: '福耳会様 ブランディング動画'
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
      id:  'pAwtYrx3irw',
      ttl: '佐埜めるの - アイドル♥最強宣言',
      tags: [
        'MV',
      ],
      txt: '佐埜めるの様 ミュージックビデオ',
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
      id:  'goetf6WsZRY',
      ttl: 'TEASOBI - チェリら',
      tags: [
        'MV',
      ],
      txt: 'TEASOBI様 ミュージックビデオ',
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
      id:  'bkQ1dypUZaM',
      ttl: 'Hard Rock Cafe - THE TOMBOYS',
      tags: [
        'ライブ映像',
      ],
      txt: 'Hard Rock Cafe ライブ映像',
    },
  ]

  const categories = [
    'ALL',
    'インタビュー',
    'MV',
    'WEB広告',
    'プロモーション',
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
    {
      id:  'IE8tfk0hZb8',
      ttl: 'RechaLu staff interview',
      tags: [
        'インタビュー',
        'プロモーション',
      ],
      txt: 'RechaLu様 採用動画',
    },
    {
      id:  '6TqSqMUkrKA',
      ttl: '福耳会 branding movie',
      tags: [
        'インタビュー',
        'プロモーション',
      ],
      txt: '福耳会様 ブランディング動画'
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

</script>

<template>
  <div class="page">
    <div class="works">
      <h3 class="works_label">
        Works
      </h3>
      <div class="works_category">
        <div 
          v-for="(category, index) in categories" :key="index"
          class="works_category_item"
          :class="{ isActive: category === currentCategory }"
          @click="changeCategory(category)"
        >
          {{ category }}
        </div>
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
        SNS実績
      </h3>
      <div class="sns_cont">
        <iframe
          :src="'https://www.youtube.com/embed/4X6dx3lh9fk'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div class="sns_cont_wrapper"> 
          <div class="sns_cont_wrapper_ttl">
            〇〇者様 採用向けパーパスムービー
          </div>
          <div class="sns_cont_wrapper_txt">
            採用向け動画を制作し、採用数が5倍に増加や10人以上増えたといったお声も頂いております。
          </div>
        </div>
      </div>
      <div class="sns_cont">
        <iframe
          :src="'https://www.youtube.com/embed/4X6dx3lh9fk'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div class="sns_cont_wrapper"> 
          <div class="sns_cont_wrapper_ttl">
            〇〇者様 採用向けパーパスムービー
          </div>
          <div class="sns_cont_wrapper_txt">
            採用向け動画を制作し、採用数が5倍に増加や10人以上増えたといったお声も頂いております。
          </div>
        </div>
      </div>
      <div class="sns_cont">
        <iframe
          :src="'https://www.youtube.com/embed/4X6dx3lh9fk'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div class="sns_cont_wrapper"> 
          <div class="sns_cont_wrapper_ttl">
            〇〇者様 採用向けパーパスムービー
          </div>
          <div class="sns_cont_wrapper_txt">
            採用向け動画を制作し、採用数が5倍に増加や10人以上増えたといったお声も頂いております。
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
      width: 170px;
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