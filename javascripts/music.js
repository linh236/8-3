$(document).ready(function() {
  const musics = [
    "beautifulinwhite.mp4",
    "breathless.mp4",
    "everydayiloveyou.mp4",
    "everytimeitouchyou.mp4",
    "mylove.mp4"
  ];

  let number = Math.floor(Math.random() * 5);
  
  $(".video").html(`
    <video loop="true" autoplay controls>
      <source src="musics/${musics[number]}" type="video/mp4" />
      <source src="musics/${musics[number]}" type="video/ogg" >
    </video>
  `)
})