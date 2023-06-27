function toggleButton(button) {
  if (button === 1) {
    document.getElementById("button1").style.color = "#FECF00";
    document.getElementById("button2").style.color = "#fff";
    document.getElementById("button1").style.textDecoration = "underline";
    document.getElementById("button1").style.textUnderlinePosition = "under";
    document.getElementById("button2").style.textDecoration = "none";

    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
  } else if (button === 2) {
    document.getElementById("button1").style.color = "#fff";
    document.getElementById("button2").style.color = "#FECF00";
    document.getElementById("button2").style.textDecoration = "underline";
    document.getElementById("button2").style.textUnderlinePosition = "under";

    document.getElementById("button1").style.textDecoration = "none";

    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
  }
}
