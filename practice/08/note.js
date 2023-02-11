// 예외 처리

/*
오류 종류
  - 구문 오류(syntax error) : 괄호 개수 잘못 입력하는 등의 오류로 코드 실행조차 안되는 오류, 프로그램 실행 전에 발생
  - 예외(exception) or 런타임 오류 : 문법적 오류 제외하고 코드 실행 중간에 발생하는 오류(TypeError, ReferenceError, RangeError) => 처리하는 것 = 예외 처리(exception handling)

예외처리
  - 기본 예외 처리 : 조건문 사용해 예외 방생하지 않게 만드는 것
  - 고급 예외 처리 : try catch finally 구문 사용해 예외 처리하는 방법

예외 객체 : try catch 구문 사용할 때 catch 괄호 안에 입력하는 식별자, 일반적으로 e나 exception 식별자 사용
  - 예외 객체 속성
    > name : 예외 이름
    > message : 예외 메시지

예외 강제 발생 : throw 키워드 사용


*/
