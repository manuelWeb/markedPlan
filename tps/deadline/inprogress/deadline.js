var html = document.body.innerHTML,
  dates = html.match(/[0-9]{2}\/[0-9]{2}\/17/ig);
// trier dates ordre croissant
dates.sort(function(a, b) {
  var aa = a.split('/').reverse().join(),
    bb = b.split('/').reverse().join();
  return aa < bb ? -1 : (aa > bb ? 1 : 0);
});

var selTag = document.getElementsByTagName('*'),
  ary = [], cpt=0;
var n = 0;
// boucle sur toutes les balises avec date
for (var i = 0; i < selTag.length; i++) {
  if (selTag[i].textContent === dates[0]) {
    console.info('date_1 ' + selTag[i].innerHTML);
    ary[0] = selTag[i];
  }else if(selTag[i].textContent === dates[1]) {
    console.log('date_2 ' + selTag[i].innerHTML);
    ary[1] = selTag[i];
  }else if(selTag[i].textContent === dates[2]) {
    if(selTag[i].length == 0) {
      console.log('date_3 ' + selTag[i].innerHTML);
      ary[2] = selTag[i];
    }else{
      console.log('date_3 ' + selTag[i].innerHTML);
      ary[2] += selTag[i]; // undefined
      n++;
    }
  }
}
// if(selTag[i].length != 0) console.log(selTag[0].innerHTML);
//  && selTag[i+=1].textContent === dates[2]
// ary.push(selTag[i]);
// ary[0].innerHTML = '<span style="background-color: #FFFF00;">' + dates[0] + '</span>'

// 2- partie wrap dead job
var dead = new RegExp(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ig),
  arydead = [];

function getEltByTxt(matchReg, tag) {
  var tagsel = document.getElementsByTagName(tag),
    i;
  for (i = 0; i < tagsel.length; i++) {
    matchReg.test(tagsel[i].innerHTML) ? arydead.push(tagsel[i]) : false;
  }
}
getEltByTxt(dead, 'td');

// job à valider ou à intégrer
for (var i = 0; i < arydead.length; i++) {
  var colorMoins = i*2;
  // si 5 job on passe bg en jaune FFF000
  if(colorMoins >= 10) colorMoins = 'F';
  arydead[i].innerHTML = '<span style="background-color: #FF'+colorMoins+'000; color: #FFF;">' + arydead[i].innerHTML + '</span>';
}