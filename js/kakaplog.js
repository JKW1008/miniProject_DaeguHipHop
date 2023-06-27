//JavaScript 키 : 56d51771a4a9d45bce2747686afe4f96
window.Kakao.init("2975eed1ac3f6c9af2d1ec5ba7a1b85b"); // API Key 입력

function kakaoLogin() {
  // 함수 선언
  window.Kakao.Auth.login({
    // 카카오 연동 로그인을 위한 인증, 로그인 될 때 실행됨
    scope: "profile_nickname, account_email, gender", // 가져올 카카오 로그인 정보 중 동의항목 ID 설정
    success: function (authobj) {
      console.log(authobj); // 받아온 오브젝트 데이터를 콘솔로 출력해보기
      window.Kakao.API.request({
        // 로그인 된 상태에서 유저의 로그인 정보(이메일, 닉네임 등) 값을 요청해서 받아오기
        url: "/v2/user/me", //로그인 한 사용자의 정보가 있는 url 지정
        success: (res) => {
          const kakao_account = res.kakao_account; // account 정보 가져오기
          console.log(kakao_account);
        },
      });
    },
  });
}
