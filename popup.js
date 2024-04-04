// 레이어 팝업 열기
document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'block';
});

// 레이어 팝업 닫기
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
});

function getBaseType() {
    var obj = {
        "위스키" : {
            'a' : {
                '10도 이하' ,
                '10 ~ 20도' ,
                '20 ~ 30도' ,
                '30 ~ 40도' ,
                '40도 이상' ,
                }, 
            'b' : '올드 패션드',
            'c' : '뉴욕 사워'
        },
        "진" : {
            'a' : '실버 불렛',
            'b' : '예시 1',
            'c' : '예시 2'
        }
    }
    return obj;
}

function Base_value(val){
    if(val == "Whiskey"){
        //Whiskey.style.display = 'inline';
        //Jin.style.display = 'none';
    } else if(val == "Jin"){
        //Whiskey.style.display = 'none';
        //Jin.style.display = 'none';
    }
}

function alcohol_value(val){

}