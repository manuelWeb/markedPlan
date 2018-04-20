marked.setOptions({});

var monmd = '';
var url   = "../../md/dl2018.md";
var url   = "md/dl2018.md";

function reqListener() {
  monmd = this.responseText;
  document.getElementById('content').innerHTML = marked(monmd);
  
  // get table tr td[3]
  const table_row = document.querySelectorAll("table tr");
  const regDates  = /[0-9]{2}\/[0-9]{2}\/(17|18)/ig;
  
  const get_td = (tab_tr, td_idx, bgcolor) => {
    const cel = [], txt = [];
    for (let tr of tab_tr) {
      const data_date = tr.querySelectorAll('td')[td_idx];

      if (data_date && data_date.textContent.match(regDates) ){
        var idx = 0;
        cel.push(data_date);
        txt.push(data_date.textContent);

        data_date.style.backgroundColor = bgcolor;
        // console.log(data_date, data_date.textContent);
        idx++;
      }
    }
    // retourne un tableau[tdHtmlCol,tdHtmlCol.txt] // console.log(cel, txt)
    return [cel, txt];
  };

  // retour des td + td.txt :
  // console.log( deadline_td );
  // console.log( deadline_txt );
  const deadline_td = get_td(table_row,3,"#FFFF00")[0];
  const deadline_txt = get_td(table_row,3)[1];
  const dead_sort = sortAryArg(deadline_txt);
  const dead_unique = dead_sort.filter(onlyUnique);

  const date_n_td = get_td(table_row,8,"#FF9900")[0];
  const date_n_txt = get_td(table_row,8)[1];
  const date_n_sort = sortAryArg(date_n_txt);
  const date_n_unique = date_n_sort.filter(onlyUnique);

  function sortAryArg (ary) {
    return ary.sort(function(a, b){
      let aa = a.split('/').reverse().join(),
          bb = b.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
      // console.log(aa < bb ? -1 : (aa > bb ? 1 : 0));
    });
  }

  console.log( 'dead_sort:', dead_sort );
  console.log( 'date_n_sort:', date_n_sort );
  
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  function getIdx(tab1, tab2, classpan, ok) {
    var cpt = 0;
    function addIdx() {
      for (var i = 0; i < tab1.length; i++) {
        if( tab1[i].textContent === tab2[cpt] ) {
          // console.log('job:',cpt,tab1[i],tab1[i].textContent);
          // tab1[i].innerHTML += '<span class="' + classpan + '">' + (cpt + 1) + '</span>'; 
          cpt === 0 ? tab1[i].innerHTML += '<span class="' + ok + '">' + (cpt + 1) + '</span>' : tab1[i].innerHTML += '<span class="' + classpan + '">' + (cpt + 1) + '</span>'; 
        }
      }
    }

    while(cpt < tab1.length) {
      // tab2.shift();
      addIdx();
      cpt++;
    }
  }

  getIdx(deadline_td, dead_unique, "job", "ok");
  getIdx(date_n_td, date_n_unique, "daten", "ok");

} // end reqListener

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.addEventListener("load", reqListener);
xobj.open("GET", url);
xobj.send();

  /*
  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  };
  // console.log(toObject(td_deadline));
  const objTd = toObject(td_deadline);

  */
  
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
