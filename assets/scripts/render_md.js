marked.setOptions({});

var monmd = '';
var url = "file:///C:/Users/mdevries/Desktop/dl2018.md"
var url = "./dl2018.md"
var url = "assets/dl2018.md"

function reqListener() {
  monmd = this.responseText;
  // console.log(monmd)
  document.getElementById('content').innerHTML = marked(monmd);
}

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.addEventListener("load", reqListener);
xobj.open("GET", url);
xobj.send();

