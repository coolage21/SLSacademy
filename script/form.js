/*헤더부분*/
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
//버튼 li 마우스 가져다대면
// 상위부모 ul의 자식 ul에 opacity:0 그대로적용
//그의 부모부모의 형제노드인 .sub-menu-back의 opacity:0

// let menuBtn = document.querySelector('.menu-btn');

// menuBtn.addEventListener('mouseover', function(){
//     let subMenu = document.querySelector('nav > ul ul');
//   subMenu.style.display='none';
// }) 


// let menu = document.querySelectorAll('.main-menu');
// for (let i = 0; i < menu.length; i++) {
//     let subMenu = document.querySelector('.nav > ul');
//     let subMenuBack = document.querySelector('.sub-menu-back');
//     menu[i].addEventListener('mousenover', function(e) {
//         subMenu.classList.add('visible');
//         subMenuBack.classList.add('visible');
//     });
//     menu[i].addEventListener('mouseout', function() {
//         subMenu.classList.remove('visible');
//         subMenuBack.classList.remove('visible');
//     })
// }

/*수강후기, 상담예약 버튼*/
let reviewBtn = document.querySelector('.review-btn');
let reservBtn = document.querySelector('.reserv-btn');
reviewBtn.addEventListener('click', function () {
    let location = document.querySelector('.review').offsetTop;
    window.scrollTo({
        top: location - 175,
        left: 0,
        behavior: 'smooth'
    })
})
reservBtn.addEventListener('click', function () {
    let location2 = document.querySelector('.reservation').offsetTop;
    window.scrollTo({
        top: location2 - 175,
        left: 0,
        behavior: 'smooth'
    })
})
/*top버튼*/
topBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
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
    let form = document.querySelector('#frm');
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
    //   else if (reservForm.date.value){
    //     //날짜가 오늘이후여야한다!
    // }
    else if (!reservAgree) {
        alert('개인정보수집 동의 해주세요.');
        return false;
    }
    return true;
}

/*wow.js*/
new WOW().init();