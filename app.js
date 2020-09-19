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
Mousetrap.bind(["command+t", "ctrl+t"], function (e) {
  console.log("Command");
  return false;
});
