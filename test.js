function ChangeValue_name() {
    let selectedBase = document.getElementById("base_value").value;
    let selectedDegree = document.getElementById("degree_value").value;
    let resultOption = document.getElementById("result_option");
    resultOption.innerHTML = ""; // 기존 옵션 초기화

    if (selectedBase === "1") { // 럼 선택
        if (selectedDegree === "1") { // 10도 이하 선택
            resultOption.innerHTML = `
                <option value="칵테일 1">칵테일 1</option>
                <option value="칵테일 2">칵테일 2</option>
                <option value="칵테일 3">칵테일 3</option>
            `;
        } else if (selectedDegree === "2") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
                <option value="칵테일 4">칵테일 4</option>
                <option value="칵테일 5">칵테일 5</option>
            `;
        }
        // 더 많은 조건 추가 가능
    } else if (selectedBase === "5") { // 데킬라 선택
        if (selectedDegree === "3") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
                <option value="칵테일 6">칵테일 6</option>
                <option value="칵테일 7">칵테일 7</option>
            `;
        } else if (selectedDegree === "4") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
                <option value="칵테일 8">칵테일 8</option>
                <option value="칵테일 9">칵테일 9</option>
            `;
        }
        // 더 많은 조건 추가 가능
    }
    // 다른 베이스와 도수에 대한 조건 추가 가능
}
