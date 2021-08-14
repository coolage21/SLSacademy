/*header*/
let header = document.querySelector('header')
let topBtn = document.querySelector('.top-button');
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    header.classList.add('scroll');
    topBtn.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
    topBtn.classList.remove('scroll');
  }
})

/*수강후기, 상담예약 button*/
let menuHeight = 145; //header height 
let reviewBtn = document.querySelector('.review-btn');
let reservBtn = document.querySelector('.reserv-btn');
reviewBtn.addEventListener('click', function () {
  let location = document.querySelector('.review').offsetTop;
  window.scrollTo({
    top: location - menuHeight,
    left: 0,
    behavior: 'smooth'
  })
})
reservBtn.addEventListener('click', function () {
  let location2 = document.querySelector('.reservation').offsetTop;
  window.scrollTo({
    top: location2 - menuHeight,
    left: 0,
    behavior: 'smooth'
  })
})

/*top button*/
topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

/*수강료 조회하기 정규식*/
function emptyChk(ele, title) {
  if (ele.value == '') {
    alert(`${title}을(를) 작성해주세요.`);
    ele.focus();
    return true;
  }
  return false;
}
let nameRegExp = /^[가-힣]{2,4}$/;
let numberRegExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

function checkAll() {
  let form = document.querySelector('#tuition-inquire');
  let agree = document.querySelector('#agreement').checked;
  if (emptyChk(form.name, '이름')
    || emptyChk(form.number, '휴대폰 번호')
    || emptyChk(form.subject, '과목')) {
    return false;
  } else if (!nameRegExp.test(form.name.value)) {
    alert('이름이 올바르지 않습니다.')
    form.name.focus();
    return false;
  } else if (!numberRegExp.test(form.number.value)) {
    alert('번호가 올바르지 않습니다.')
    form.number.focus();
    return false;
  } else if (!agree) {
    alert('개인정보수집 동의 해주세요.');
    return false;
  }
  return true;
}

/*예약하기 정규식*/
function reservationCheck() {
  let reservForm = document.querySelector('#reservation-frm');
  let reservAgree = document.querySelector('#reservation-agreement').checked;
  if (emptyChk(reservForm.name, '이름')
    || emptyChk(reservForm.number, '휴대폰 번호')
    || emptyChk(reservForm.subject, '과목')
    || emptyChk(reservForm.date, '날짜')) {
    return false;
  } else if (!nameRegExp.test(reservForm.name.value)) {
    alert('이름이 올바르지 않습니다.')
    reservForm.name.focus();
    return false;
  } else if (!numberRegExp.test(reservForm.number.value)) {
    alert('번호가 올바르지 않습니다.')
    reservForm.number.focus();
    return false;
  }
  else if (!reservAgree) {
    alert('개인정보수집 동의 해주세요.');
    return false;
  }
  return true;
}

/*wow.js*/
new WOW().init();

/*review-slickslider */
$('.reviewslider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerPadding: '300px',
  centerMode: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '150px'
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '70px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
  ]
});

