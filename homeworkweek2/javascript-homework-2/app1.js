switch (browser) {
  case "Edge":
    alert("You've got the edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("oOkay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser == "Edge") {
  alert("You've got the edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("oOkay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
