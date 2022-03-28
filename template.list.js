$(function () {
  var page_length = $('.guide_table tbody tr:not(.complete-ignore)').length;
  calc_pub_process = function () {
    var pub_ended = 0;
    $('.status').each(function () {
      pub_ended = pub_ended + ($(this).find('.value').attr('data-complete-value') * 1)
    });
    var per_complete = ((pub_ended / page_length) * 100).toFixed(2);
    $('.pub_summary').text('퍼블리싱 진행률 [ ' + (pub_ended).toFixed(0) + ' page / ' + (page_length).toFixed(0) + ' page] ' + per_complete + '% 완료');
  };
  calc_pub_process();
  $('a').each(function () {
    // $(this).attr("target", "_blank");
    $(this).on('click', function () {
      if ($(this).attr('target') != '_blank') {
        console.log($(this).attr('href'));
        console.log($(document).find('iframe'));
        $(document).find('iframe').attr('src', $(this).attr('href'));
        return false;
      }
    });
  });
});
// var fileRoot = "src/main/webapp/WEB-INF/jsp/";
var pub_list = new Vue({
  el: '#listBody',
  data: {
    pageList: [
      { depth1: '메인', depth2: '', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '메인', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '티켓', depth2: '경기일정', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '티켓_경기일정', fileHash: '', complete: 1, note: '좌석도 탭 포함', class: 'odd' },
      { depth1: '샵', depth2: '상세설명', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '샵_상세설명', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '샵', depth2: '카테고리메인', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '샵_카테고리메인', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '샵', depth2: '셀러메인', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '샵_셀러메인', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '검색', depth2: '검색입력', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '메인', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '검색', depth2: '검색결과', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '검색_검색결과', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '검색', depth2: '검색결과', depth3: '결과없음', depth4: '', depth5: '', fileRoot: 'template/', fileName: '검색_검색결과_결과없음', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '공지사항', depth2: '목록', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '공지사항_목록', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '공지사항', depth2: '상세', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '공지사항_상세', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '로그인', depth2: '', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '로그인', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '회원가입', depth2: '메인', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '회원가입_메인', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '회원가입', depth2: '개인회원', depth3: '약관동의', depth4: '', depth5: '', fileRoot: 'template/', fileName: '회원가입_개인회원_약관동의', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '회원가입', depth2: '개인회원', depth3: '정보입력', depth4: '', depth5: '', fileRoot: 'template/', fileName: '회원가입_개인회원_정보입력', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '마이페이지', depth2: '메인', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_메인', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '포인트현황', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_포인트현황', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '등급혜택', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_등급혜택', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '할인쿠폰', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_할인쿠폰', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '주문상세정보', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_주문상세정보', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '상품리뷰작성', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_상품리뷰작성', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '취소요청', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_취소요청', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '반품요청', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_반품요청', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '반품하기', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_반품하기', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '반품반려사유', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_반품반려사유', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '구매배송조회', depth3: '교환하기', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_구매배송조회_교환하기', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '관심상품', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_관심상품', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '단골샵', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_단골샵', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '문의내역', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_문의내역', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '배송지관리', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_배송지관리', fileHash: '', complete: (3 / 3), note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '회원정보관리', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_회원정보관리', fileHash: '', complete: 1, note: ',', class: 'odd' },
      { depth1: '마이페이지', depth2: '회원정보관리', depth3: '비밀번호인증', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_회원정보관리_비밀번호인증', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '회원정보관리', depth3: '회원정보수정', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_회원정보관리_회원정보수정', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '회원정보관리', depth3: '비밀번호변경', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_회원정보관리_비밀번호변경', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '마이페이지', depth2: '회원정보관리', depth3: '회원탈퇴', depth4: '', depth5: '', fileRoot: 'template/', fileName: '마이페이지_회원정보관리_회원탈퇴', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '장바구니', depth2: '', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '장바구니', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '장바구니', depth2: '주문결제', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '장바구니_주문결제', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '장바구니', depth2: '주문완료', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '장바구니_주문완료', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '고객센터', depth2: '', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '고객센터', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '판매자센터', depth2: '판매자유형선택', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_판매자유형선택', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '개인판매자', depth3: '약관동의', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_개인판매자_약관동의', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '개인사업자', depth3: '약관동의', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_개인사업자_약관동의', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '개인판매자', depth3: '정보입력', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_개인판매자_정보입력', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '개인사업자', depth3: '정보입력', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_개인사업자_정보입력', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '가입신청완료', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_가입신청완료', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '해외사업자신청안내', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_해외사업자신청안내', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '입점절차', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_입점절차', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '입점서류', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_입점서류', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '판매자센터', depth2: '안전거래가이드', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '판매자센터_안전거래가이드', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '플레이', depth2: '이벤트', depth3: '목록', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '이벤트', depth3: '종료된목록', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '이벤트', depth3: '참가비결제팝업', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '이벤트', depth3: '상세', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_상세', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '이벤트', depth3: '상세', depth4: '당첨', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_상세', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '이벤트', depth3: '주문결제', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_주문결제', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '이벤트', depth3: '결제완료', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_이벤트_결제완료', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '목록', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '종료된목록', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_종료된목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '상세', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_상세', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '상세', depth4: '입찰없음', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_상세', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '상세', depth4: '입찰참가비결제팝업', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_상세_입찰참가비결제팝업', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '상세', depth4: '입찰신청팝업', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_상세_입찰신청팝업', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '상세', depth4: '낙찰', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_상세_낙찰', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '경매', depth3: '주문결제', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_주문결제', fileHash: '', complete: 1, note: '', class: 'odd' },
      // { depth1: '플레이', depth2: '경매', depth3: '결제완료', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_경매_결제완료', fileHash: '', complete: 0, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '투표', depth3: '목록', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_투표_목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '투표', depth3: '종료된목록', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_투표_종료된목록', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '투표', depth3: '상세', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_투표_상세', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '투표', depth3: '상세', depth4: '미디어', depth5: '', fileRoot: 'template/', fileName: '플레이_투표_상세_미디어', fileHash: '', complete: 0, note: '', class: 'odd' },
      { depth1: '플레이', depth2: '투표', depth3: '결과', depth4: '', depth5: '', fileRoot: 'template/', fileName: '플레이_투표_결과', fileHash: '', complete: 1, note: '', class: 'odd' },
      { depth1: '통합캘린더', depth2: '', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '통합캘린더', fileHash: '', complete: 1, note: '', class: '' },
      { depth1: '팝업모음', depth2: '', depth3: '', depth4: '', depth5: '', fileRoot: 'template/', fileName: '팝업모음', fileHash: '', complete: (6 / 6), note: '', class: 'odd' },
    ],
  },
});
