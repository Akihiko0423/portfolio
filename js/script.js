jQuery(function($) {
    $('.c-hamburger-menu').click(function(){
        if($(this).hasClass('open')){
          // ハンバーガーメニューを元に戻す
          $(this).removeClass('open');
        }else{
          // ハンバーガーメニューを✖印に変更
          $(this).addClass('open');
        }
    });     
});