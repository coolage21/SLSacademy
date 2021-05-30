/*수강료 조회하기 정규식*/

function emptyChk(ele, title){
    if(ele.value == '') {
        alert(`${title}을(를) 작성해주세요.`);
        ele.focus();
        return true;
    }
    return false;
}
let nameRegExp = /^[가-힣]{2,4}$/;
let numberRegExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;


function checkAll(){
    let form = document.querySelector('#frm');
    let agree = document.querySelector('#agreement').checked;
    if(emptyChk(form.name, '이름')
        || emptyChk(form.number, '휴대폰 번호')
        || emptyChk(form.subject, '과목')) {
            return false;
        } else if (!nameRegExp.test(form.name.value)){
            alert('이름이 올바르지 않습니다.')
            form.name.focus();
            return false;
        } else if (!numberRegExp.test(form.number.value)){
            alert('번호가 올바르지 않습니다.')
            form.number.focus();
            return false;
        } else if (!agree){
            alert('개인정보수집 동의 해주세요.');
            return false;
        }
    return true;
}

function reservationCheck(){
    let reservForm = document.querySelector('#reservation-frm');
    let reservAgree = document.querySelector('#reservation-agreement').checked;
    if(emptyChk(reservForm.name, '이름')
    || emptyChk(reservForm.number, '휴대폰 번호')
    || emptyChk(reservForm.subject, '과목')
    || emptyChk(reservForm.date, '날짜')) {
        return false;
    } else if (!nameRegExp.test(reservForm.name.value)){
        alert('이름이 올바르지 않습니다.')
        reservForm.name.focus();
        return false;
    } else if (!numberRegExp.test(reservForm.number.value)){
        alert('번호가 올바르지 않습니다.')
        reservForm.number.focus();
        return false;}
    //   else if (reservForm.date.value){
    //     //날짜가 오늘이후여야한다!
    // }
    else if (!reservAgree){
        alert('개인정보수집 동의 해주세요.');
        return false;
    }
    return true;
}
/*예약하기 정규식*/