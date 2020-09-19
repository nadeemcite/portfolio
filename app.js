function link(link = null) {
  switch (link) {
    case "li":
      window.open("https://www.linkedin.com/in/nadeem-sajjad/");
      break;
    case "git":
      window.open("https://github.com/nadeemcite");
      break;
    default:
      window.location.href = "mailto:nadeem.sajjad.1991@gmail.com";
  }
}
function toggleDiv(event = { key: "p" }) {
  try {
    console.log(event);
    $(".page").hide();
    $(".page." + event.key.toLowerCase()).slideDown("slow");
  } catch {}
}

$().ready(function () {
  toggleDiv();
  Mousetrap.bind(["p", "t", "k", "g"], toggleDiv);
});
