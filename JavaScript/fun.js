function slide() {
  $(".background li:not(:eq(0))").hide();
  let pos = 0;

  function play() {
    const before = $(".background li").eq(pos);
    const after = $(".background li").eq((pos = (pos + 1) % 3));
    before.fadeOut(800);
    after.fadeIn(800);
  }
  setInterval(play, 3000);
}
$(document).on("ready", slide);
