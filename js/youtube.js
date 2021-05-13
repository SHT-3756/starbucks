 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
    // 'player' => <div id="player"></div> 이 부분이다.
    new YT.Player('player', {
     videoId: 'An6LvWQuj_8', //최조 재생할 유튜브 영상 ID
     playerVars: {
         autoplay: true, //자동 재생 유무
         loop: true, //반복 재생 유무
         playlist: 'An6LvWQuj_8', // 반복재생 할 경우 유투브 영상 ID 목록
     },
     events: {
         onReady: function(event) { //플레이 할것이 준비가 되었다면 실행
            event.target.mute() // 음소거              
         }
     }
   });
}