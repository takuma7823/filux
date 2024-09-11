<script lang="ts" setup>

  const currentCategory = ref('ALL')

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
  const categories = [
    'ALL',
    'エンタメ',
    'ポートレート',
    'ライブ撮影',
    'web広告',
    'パーパス',
  ]

  const currentIds = ref([
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
    color: black;
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
        background-color: black;
        color: white;
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
          background-color: white;
          color: black;
          iframe {
            width: 280px;
            height: 158px;
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