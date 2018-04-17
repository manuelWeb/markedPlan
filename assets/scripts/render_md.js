marked.setOptions({});

var monmd = '';
var url   = "./dl2018.md"

function reqListener() {
  monmd = this.responseText;
  document.getElementById('content').innerHTML = marked(monmd);
  



  // get table tr td[3]
  const table_row     = document.querySelectorAll("table tr");
  let regDates        = /[0-9]{2}\/[0-9]{2}\/(17|18)/ig;
  let td_deadline     = [];
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
        // td_deadlinetest = Array.from(data_date);
        idx++;
      }
    }
    // return td_deadline;
  };
  td_get_deadline();
  
  const td_get_deadline_ = (tab_tr,td_idx) => {
    const cel = [], txt = [];
    for (let tr of tab_tr) {
      const data_date = tr.querySelectorAll('td')[td_idx];

      if (data_date && data_date.textContent.match(regDates) ){
        var idx = 0;
        cel.push(data_date);
        txt.push(data_date.textContent)
        // console.log(data_date, data_date.textContent);
        idx++;
      }
    }
    // retourne un tableau[tdHtmlCol,tdHtmlCol.txt] // console.log(cel, txt)
    return [cel, txt];
  };
  // td_get_deadline_(table_row,8);
  // retour des cellules :
  console.log(td_get_deadline_(table_row,3)[0]);
  // retour des cellules.txt :
  console.log(td_get_deadline_(table_row,3)[1]);
  // console.log(td_deadline, td_deadline[0].textContent, td_deadline_txt[0].split('/'));


  // création tableaux de dates en ordre décroissantes  
  const arry_sort = td_deadline_txt.sort(function(a, b){
    var aa = a.split('/').reverse().join(),
        bb = b.split('/').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
  });
  // console.log(td_deadline[0].textContent);
  
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }
  const arry_date_unique = arry_sort.filter(onlyUnique);
  /*
  console.log('td_deadline: ', td_deadline );
  console.log('arry_sort: ', arry_sort);
  console.log('arry_date_unique: ', arry_date_unique);
  console.log(td_deadline,arry_sort);
  */
  var cpt = 0;
  function getIdx(tab1, tab2) {
    function addIdx() {
      for (var i = 0; i < tab1.length; i++) {
        if( tab1[i].textContent === tab2[cpt] ) {
          // console.log('job:',cpt,tab1[i],tab1[i].textContent);
          tab1[i].innerHTML += '<span class="job">' + (cpt + 1) + '</span>'; 
        }
      }
    }

    while(cpt < tab1.length) {
      // tab2.shift();
      addIdx();
      cpt++;
    }
  }

  // getIdx(td_deadline,arry_sort);
  getIdx(td_deadline,arry_date_unique);
}

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.addEventListener("load", reqListener);
xobj.open("GET", url);
xobj.send();

  /*var cpt = 0;
  for (let txt of arry_sort) {
    console.log(`txt: ${txt}, cellule: `);
    cpt++;
  }*/
  /*
  var html  = document.body.innerHTML,
      dates = html.match(/[0-9]{2}\/[0-9]{2}\/(17|18)/ig);
  */
  /*function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  };
  // console.log(toObject(td_deadline));
  const objTd = toObject(td_deadline);*/
  
  /*
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
  */
