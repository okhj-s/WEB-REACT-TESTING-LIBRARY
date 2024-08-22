# REACT-TESTING-LIBRARY

## [description]
- TDD 개발 흐름으로 TODO LIST 만들기

## [author]
- 옥현지
    - hyunji-ok(개인계정)
    - okhj159(회사계정)

## [caution]
- 원본 repo(upstream)과 fork repo(origin)의 branch 맞추는 방법 
    - upstream 원격 추가: git remote add upstream <원본 리포지토리 URL>
    - upstream의 변경 사항 가져오기: git fetch upstream
    - 새로운 브랜치 fet를 로컬에서 생성 및 체크아웃: git checkout -b fet upstream/fet
    - 새로운 브랜치를 포크된 리포지토리로 푸시: git push origin fet

## [component architecture]
- TodoForm: input과 button으로 이루어진 form이 있고, submit 이벤트가 발생하면 새로운 항목을 추가 할 수 있어야 한다.
- TodoItem: 각 todo 항목을 보여주는 컴포넌트이다. todo객체를 props로 받아와서 렌더링한다. 텍스트를 클릭하면 텍스트에 삭제선이 그어져야 하고, 우측에 삭제버튼을 누르면 해당 항목이 사라져야 한다.
- TodoList: todos배열을 받아와서 여러개의 TodoItem컴포넌트로 렌더링을 한다.
- TodoApp: 할일 목록 추가, 토글, 삭제 기능이 구현되는 컴포넌트이다.
