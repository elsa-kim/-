// 문서 객체 모델

/*
용어정리
  - 요소 & 문서 객체 : HTML 페이지에 있는 html, head, body, title, h1, div, span 등을 HTML에서 요소라 부르고 자바스크립트에서는 문서 객체라 부름
    // 문서 객체를 조작한다 = HTML 요소들을 조작한다
  - DOM(Document Objects Model; 문서 객체 모델) : 문서 객체를 조합해서 만든 전체적 형태

DOMContentLoaded : 문서 객체 조작할 때 사용, 웹 브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트로 DOMContentLoaded 상태가 되었을 때 콜백 함수 호출

문서 객체 가져오기 : document.body, document.head, document.title 등 HTML 문서에 있는 요소 읽어들일 수 있음
  - head와 body 요소 내부에 만든 다른 요소들에 접근할 때  //선택자 부분엔 CSS 선택자 입력
    > document.querySelector(선택자) : 요소 하나만 추출 
    > document.querySelectorAll(선택자) : 문서 객체 여러 개를 배열로 읽어들임, 내부 요소에 접근하고 활용하려면 반복 돌려야 함(일반적으로 forEach() 사용)
  - CSS 선택자
    1) 태그 선택자 : 특정 태그 가진 요소 추출 ; 태그
    2) 아이디 선택자 : 특정 id 가진 요소 추출 ; #아이디
    3) 클래스 선택자 : 특정 class 속성 가진 요소 추출 ; .클래스
    4) 속성 선택자 : 특정 속성 값 갖고 있는 요소 추출 ; [속성=값]
    5) 후손 선택자 : 선택자_A 아래에 있는 선택자_B 선택 ; 선택자_A 선택자_B

글자 조작하기
  - 문서객체.textContent : 입력된 문자열 그대로 넣음
  - 문서객체.innerHTML : 입력된 문자열을 HTML 형식으로 넣음

속성 조작하기
  - 문서객체.setAttribute(속성 이름, 값) : 특정 속성에 값 지정
  - 문서객체.getAttribute(속성 이름) : 특정 속성 추출

스타일 조작하기 : 3가지 방법 가능
  - h1.style.backgroundColor : 캐멀 케이스(카멜 케이스), 주로 사용
  - h1.style['backgroundColor']
  - h1.style['background-color']

문서 객체 생성하기
  - document.createElement(문서 객체 이름) : 문서 객체 생성하고 싶을 때  // 문서를 어떤 문서 아래에 추가할지 지정해줘야 함 = 트리
  - appendChild() 메소드 : 어떤 부모 객체 아래에 자식 개체 추가할 수 있음 ; 부모객체.appendChild(자식 객체)

문서 객체 이동하기
  - appendChild() : 문서 객체 이동할 때도 사용 가능, 문서 객체의 부모는 언제나 하나여야하므로 다른 문서 객체에 추가하면 문서 객체 이동함

문서 객체 제거하기
  - removeChild() 메소드 ; 부모객체.removeChild(자식 객체)
  - parentNode 속성 : 부모 객체와 이미 연결 완료된 문서 객체에 경우 parentNode 속성으로 부모 객체에 접근할 수 있음 ; 문서객체.parentNode.removeChild(문서객체)

이벤트 설정하기 : 모든 문서 객체는 생성되거나 클릭되거나 마우스를 위에 올리거나 할 때 이벤트라는 것이 발생
  - addEventListener() : 이벤트 발생할 때 함수 실행 위해 사용 ; 문서객체.addEventListener(이벤트 이름, 콜백함수) 
    // 이벤트 발생할 때 실행할 콜백함수를 이벤트 리스너 or 이벤트 핸들러라고 부름
  - removeEventListener() : 이벤트 제거할 때 사용 ; 문서객체.removeEventListener(이벤트 이름, 이벤트 리스너)

이벤트 모델 : 이벤트 연결하는 방법, 모든 이벤트 모델의 이벤트 리스너는 첫번째 매개변수로 이벤트 객체 받음
  - 표준 이벤트 모델 : addEventListener() 메소드 사용
  - 고전 이벤트 모델 : 문서 객체가 갖고 있는 on..으로 시작하는 속성에 함수 할당해 이벤트 연결 ex)document.body.onkeyup = (event) => {}
  - 인라인 이벤트 모델 : on..으로 시작하는 속성을 HTML 요소에 직접 넣어서 이벤트 연결 ex)const listener = (event) => {}; <body onkeyup='listener(event)'>; 

키보드 이벤트 
  - keydown : 키 눌릴 때 실행, 키보드 꾹 누르고 있을 때 & 입력 될 때도 실행됨
  - keypress : 키 입력되었을 때 실행, 아시아권 문자는 공백이 들어가기 전까지는 글자수 세지 않음
  - keyup : 키보드에서 키 떨어질 때 실행, 특정 키 꾹 누르고 있으면 글자 수 세지 않음
   // keydown, keypress 이벤트는 웹 브라우저에 따라 아시아권 문자(조합형 문자) 제대로 처리 못하는 문제 있어 일반적으로 keyup 이벤트 사용
  - 키보드 키 코드 : code = 입력한 키, keyCode = 입력한 키를 나타내는 숫자, altKey = Alt키 눌렀는지, ctrlKey = ctrl키 눌렀는지, shiftKey = shift키 눌렀는지
  
이벤트 발생 객체
  - 이벤트 리스너 외부로 분리할 경우 이벤트 발생시킨 객체에 접근하기
    1) event.currentTarget 속성 사용 : () => {}, function () {} 형태 모두 사용 가능
    2) this 키워드 사용 : function () {} 형태로 함수 선언한 경우 사용 가능

글자 입력 양식 이벤트
  - 입력양식(form) : 사용자로부터 어떠한 입력을 받을 때 사용하는 요소  ex) HTML에서 input, textarea, button, select 등
  - 드롭다운 목록 활용 : select 태그로 구현, multiple 속성 부여하면 ctrl or shift 키 누르고 여러 항목 선택가능
  - 체크 박스 활용 : 체크 상태 확인 할 때는 입력 양식의 checked 속성 사용
  - 라디오 버튼 활용 : 옵션 중 하나만 선택할 수 있게 해주는 요소, checked 속성 사용  // name 속성 입력 안하면 여러개 선택할 수 있고 카테고리 구분 없이 선택, 선택취소 불가능 => name 속성 꼭!

기본 이벤트 막기
  - 기본이벤트 : 어떤 이벤트 발생했을 때 웹 브라우저가 기본적으로 처리해주는 것  ex) 컨텍스트 메뉴(context menu) : 웹 브라우저에서 이미지 등에 마우스 오른쪽 버튼 클릭했을 때 출력 
  - preventDefault() 메소드 : 기본 이벤트 제거할 때 사용

localStorage 객체
  - localStorage.getItem(키) : 저장된 값 추출, 없으면 undefined 나옴, 객체 속성 추출하는 일반적 형태로 localStorage.키 또는 localStorage[키] 형태
  - localStorage.setItem(키, 값) : 값 저장, 객체에 속성 지정하는 일반적 형태 사용할 수도 있음
  - localStorage.removeItem(키) : 특정 키의 값 제거
  - localStorage.clear() : 저장된 모든 값 제거


*/

// 참고내용
/*
트리(tree)
  - 부모(parent) : 어떤 문서 객체가 있을 때 위에 있는 것
  - 자식(child) : 아래에 있는 것

정규 표현식 : 특정 패턴의 문자열을 찾기 위한 표현 방법으로 유효성 검사 할 때 사용

change 이벤트 : 입력 양식은 값이 변경될 때 change 이벤트 발생하는데, 글자 입력 양식은 입력 양식을 선택(focus)해서 입력하고 선택해제(blur) 할 때 change 이벤트 발생함
  => 입력중에는 change 이벤트 발생하지 않음

*/
