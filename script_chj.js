document.addEventListener('DOMContentLoaded', function () {
    // 사용자 정보 설정
    var username = "김설";
    var userGrade = "VIP"; // 등급: 일반회원, 실버, 골드, VIP
    var paymentHistory = "결제내역 없음";
    var bookingInfo = "예매 정보 없음";
    let points = 1000;

    // 사용자 정보 업데이트
    document.getElementById('username').textContent = username;
    document.getElementById('user-grade').textContent = userGrade;
    document.getElementById('payment-history').textContent = paymentHistory;
    document.getElementById('booking-info').textContent = bookingInfo;
    document.querySelector('#point').textContent = points;

    // 등급에 따른 색상 변경
    userGradeColor(userGrade);
});

function userGradeColor(userGrade) {
    const colors = document.querySelectorAll("#user-grade");

    colors.forEach(color => {
        if (userGrade === "일반회원") {
            color.style.color = "white";
        } else if (userGrade === "실버") {
            color.style.color = "silver";
        } else if (userGrade === "골드") {
            color.style.color = "#DAA520";
        } else {
            color.style.color = "#98b7fa";
        }
    });
}

// function viewPaymentHistory() {
//     // 결제내역 상세 페이지로 이동
//     window.location.href = "../payHistory_chj.html";
// }
//
// function viewBookingInfo() {
//     // 예매정보 상세 페이지로 이동
//     window.location.href = "booking-info.html";
// }

document.querySelector(".findForm").addEventListener("submit", findIdPw);

// function findIdPw(event) {
//     event.preventDefault(); // 폼 제출 기본 동작을 방지하여 페이지 이동을 막음
//
//     // 폼 요소에서 이메일 입력 필드를 찾아서 그 값을 가져옴
//     var email = event.target.querySelector('input[name="email"]').value;
//
//     // 이메일 값을 콘솔에 출력
//     console.log("입력된 이메일:", email);
//
//     // 페이지 이동
//     window.location.href = "../accountInfo_chj.html";
// }
// 팔요시 활용


//     const findForm = document.querySelector('.findForm');
//     const emailInput = document.getElementById('inputEmail');
//     const resultsDiv = document.getElementById('searchResults');
//
//     findForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const email = emailInput.value;
//
//     try {
//     const response = await fetch('/api/users?email=' + email);
//     const data = await response.json();
//     displayResults(data);
// } catch (error) {
//     console.error('Error:', error);
// }
// });
//
//     function displayResults(data) {
//     resultsDiv.innerHTML = '';
//     if (data.length === 0) {
//     resultsDiv.innerHTML = '일치하는 계정 정보가 없습니다.';
//     return;
// }
//
//     const ul = document.createElement('ul');
//     data.forEach(user => {
//     const li = document.createElement('li');
//     li.textContent = `이름: ${user.name}, 이메일: ${user.email}`;
//     ul.appendChild(li);
// });
//     resultsDiv.appendChild(ul);
// }
// 벡엔드 구현 후
