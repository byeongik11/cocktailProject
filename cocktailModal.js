// 여러 이미지 버튼 요소 가져오기
var modalBtns = document.getElementsByClassName("card-img-top");

// 각 이미지 버튼에 대해 클릭 이벤트 처리
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function() {
    var modalId = this.getAttribute("data-modal-id");
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
}

// 닫기 버튼 요소 가져오기
var closeBtns = document.getElementsByClassName("close");

// 각 닫기 버튼에 대해 클릭 이벤트 처리
for (var j = 0; j < closeBtns.length; j++) {
  closeBtns[j].onclick = function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = "none";
  }
}

// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}