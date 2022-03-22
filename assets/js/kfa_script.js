// 상단 검색 영역 토글
function callSearch() {
  var target = $(document).find('.search-area');
  target.addClass('show');
  return false;
}
/* common */
function fillZero(width, str) {
  return str.length >= width ? str : new Array(width - str.length + 1).join('0') + str;//남는 길이만큼 0으로 채움
}
// main top visual slide
const mainTopVisualSlide = new Swiper('.main-top-visual .top-visual.swiper-container', {
  updateOnWindowResize: true,
  speed: 500,
  watchOverflow: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// main top notice
const mainTopNoticelSlide = new Swiper('.top-notice .swiper-container', {
  updateOnWindowResize: true,
  speed: 1000,
  effect: "fade",
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// main ticket slide
const mainCalendarTicketSlide = new Swiper('.game-calendar .date-list .swiper-container', {
  updateOnWindowResize: true,
  slidesPerView: 'auto',
  watchOverflow: false,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});
const mainTicketSlide = new Swiper('.game-slide .swiper-container', {
  updateOnWindowResize: true,
  speed: 500,
  watchOverflow: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next.outside',
    prevEl: '.swiper-button-prev.outside',
  },
});
// main shop popular slide
const mainShopPopularSlide = new Swiper('.shop-zone.popular .tab.swiper-container', {
  // updateOnWindowResize: true,
  speed: 300,
  watchOverflow: false,
  slidesPerView: "auto",
  freeMode: {
    enabled: true,
    sticky: true,
  },
});
// main shop discount slide
const mainShopDiscountSlide = new Swiper('.shop-zone.discount:not(.wide) .swiper-container', {
  updateOnWindowResize: true,
  speed: 300,
  slidesPerView: "auto",
  watchOverflow: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const mainShopDiscountSlideWide = new Swiper('.shop-zone.discount.wide .swiper-container', {
  updateOnWindowResize: true,
  speed: 300,
  slidesPerView: 4,
  watchOverflow: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// 인기샵 슬라이드
const mainPopularShopSlide = new Swiper('.shop-zone.popular-shop .swiper-container', {
  // updateOnWindowResize: true,
  speed: 300,
  slidesPerView: "auto",
  watchOverflow: false,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// main event slide
const maineventSlide = new Swiper('.play-zone.event .event-list.swiper-container', {
  updateOnWindowResize: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoHeight: true,
  speed: 300,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ((index + 1).toString().padStart(2, '0')) + "</span>";
    },
  },
  on: {
    afterInit: function () {
      console.log((this.activeIndex + 1) + "/" + this.slides.length)
      $(this.$el).find('.swiper-progress .progress').css({
        'width': (100 * ((this.activeIndex + 1) / this.slides.length)) + "%"
      })
    },
    activeIndexChange: function () {
      console.log((this.activeIndex + 1) + "/" + this.slides.length)
      $(this.$el).find('.swiper-progress .progress').css({
        'width': (100 * ((this.activeIndex + 1) / this.slides.length)) + "%"
      })
      // console.log($(this.$el).find('.swiper-progress .progress'))
    }
  }

  // Navigation arrows  
});
// 상품상세 상단 이미지 슬라이드
const ShopDetailTopThumbSlide = new Swiper('.shop-detail-top .thumb-slider.swiper-container', {
  // updateOnWindowResize: true,
  speed: 300,
  slidesPerView: "auto",
  watchOverflow: false,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});
const ShopDetailTopSlide = new Swiper('.shop-detail-top .big-slider.swiper-container', {
  // updateOnWindowResize: true,
  speed: 2000,
  slidesPerView: "auto",
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  watchOverflow: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: ShopDetailTopThumbSlide,
  },
});
// 함께보면 좋은 상품 슬라이드
const RelatedGoodsSlide = new Swiper('.related-goods.swiper-container', {
  // updateOnWindowResize: true,
  slidesPerView: "auto",
  watchOverflow: false,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// 리뷰 목록 썸네일 슬라이드
const ReviewThumbsSlide = new Swiper('.review-list .swiper-container', {
  // updateOnWindowResize: true,
  slidesPerView: "auto",
  watchOverflow: false,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// 상품목록 좌측 카테고리 메뉴 슬라이드
const ShopLeftMenuSlide = new Swiper('.shop-left-menu.swiper-container', {
  // updateOnWindowResize: true,
  slidesPerView: "auto",
  watchOverflow: false,
  spaceBetween: 0,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});
// 셀러샵 상단 슬라이드
const sellerTopSlide = new Swiper('.seller-top .swiper-container', {
  updateOnWindowResize: true,
  speed: 500,
  watchOverflow: false,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$(ShopLeftMenuSlide.el).find('.swiper-slide').on('click', function () {
  let clickIndex = $(ShopLeftMenuSlide.el).find('.swiper-slide').index(this);
  console.log(clickIndex);
  $(ShopLeftMenuSlide.el).find('.swiper-slide').removeClass('active');
  $(ShopLeftMenuSlide.el).find('.swiper-slide').eq(clickIndex).addClass('active');
  ShopLeftMenuSlide.slideTo(clickIndex, 0, function () { })
})


// common tab init
$.fn.initTabs = function () {
  let tabLinkGroup = $(this).find('> .tab');
  let tabTarget = $(this).find('.tab-content');
  tabLinkGroup.find('li').on('click', function () {
    let index = tabLinkGroup.find('li').index(this);
    console.log(tabTarget);
    tabLinkGroup.find('li').removeClass('on');
    tabLinkGroup.find('li').eq(index).addClass('on');
    tabTarget.hide();
    tabTarget.eq(index).show();
    return false;
  });
}
$(function () {
  /* main shop tabs */
  $('.tabs').each(function () {
    $(this).initTabs();
  });
  /* 메인상단 배너 닫기 */
  $('.top-banner .btn-close').on('click', function () {
    $('.top-banner').hide();
  });
  /* main vod toggle */
  $('.vod-popup-area').find('.btn-play').on('click', function () {
    $('.wrapper').scrollTo(0, 300);
    $('.wrapper').addClass('vod-popuped');
    $('.vod-popup-area').addClass('expanded');
  })
  $('.vod-popup-area').find('.btn-close').on('click', function () {
    /* 확대된 상태인 경우 */
    if ($('.vod-popup-area').hasClass('expanded') == true) {
      $('.wrapper').removeClass('vod-popuped');
      $('.vod-popup-area').removeClass('expanded');
    } else {
      $('.wrapper').removeClass('vod-popuped');
      $('.vod-popup-area').hide();
    }
  })
  /* 스크롤 내리면 위로가기 버튼 보이기 */
  $('.wrapper').on('scroll', function () {
    if ($('.wrapper').scrollTop() > 0) {
      $(document).find('.wrapper').addClass('scrolled');
    } else {
      $(document).find('.wrapper').removeClass('scrolled');
    }
    if ($('.wrapper').scrollTop() >= 200) {
      $(document).find('.btn-top').addClass('show');
    } else {
      $(document).find('.btn-top').removeClass('show');
    }
  });
  /* 탑버튼 누르면 스크롤 위로 올리기 */
  $(document).find('.btn-top').on('click', function () {
    $('.wrapper').scrollTo(0, 500);
  });
  /* 팝업 닫기 */
  $('.popup .btn-close').on('click', function () {
    let targetPop = $(this).parents('.popup');
    targetPop.hide();
  });
  /* accordion toggle */
  $(document).find('.accordion-list').each(function () {
    let targetList = $(this);
    targetList.find(' .accordion-title').on('click', function (e) {
      let clickIndex = targetList.find('.accordion-title').index(this);
      // console.log($(e.target).parents('.uploaded-imgs').length);
      if ($(e.target).hasClass('uploaded-imgs') == true || $(e.target).parents('.uploaded-imgs').length > 0 || $(e.target).prop('tagName') == 'A' || $(e.target).prop('tagName') == 'INPUT' || $(e.target).parents('label').length > 0) {
        console.log('pass');
        // return false;
      } else {
        targetList.find('.accordion-item').each(function () {
          let listIndex = targetList.find('.accordion-item').index(this);
          if (clickIndex == listIndex) {
            $(this).toggleClass('on')
          } else {
            $(this).removeClass('on')
          }
        })

      }
      // return false;
    })
  });
  /* 옵션 수량 변경 */
  $('.change-count button').on('click', function () {
    let targetParent = $(this).parents('.change-count');
    let targetInput = targetParent.find('input');
    let targetInputName = targetParent.find('input').attr('name');
    let targetInputValue = targetInput.val() * 1;
    if ($(this).hasClass('btn-minus') == true) {
      targetInputValue = targetInputValue - 1;
      if (targetInputValue < 1) {
        targetInputValue = 1
      }
      // $(document).find('input[type=' + targetInputName + ']').val(changeCount)
    } else if ($(this).hasClass('btn-plus') == true) {
      targetInputValue = targetInputValue + 1;
    }
    $(document).find('input').each(function () {
      if ($(this).attr('name') == targetInputName) {
        console.log(targetInputValue, targetInputName, $(document).find('input[type=' + targetInputName + ']'));
        $(this).val(targetInputValue)
      }
    })
  })
  /* 상품상세 더보기 버튼 클릭 */
  $(document).find('.refund-rulls ~ .btn-more').on('click', function () {
    let target = $(document).find('.refund-rulls');
    target.addClass('expanded');
  })
  /* 상품 목록 좌측 카테고리 메뉴 토글 */
  $(document).find('.shop-left-menu .depth1 > li').on('click', function () {
    $(this).toggleClass('expanded');
    return false;
  })
  /* 일반 검색폼 */
  $(document).find('.search-form input[type=search]').on('keypress keyup', function () {
    var target = $(document).find('.search-form');
    // console.log(target.find('input[type=search]').val());
    if (target.find('input[type=search]').val() != '') {
      target.find('.form-field .btn-close, .form-field .btn-delete').show()
    } else {
      target.find('.form-field .btn-close, .form-field .btn-delete').hide()
    }
  })
  /* 신상품/추천상품 탭 높이 브라우저 사이즈에 맞게 재조절 */
  /* PC only */
  if ($(window).width() > 1024) {
    /* 상품 목록 좌측 카테고리 메뉴 슬라이드 비활성화 */
    if ($('.content').hasClass('shop') == true && $('.shop-detail-top').length == 0) {
      $(ShopLeftMenuSlide.el).addClass('disabled');
      ShopLeftMenuSlide.destroy(false, false);
    }
  }
  /* Mo only */
  else {
    /* 사이드메뉴 아코디언 */
    $(document).find('.side-menu-group > li').on('click', function () {
      let sideMenuIndex = $(document).find('.side-menu-group > li').index(this);
      $(document).find('.side-menu-group > li').each(function () {
        let sideMenuIndexCurrent = $(document).find('.side-menu-group > li').index(this);
        if (sideMenuIndex == sideMenuIndexCurrent) {
          $(this).toggleClass('on');
        } else {
          $(this).removeClass('on');
        }
      })
    });
    /* 상품 목록 좌측 카테고리 메뉴 슬라이드 비활성화 */
    if ($('.content').hasClass('shop') == true && $('.shop-detail-top').length == 0) {
      $(ShopLeftMenuSlide.el).removeClass('disabled');
      ShopLeftMenuSlide.init();
    }
  }
  /* 사이드메뉴 토글 */
  $(document).find('.header-top .btn-sitemap').on('click', function () {
    $(document).find('.side-menu').addClass('expanded');
    return false;
  });
  $(document).find('.side-menu .btn-close').on('click', function () {
    $(document).find('.side-menu').removeClass('expanded')
    return false;
  });
  // console.log(target.find('input[type=search]'))  
  if ($(document).find('.search-form input[type=search]').attr('value') != '' || $(document).find('.search-form input[type=search]').val() != '') {
    $(document).find('.search-form .btn-close, .search-form .btn-delete').show();
  }
  $(document).find('.search-form .btn-close, .search-form .btn-delete').on('click', function () {
    var target = $(document).find('.search-form');
    target.find('input[type=search]').val('');
    target.removeClass('show');
  });

  $(window).on('resize', function () {
    if ($(window).width() > 1024) {
      /* 상품 목록 좌측 카테고리 메뉴 슬라이드 비활성화 */
      if ($('.content').hasClass('shop') == true && $('.shop-detail-top').length == 0) {
        $(ShopLeftMenuSlide.el).addClass('disabled');
        ShopLeftMenuSlide.destroy(false, false);
      }
    }
    /* Mo only */
    else {
      /* 상품 목록 좌측 카테고리 메뉴 슬라이드 비활성화 */
      if ($('.content').hasClass('shop') == true && $('.shop-detail-top').length == 0) {
        $(ShopLeftMenuSlide.el).removeClass('disabled');
        ShopLeftMenuSlide.init();
      }
      /* 검색영역 하단 푸터에 맞추기 */
    }
  });

  function checkPopupAnsBodyScroll() {
    $(document).find('.popup').each(function () {
      if ($(window).width() > 1024) {//PC
        if ($(this).css('display') == 'block' && $(this).hasClass('instant-popup') == false) {
          $(document).find('body').addClass('scroll-locked')
        } else {
          $(document).find('body').removeClass('scroll-locked')
        }
      } else {//MO
        if ($(this).css('display') == 'block') {
          $(document).find('body').addClass('scroll-locked')
        }
      }
    });
  }
  checkPopupAnsBodyScroll()
  $(window).on('resize', function () {
    checkPopupAnsBodyScroll()
  })


  /* 팝업 상태 변화 감지 */
  var $div = $(".popup");
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if ($(window).width() > 1024) {//PC
        if ($(mutation.target).css('display') == "none") {
          $(document).find('body').removeClass('scroll-locked')
          var attributeValue = $(mutation.target).prop(mutation.attributeName);
          // console.log("Class attribute changed to:", attributeValue);
        } else {
          $(document).find('body').addClass('scroll-locked')
        }
      } else {//MO
        if ($(mutation.target).css('display') == "none") {
          $(document).find('body').removeClass('scroll-locked')
          var attributeValue = $(mutation.target).prop(mutation.attributeName);
          // console.log("Class attribute changed to:", attributeValue);
        } else {
          $(document).find('body').addClass('scroll-locked')
        }
      }
    });
  });
  observer.observe($div[0], {
    attributes: true
  });
  /* Header 감지 */
  var headerTop = 0;
  function checkHeaderTop() {
    headerTop = $(document).find('.top-banner').height()
    console.log(headerTop);
    if ($(document).find('.wrapper').hasClass('scrolled') == true) {
      $(document).find('.side-menu .pc-menu').css({ top: 0 })
    } else {
      $(document).find('.side-menu .pc-menu').css({ top: headerTop })
    }
  }
  checkHeaderTop();
  $(window).on('resize', function () {
    checkHeaderTop();
  });
  $(document).find('.wrapper').on('scroll', function () {
    checkHeaderTop();
  });
  /* Header 감지 */

})