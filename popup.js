// 레이어 팝업 열기
document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'block';
});

// 레이어 팝업 닫기
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
});

function Base_value(val){
    if(val == "Whiskey"){
        //Whiskey.style.display = 'inline';
        //Jin.style.display = 'none';
    } else if(val == "Jin"){
        //Whiskey.style.display = 'none';
        //Jin.style.display = 'inline';
    }
}

function alcohol_value(val){

}