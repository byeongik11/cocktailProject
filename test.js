function ChangeValue_name() {
    let selectedBase = document.getElementById("base_value").value;
    let selectedDegree = document.getElementById("degree_value").value;
    let resultOption = document.getElementById("result_option");
    resultOption.innerHTML = ""; // 기존 옵션 초기화

    if (selectedBase === "Rum") { // 럼 선택
        if (selectedDegree === "1") { // 10도 이하 선택
            resultOption.innerHTML = `
                <option value="pinacolada">피나 콜라다</option>
                <option value="Cuba Libre">쿠바 리브레</option>
                <option value="Daiquiri">다이키리</option>
                <option value="Maitai">마이타이</option>
                <option value="Mohitto">모히또</option>
                <option value="Painkiller">페인 킬러</option>
                <option value="Vacadi">바카디 칵테일</option>
                <option value="Hurricane">허리케인</option>
                <option value="LongIsland">롱 아일랜드</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }

    } else if (selectedBase === "Tequila") { // 데킬라 선택
        if (selectedDegree === "1") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }
    } else if (selectedBase === "Whiskey") { // 위스키 선택
        if (selectedDegree === "1") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }
    } else if (selectedBase === "Jin") { // 진 선택
        if (selectedDegree === "1") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }
    } else if (selectedBase === "Vodka") { // 보드카 선택
        if (selectedDegree === "1") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }
    } else if (selectedBase === "Brandy") { // 브랜디 선택
        if (selectedDegree === "1") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }
    } else if (selectedBase === "Soju") { // 소주 선택
        if (selectedDegree === "1") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
            `;
        } else if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
            `;
        } else if (selectedDegree === "5") { // 40도 이상
            resultOption.innerHTML = `
                <option value="칵테일 10">칵테일 10</option>
            `;
        }
    } 
}
