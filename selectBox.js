function filterCocktails() {
    var selectedBase = document.getElementById("Base_select").value;
    var cocktailCards = document.querySelectorAll('.card');

    cocktailCards.forEach(card => {
        const baseData = card.getAttribute('data-base');
        if (selectedBase === '베이스 선택' || baseData === selectedBase) {
            card.parentElement.style.display = 'block'; // 부모 요소를 보이도록 설정
        } else {
            card.parentElement.style.display = 'none'; // 부모 요소를 숨기도록 설정
        }
    });
}

window.onload = function() {
    var baseSelect = document.getElementById("Base_select");

    baseSelect.addEventListener('change', filterCocktails);

    filterCocktails(); // 페이지 로드 시 초기 필터링 함수 호출
};