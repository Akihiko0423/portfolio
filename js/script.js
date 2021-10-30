jQuery(function($) {
    //ハンバーガーボタンのクリックイベント
    $('.c-hamburger-menu').click(function(){
        if($(this).hasClass('open')){
          // ハンバーガーボタンを元に戻す
          $(this).removeClass('open');
        }else{
          // ハンバーガーボタンを✖印に変更
          $(this).addClass('open');
        }
    });   
    
    //ハンバーガーメニューのクリックイベント
    $('#slidetoggle_button').on('click', function() {
      $('#slidetoggle_menu').slideToggle('fast'); 
      $('#slidetoggle_menu').toggleClass('active'); 
    });

    //タブレットサイズ以下のメニューイベント
    const width = window.innerWidth;
    console.log(width);
    if(width <= 1024){
      $('.menu-btn').on('click',function(){
        $('#slidetoggle_menu').css('display','none'); 
        $('#slidetoggle_button').removeClass('open'); 
      });
    }

    //画面をスムーズにスクロール
    $('a[href^="#"]').click(function(){
      // リンクを取得
      let href= $(this).attr("href");
      // ジャンプ先のid名をセット
      let target = $(href == "#" || href == "" ? 'html' : href);
      // トップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う
      $("html, body").animate({scrollTop:position}, 200);
      return false;
    });

    //スクロール時のフェード表示
    $(window).scroll(function() {
      // fadeinクラスに対して順に処理を行う
      $('.fadein').each(function() {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
        //twitter-iconなどの表示
        if(scroll > 600){
          $('.c-footer-link').css('opacity','1');
          $('.c-footer-link').css('transform','translateY(0)');
        }
      });

    });
  


});