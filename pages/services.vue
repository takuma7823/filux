<script lang="ts" setup>

</script>

<template>
  <div class="page">
    <div class="services">
      <h3 class="services_label">
        One-stop video creation
      </h3>
      <h4 class="services_subLabel">
        企画から制作までワンストップで
      </h4>
      <ul class="services_icon">
        <li class="services_icon_item">
          <div class="border">
            <div class="services_icon_item_label">Hearing</div>
            <div class="services_icon_item_subLabel">ヒアリング</div>
          </div>
        </li>
        <li class="services_icon_item">
          <div class="border">
            <div class="services_icon_item_label">Proposal</div>
            <div class="services_icon_item_subLabel">企画</div>
          </div>
        </li>
        <li class="services_icon_item">
          <div class="border">
            <div class="services_icon_item_label">Shooting</div>
            <div class="services_icon_item_subLabel">撮影</div>
          </div>
        </li>
        <li class="services_icon_item">
          <div class="border">
            <div class="services_icon_item_label">Edit</div>
            <div class="services_icon_item_subLabel">編集</div>
          </div>
        </li>
      </ul>
      <div class="services_txt">
        filuxは企画から撮影編集まで、ワンストップで提供し<br>
        お客様のご要望を実現します
      </div>
    </div>
    <div class="hearing">
      <div class="hearing_cont">
        <h3 class="hearing_cont_label">
          hearing
        </h3>
        <h4 class="hearing_cont_subLabel">
          ヒアリング
        </h4>
        <div class="hearing_cont_exp">
          <div class="hearing_cont_exp_txt"> 
            まずお客様との丁寧なヒアリングを行い、<br>
            ニーズや目的をしっかりと把握します。<br>
            動画を制作する目的やターゲットとなる視聴者、<br>
            伝えたいメッセージを詳しく伺い、お客様のビジョンを共有します。<br>
            どんな些細な要望でも気軽にお伝えいただける環境を整えており、<br>
            コミュニケーションを通じて、<br>
            理想の動画を形にするための土台を築きます。
          </div>
          <div class="hearing_cont_exp_img" />
        </div>
      </div>
    </div>
    <div class="proposal">
      <div class="proposal_cont">
        <h3 class="proposal_cont_label">
          Proposal
        </h3>
        <h4 class="proposal_cont_subLabel">
          企画
        </h4>
        <div class="proposal_cont_exp">
          <div class="proposal_cont_exp_img" />
          <div class="proposal_cont_exp_txt"> 
            ヒアリングで得た情報をもとに、具体的な企画を立案します。<br>
            お客様の目的やターゲットに合わせたストーリー構成、演出、<br>
            ロケーションなど、映像のコンセプトを<br>
            しっかりと企画段階で固めます。<br>
            単に見栄えの良い動画ではなく、視聴者に響く内容を追求し、<br>
            コンバージョンやブランディングの向上に<br>
            貢献するプランを提案します。<br>
            企画段階でしっかりと戦略を立てることで、<br>
            納得のいく仕上がりを実現します。
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
  .services {
    margin: 0 auto;
    padding: 60px;
    width: 100%;
    color: black;
    &_label {
      margin: 0 auto;
      padding-bottom: 4px;
      width: 420px;
      text-align: center;
      font-size: 4rem;
      border-bottom: 1px solid;
    }
    &_subLabel {
      margin-top: 12px;
      font-size: 2.4rem;
      text-align: center;
    }
    &_txt {
      margin-top: 36px;
      text-align: center;
      font-size: 1.8rem;
      line-height: 1.6;
    }
    &_icon {
      margin: 60px auto;
      width: 1200px;
      display: flex;
      &_item {
        border: 1px solid;
        padding: 6px;
        width: 280px;
        height: 230px;
        text-align: center;
        &:not(:nth-child(4n)) {
          margin-right: 26.6px;
        }
        &_label {
          margin-top: 70px;
          font-size: 2.6rem;
        }
        &_subLabel {
          margin-top: 12px;
          font-size: 1.8rem;
        }
      }
    }
  }
  .hearing {
    padding: 120px 0;
    width: 100%;
    background-color: black;
    color: white;
    &_cont {
      margin: 0 auto;
      width: 1200px;
      &_label {
        padding-bottom: 4px;
        width: 140px;
        font-size: 4rem;
        border-bottom: 1px solid;
      }
      &_subLabel {
        margin-top: 12px;
        font-size: 2rem;
      }
      &_exp {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        &_txt {
          width: 50%;
          line-height: 1.6;
          font-size: 1.8rem;
        }
        &_img {
          border: 1px solid white;
          width: 500px;
          height: 260px;
          background-image: url('@/assets/img/hearing.jpeg');
          background-repeat: no-repeat;
          background-size: 600px, 220px;
        }
      }
    }
  }
  .proposal {
    padding: 120px 0;
    width: 100%;
    &_cont {
      margin: 0 auto;
      width: 1200px;
      &_label {
        padding-bottom: 4px;
        width: 155px;
        font-size: 4rem;
        border-bottom: 1px solid;
      }
      &_subLabel {
        margin-top: 12px;
        font-size: 2rem;
      }
      &_exp {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        &_txt {
          width: 50%;
          line-height: 1.6;
          font-size: 1.8rem;
          text-align: left;
        }
        &_img {
          border: 1px solid black;
          width: 500px;
          height: 260px;
          background-image: url('@/assets/img/proposal.jpeg');
          background-repeat: no-repeat;
          background-size: 600px, 220px;
        }
      }
    }
  }
  .border {
    border: 1px solid;
    width: 100%;
    height: 100%;
  }
}

</style>