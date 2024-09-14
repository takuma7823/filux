<template>
  <footer>
    <div class="footer-container">
      <!-- <ul>
        <li><a href="#">ホーム</a></li>
        <li><a href="#">サービス</a></li>
        <li><a href="#">お問い合わせ</a></li>
        <li><a href="#">プライバシーポリシー</a></li>
      </ul> -->

      <div class="social-icons">
        <a href="#" title="Facebook">F</a>
        <a href="#" title="Twitter">T</a>
        <a href="#" title="Instagram">I</a>
      </div>
    </div>

    <div class="copyright">
      &copy; 2024 Your Website. All Rights Reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@use '@/assets/scss/variables' as va;
@use '@/assets/scss/_mq.scss' as mq;

@include mq.pc {
  footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }

  footer .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: right;
    flex-wrap: wrap;
  }

  footer .footer-container ul {
    list-style: none;
    padding: 0;
  }

  footer .footer-container ul li {
    display: inline;
    margin-right: 15px;
  }

  footer .footer-container ul li a {
    color: #fff;
    text-decoration: none;
  }

  footer .footer-container ul li a:hover {
    text-decoration: underline;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
  }

  .social-icons a:hover {
    color: #ffcc00;
  }

  .copyright {
    margin-top: 10px;
    font-size: 14px;
  }
}

@include mq.sp {
  footer {
    background-color: #333;
    color: #fff;
    padding: 2vw 0;
    text-align: center;
  }

  footer .footer-container {
    margin: 0 auto;
    padding: 0 4vw;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-wrap: wrap;
  }

  footer .footer-container ul {
    list-style: none;
    padding: 0;
  }

  footer .footer-container ul li {
    display: inline;
    margin-right: 1vw;
  }

  footer .footer-container ul li a {
    color: #fff;
    text-decoration: none;
  }

  footer .footer-container ul li a:hover {
    text-decoration: underline;
  }

  .social-icons {
    display: flex;
    gap: 4vw;
  }

  .social-icons a {
    color: #fff;
    text-decoration: none;
    font-size: 2.4rem;
  }

  .social-icons a:hover {
    color: #ffcc00;
  }

  .copyright {
    margin-top: 3.4vw;
    font-size: 1.3rem;
  }
}

</style>