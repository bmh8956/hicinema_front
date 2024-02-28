// 페이지네이션

//현재 페이지를 저장하는 변수를 초기화
let currentPage = 1;
const pageButtons = document.querySelectorAll(".pageBtn");

//페이지를 변경
function changePage(page) {
  currentPage = page;
  updatePageButtons();
}

//다음 페이지로 이동
function nextPage() {
  if (currentPage < pageButtons.length) {
    currentPage++;
    updatePageButtons();
  }
}

//이전 페이지로 이동
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePageButtons();
  }
}

// 페이지 버튼들의 상태를 업데이트
// 현재 페이지에 해당하는 버튼은 활성화된 상태, 그 외의 버튼은 비활성화된 상태로 설정
function updatePageButtons() {
  pageButtons.forEach((button) => {
    if (parseInt(button.textContent) === currentPage) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled =
    currentPage === pageButtons.length;
}
