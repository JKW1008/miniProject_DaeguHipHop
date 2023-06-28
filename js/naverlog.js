var clientId = "EwTa7LEpqWW0dFhNVFVy";
var callbackUrl = "http://127.0.0.1:5500/index.html";

var naver_id_login = new naver_id_login(
  "EwTa7LEpqWW0dFhNVFVy",
  "http://127.0.0.1:5500/index.html"
);
var state = naver_id_login.getUniqState();
naver_id_login.setButton("green", 4, 60);
naver_id_login.setDomain("http://127.0.0.1:5500");
naver_id_login.setState(state);
naver_id_login.setPopup(true);
naver_id_login.init_naver_id_login();

// alert(naver_id_login.oauthParams.access_token);
// 네이버 사용자 프로필 조회
naver_id_login.get_naver_userprofile("naverSignInCallback()");
// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
function naverSignInCallback() {
  //   alert(naver_id_login.getProfileData("name"));
  //   alert(naver_id_login.getProfileData("email"));
  //   alert(naver_id_login.getProfileData("nickname"));
  //   alert(naver_id_login.getProfileData("gender"));

  console.log(naver_id_login.getProfileData("name"));
  console.log(naver_id_login.getProfileData("email"));
  console.log(naver_id_login.getProfileData("nickname"));
  console.log(naver_id_login.getProfileData("gender"));
  console.log(naver_id_login.getProfileData("age"));
}
