// init
$('#Social').hide();

// x=10, y=20

// event
$(window).on('scroll', function () {

  // 分享工具顯示與否
  if ($(window).scrollTop() > 500) {
    $('#Social').fadeIn();
  } else {
    $('#Social').fadeOut();
  }

  // class 套用與否
  if ($(window).scrollTop() == 0) {
    $('#Header').removeClass('header-active');
  } else {
    $('#Header').addClass('header-active');
  }
});

$('#BtnBars').on('click', function() {
  $('#HeaderBody').fadeIn();
  $('body').css('overflow', 'hidden');
});

$('#BtnXmark, .nav-link').on('click', function() {
  $('#HeaderBody').fadeOut();
  $('body').removeAttr('style');
});

