// 레이어 팝업 열기
document.getElementById('showPopup').addEventListener('click', function () {
    document.getElementById('popupContainer').style.display = 'block';
});

// 레이어 팝업 닫기
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popupContainer').style.display = 'none';
});

async function fetchBoardDetail(condition) {
    const querySnapshot = await getDocs(condition);
    querySnapshot.forEach((doc) => {
        setBoardData(doc.data());
    });
}





function getBaseType() {
    var obj = {
        "위스키": {
            '10도 이하':
                [
                    '칵테일 이름1',
                    '칵테일 이름2',
                    '칵테일 이름3',
                    '칵테일 이름4',
                    '칵테일 이름5'
                ]
            ,
            '10도 ~ 20도':
                [
                    '칵테일 이름1',
                    '칵테일 이름2',
                    '칵테일 이름3',
                    '칵테일 이름4',
                    '칵테일 이름5'
                ]
            ,
            '20도 ~ 30도':
                [
                    '칵테일 이름1',
                    '칵테일 이름2',
                    '칵테일 이름3',
                    '칵테일 이름4',
                    '칵테일 이름5'
                ]
        },
        "진": {
            '10도 이하':
                [
                    '칵테일 이름1',
                    '칵테일 이름2',
                    '칵테일 이름3',
                    '칵테일 이름4',
                    '칵테일 이름5'
                ]
            ,
            '10도 ~ 20도':
                [
                    '칵테일 이름1',
                    '칵테일 이름2',
                    '칵테일 이름3',
                    '칵테일 이름4',
                    '칵테일 이름5'
                ]
            ,
            '20도 ~ 30도':
                [
                    '칵테일 이름1',
                    '칵테일 이름2',
                    '칵테일 이름3',
                    '칵테일 이름4',
                    '칵테일 이름5'
                ]
        }
    }
    return obj;
}

function Base_value(val) {
    if (val == "Whiskey") {
        //Whiskey.style.display = 'inline';
        //Jin.style.display = 'none';
    } else if (val == "Jin") {
        //Whiskey.style.display = 'none';
        //Jin.style.display = 'none';
    }
}

function alcohol_value(val) {

}