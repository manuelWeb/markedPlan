marked.setOptions({});

var monmd = '';
var url   = "file:///C:/Users/mdevries/Desktop/dl2018.md"
var url   = "assets/dl2018.md"
var url   = "./dl2018.md"

function reqListener() {
  monmd = this.responseText;
  // console.log(monmd)
  document.getElementById('content').innerHTML = marked(monmd);
  

  // add fct on btn deadline
  var html  = document.body.innerHTML,
      dates = html.match(/[0-9]{2}\/[0-9]{2}\/(17|18)/ig);
      regDates = /[0-9]{2}\/[0-9]{2}\/(17|18)/ig;

  function insertAfter(el, referenceNode) {
      referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }
  function insertBefore(el, referenceNode) {
      referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  var btn = document.createElement('button');
  btn.innerHTML = 'deadline';
  // btn.onclick = function () {
  //   console.log(dates, html);
  // }
  
  // inject deadline btn
  const ref = document.querySelector('#tl-id');
  insertBefore(btn, ref);

  // get tabel tr td[3]
  const table_row = document.querySelectorAll("table tr");
  let td_deadline = []
  let td_deadlinetest = []
  let td_deadline_txt = [];
  const td_get_deadline = () => {

    for (let tr of table_row) {
      var data_date = tr.querySelectorAll('td')[3];
      // return td[3] of all tr
      // if (data_date)
      if (data_date && data_date.textContent.match(regDates) ){
        var idx = 0;
        td_deadline.push(data_date);
        data_date.style.backgroundColor = "#FFFF00";
        td_deadline_txt.push(data_date.textContent);
        td_deadlinetest = Array.from(data_date);
        idx++;
      }
    }
    // return td_deadline;
  };
  td_get_deadline();
  console.log(td_deadline, td_deadline[0].textContent, td_deadline_txt[0].split('/'));
  // console.log('fdfklsjf: '+td_deadlinetest)
  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  };
  // console.log(toObject(td_deadline));
  const objTd = toObject(td_deadline);
  console.log(objTd)
  // création tableaux de dates en ordre décroissantes  
  const arry_sort = td_deadline_txt.sort(function(a, b){
    var aa = a.split('/').reverse().join(),
        bb = b.split('/').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
  });
  console.log(arry_sort);
  var cpt = 0;
  for (let txt of arry_sort) {
    console.log(`txt: ${txt}, cellule: `);
    cpt++;
  }
  


}

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.addEventListener("load", reqListener);
xobj.open("GET", url);
xobj.send();

