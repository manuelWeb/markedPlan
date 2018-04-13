/*=================================
=            version 1            =
=================================*/
javascript:(function(){var html  = document.body.innerHTML, dates = html.match(/[0-9]{2}\/[0-9]{2}\/17/ig);
dates.sort(function(a, b){var aa = a.split('/').reverse().join(), bb = b.split('/').reverse().join(); return aa < bb ? -1 : (aa > bb ? 1 : 0); }); var selTag = document.getElementsByTagName('*'), searchText = dates[0], ary = []; for (var i = 0; i < selTag.length; i++) {if (selTag[i].textContent == searchText) {ary.push(selTag[i]); console.log(selTag[i]); } } for (var i = 0; i < ary.length; i++) {ary[i].innerHTML = '<span style="background-color: #FFFF00;">'+ary[0].innerHTML+'</span>'; } var dead = new RegExp(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ig); var arydead = []; function getEltByTxt(matchReg, tag) {var tagsel = document.getElementsByTagName(tag), i; for (i = 0; i < tagsel.length; i++) {matchReg.test(tagsel[i].innerHTML) ? arydead.push(tagsel[i]) : false; } } getEltByTxt(dead,'td'); for (var i = 0; i < arydead.length; i++) {arydead[i].innerHTML = '<span style="background-color: #FF0000; color: #FFF;">'+arydead[i].innerHTML+'</span>'; };})()

/*===============================================================
=            version 2 rafraîchissement doc.location            =
===============================================================*/
(function(){location.reload();var html  = document.body.innerHTML, dates = html.match(/[0-9]{2}\/[0-9]{2}\/17/ig);
dates.sort(function(a, b){var aa = a.split('/').reverse().join(), bb = b.split('/').reverse().join(); return aa < bb ? -1 : (aa > bb ? 1 : 0); }); var selTag = document.getElementsByTagName('*'), searchText = dates[0], ary = []; for (var i = 0; i < selTag.length; i++) {if (selTag[i].textContent == searchText) {ary.push(selTag[i]); console.log(selTag[i]); } }; for (var i = 0; i < ary.length; i++) {ary[i].innerHTML = '<span style="background-color: #FFFF00;">'+ary[0].innerHTML+'</span>'; }; var dead = new RegExp(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ig); var arydead = []; function getEltByTxt(matchReg, tag) {var tagsel = document.getElementsByTagName(tag), i; for (i = 0; i < tagsel.length; i++) {matchReg.test(tagsel[i].innerHTML) ? arydead.push(tagsel[i]) : false; } }; getEltByTxt(dead,'td'); for (var i = 0; i < arydead.length; i++) {arydead[i].innerHTML = '<span style="background-color: #FF0000; color: #FFF;">'+arydead[i].innerHTML+'</span>'; };})();

// test refresh fct
// pourrait fonctionner mais uniquement si la page est du HTML
// <body onload="onrefresh();">

function myfun(){
    window.location.search += '&reload=true';
}
function onrefresh() {
  if (gup("reload") == 'true') {
    // DO whatever want to do.
    var html = document.body.innerHTML,
      dates = html.match(/[0-9]{2}\/[0-9]{2}\/17/ig);
    dates.sort(function(a, b) {
      var aa = a.split('/').reverse().join(),
        bb = b.split('/').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });

    var selTag = document.getElementsByTagName('*'),
      searchText = dates[0],
      ary = [];

    for (var i = 0; i < selTag.length; i++) {
      if (selTag[i].textContent === searchText) ary.push(selTag[i]);
    }

    for (var i = 0; i < ary.length; i++) {
      ary[i].innerHTML = '<span style="background-color: #FFFF00;">' + ary[i].innerHTML + '</span>';
    }

    // highlight outdated task
    var dead = new RegExp(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ig);
    var arydead = [];

    function getEltByTxt(matchReg, tag) {
      var tagsel = document.getElementsByTagName(tag),
        i;
      for (i = 0; i < tagsel.length; i++) {
        if (matchReg.test(tagsel[i].innerHTML)) arydead.push(tagsel[i]);
      }
    }

    getEltByTxt(dead, 'td');

    for (var i = 0; i < arydead.length; i++) {
      arydead[i].innerHTML = '<span style="background-color: #FF0000; color: #FFF;">' + arydead[i].innerHTML + '</span>';
    }
    // end
  }
}



function gup(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null)
    return "";
  else
    return results[1];
}
