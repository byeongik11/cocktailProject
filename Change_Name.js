function ChangeValue_name() {
    let selectedBase = document.getElementById("base_value").value;
    let selectedDegree = document.getElementById("degree_value").value;
    let resultOption = document.getElementById("result_option");
    resultOption.innerHTML = ""; // 기존 옵션 초기화

    if (selectedBase === "Rum") { // 럼 선택
        if (selectedDegree === "10") { // 10도 이하 선택
            resultOption.innerHTML = `
                <option value="Painkiller">페인 킬러</option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Pinacolada">피나 콜라다</option>
            <option value="Cuba Libre">쿠바 리브레</option>
            <option value="Mohitto">모히또</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="Hurricane">허리케인</option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="Daiquiri">다이키리</option>
            <option value="Maitai">마이타이</option>
            <option value="Vacadi">바카디 칵테일</option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
                <option value="wait">준비중입니다. </option>
            `;
        }

    } else if (selectedBase === "Tequila") { // 데킬라 선택
        if (selectedDegree === "10") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Tequillasunrise">데킬라 선라이즈</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="Greenmaxican">그린 맥시칸</option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
            <option value="Magarita">마가리타</option>
            `;
        }
    } else if (selectedBase === "Whiskey") { // 위스키 선택
        if (selectedDegree === "10") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="Jackcoke">잭 콕</option>
            <option value="Boilermaker">보일러 메이커</option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Hottoddy">핫 토디</option>
            <option value="Highball">하이볼</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="BMW">BMW</option>
            <option value="Goldrush">골드 러쉬</option>
            <option value="Newyorksour">뉴욕 사워</option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="Oldfashioned">올드 패션드</option>
            <option value="Manhattan">맨하탄</option>
            <option value="Godfather">갓파더</option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
            <option value="Rustynail">러스티 네일</option>
            `;
        }
    } else if (selectedBase === "Jin") { // 진 선택
        if (selectedDegree === "10") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Jinfizz">진피즈</option>
            <option value="Singaporesling">싱가포르 슬링</option>
            <option value="Lamosfizz">라모스 피즈</option>
            <option value="Jintonic">진 토닉</option>
            <option value="Ladykiller">레이디 킬러</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="Londoncalling">런던 콜링</option>
            <option value="Negrony">네그로니</option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="Brongc">브롱크스</option>
            <option value="Gimlet">김렛</option>
            <option value="Martini">마티니</option>
            <option value="Givson">깁슨</option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
            <option value="Silverbullet">실버 불렛</option>
            `;
        }
    } else if (selectedBase === "Vodka") { // 보드카 선택
        if (selectedDegree === "10") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="Seabreeze">씨 브리즈</option>
            <option value="Bluelagoon">블루 라군</option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Bluehawaii">블루하와이</option>
            <option value="Harveywallbanger">하비 월뱅어</option>
            <option value="Moscowmule">모스코 뮬</option>
            <option value="Screwdriver">스크류드라이버</option>
            <option value="Blueocean">블루 오션</option>
            <option value="Bloodymary">블러디 메리</option>
            <option value="Sexonthebeach">섹스 온 더 비치</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="Mudslide">머드 슬라이드</option>
            <option value="Whiterussian">화이트 러시안</option>
            <option value="LongIslandicetea">롱 아일랜드 아이스티</option>
            <option value="Espressomartini">에스프레소 마티니</option>
            <option value="Cosmopolitan">코스모폴리탄</option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="Blackrussian">블랙 러시안</option>
            <option value="Applemartini">애플 마티니</option>
            <option value="Bluekamikaze">블루 카미카제</option>
            <option value="Godmother">갓마더</option>
            <option value="Dirtymartini">더티 마티니</option>
            <option value="Vodkamartini">보드카 마티니</option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        }
    } else if (selectedBase === "Brandy") { // 브랜디 선택
        if (selectedDegree === "10") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Brandyeggnog">브랜디 에그노그</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
            <option value="Sidecar">사이드 카</option>
            `;
        }
    } else if (selectedBase === "Soju") { // 소주 선택
        if (selectedDegree === "10") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="nopainnogain">고진감래주</option>
            <option value="Hallatonic">한라토닉</option>
            <option value="Energyju">에너자이주</option>
            `;
        } else if (selectedDegree === "20") { // 10도 ~ 20도 선택
            resultOption.innerHTML = `
            <option value="Ggulju">꿀주</option>
            `;
        } else if (selectedDegree === "30") { // 20도 ~ 30도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "40") { // 30도 ~ 40도 선택
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        } else if (selectedDegree === "50") { // 40도 이상
            resultOption.innerHTML = `
            <option value="wait">준비중입니다. </option>
            `;
        }
    }
}
