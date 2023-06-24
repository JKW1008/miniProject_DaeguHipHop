var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(35.827704, 128.687377), // 지도의 중심 좌표
    level: getMapLevel(), // 지도의 초기 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

var imageSrc = "./images/Header/logo.png", // 마커 이미지의 주소입니다
  imageSize = new kakao.maps.Size(75, 60), // 마커 이미지의 크기입니다
  imageOption = { offset: new kakao.maps.Point(27, 69) };

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(35.827704, 128.687377);

var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage,
});

marker.setMap(map);

function getMapLevel() {
  var width = window.innerWidth; // 현재 창의 너비

  if (width < 768) {
    return 3; // 확대 레벨 1
  } else if (width < 1024) {
    return 4; // 확대 레벨 2
  }
}

function resizeMap() {
  var center = marker.getPosition();
  var level = getMapLevel();
  map.setLevel(level);
  map.setCenter(center);
}

window.addEventListener("resize", function () {
  resizeMap();
});

// 페이지 로딩 시 초기 마커 중앙 정렬, 확대 레벨 조정을 위해 resizeMap 함수 호출
resizeMap();
