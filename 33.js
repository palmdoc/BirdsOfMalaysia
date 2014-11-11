
if(!navigator.cookieEnabled) NSB.MsgBox('Please turn cookies on.');
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
var NSBCurrentForm = frmSplash;

window.addEventListener('load', function() {
  frmSplash.style.display = 'block';

  NSB.addProperties(imgSplash);
  NSB.addDisableProperty(btnNext);
  NSB.addProperties(btnNext);

  frmSplash.style.display = 'none';
  
}, false);
frmSplash.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSplash);

imgSplash.onclick = function() { savethefunction_rvar="";
    nsbDOMAttr(frmSplash,'style.display',"none");
    nsbDOMAttr(frmMain,'style.display',"block");
return savethefunction_rvar; }

btnNext.onclick = function() { savethefunction_rvar="";
     nsbDOMAttr(frmSplash,'style.display',"none");
    nsbDOMAttr(frmMain,'style.display',"block");
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmMain.style.display = 'block';

  NSB.addProperties(hdrMain);
  NSB.addDisableProperty(hdrMain);


  if(typeof(hdrMain.onclick)=='function'){
    if(typeof(hdrMain_left)!='undefined') hdrMain_left.onclick=function() {hdrMain.onclick(hdrMain_left.getAttribute('nsbvalue'))};
    if(typeof(hdrMain_right)!='undefined') hdrMain_right.onclick=function() {hdrMain.onclick(hdrMain_right.getAttribute('nsbvalue'))}};


  NSB.List_jqm_init14('lstMain','Select,Introduction,Getting Started',false,'100%',false,false);

  lstMain.refresh=function(){if (typeof lstMain_ref!='undefined') setTimeout(NSB.refresh,100,lstMain_ref)};

  NSB.addProperties(lstMain);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstMain_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmMain.style.display = 'none';
  
}, false);
frmMain.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmMain);

lstMain.onclick = function(choice) { savethefunction_rvar="";
  switch (True) {
case ((choice) == 1):
    nsbDOMAttr(frmMain,'style.display',"none");
    nsbDOMAttr(frmIntroduction,'style.display',"block");
	break;
case ((choice) == 2):
    nsbDOMAttr(frmMain,'style.display',"none");
    nsbDOMAttr(frmGettingStarted,'style.display',"block");

  }
return savethefunction_rvar; }

hdrMain.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "About") {
    nsbDOMAttr(frmMain,'style.display',"none");
    nsbDOMAttr(frmAbout,'style.display',"block");
  }
  if(choice == "Contact") {
    nsbDOMAttr(frmMain,'style.display',"none");
    nsbDOMAttr(frmFeedback,'style.display',"block");
  }

return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmView.style.display = 'block';

  NSB.addProperties(hdrView);
  NSB.addDisableProperty(hdrView);


  if(typeof(hdrView.onclick)=='function'){
    if(typeof(hdrView_left)!='undefined') hdrView_left.onclick=function() {hdrView.onclick(hdrView_left.getAttribute('nsbvalue'))};
    if(typeof(hdrView_right)!='undefined') hdrView_right.onclick=function() {hdrView.onclick(hdrView_right.getAttribute('nsbvalue'))}};


  if (true) {HTMLview1_ref = new IScroll(HTMLview1_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLview1.refresh=function(){setTimeout(HTMLview1_ref.refresh(),100)}}
  NSB.addProperties(HTMLview1,HTMLview1_scroller);
  NSB.addProperties(imgView1);
  frmView.style.display = 'none';
  
}, false);
frmView.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmView);

hdrView.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {


  switch (True) {
      case ((backlink) == "sunbirds"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmSunbirds,'style.display',"block");
	break;
      case ((backlink) == "barbets"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmBarbets,'style.display',"block");
	break;
      case ((backlink) == "beeeaters"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmBeeEaters,'style.display',"block");
	break;
      case ((backlink) == "bulbuls"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmBulbuls,'style.display',"block");
	break;
      case ((backlink) == "introduction"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmIntroduction,'style.display',"block");
	break;
      case ((backlink) == "sparrows"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmSparrows,'style.display',"block");
	break;
    case ((backlink) == "tencommon"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmTenCommon,'style.display',"block");
	break;
          case ((backlink) == "othercommon"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmOtherCommon,'style.display',"block");
  }

}



return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmAbout.style.display = 'block';

  NSB.addProperties(hdrAbout);
  NSB.addDisableProperty(hdrAbout);


  if(typeof(hdrAbout.onclick)=='function'){
    if(typeof(hdrAbout_left)!='undefined') hdrAbout_left.onclick=function() {hdrAbout.onclick(hdrAbout_left.getAttribute('nsbvalue'))};
    if(typeof(hdrAbout_right)!='undefined') hdrAbout_right.onclick=function() {hdrAbout.onclick(hdrAbout_right.getAttribute('nsbvalue'))}};


  if (true) {HTMLAbout_ref = new IScroll(HTMLAbout_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLAbout.refresh=function(){setTimeout(HTMLAbout_ref.refresh(),100)}}
  NSB.addProperties(HTMLAbout,HTMLAbout_scroller);
  frmAbout.style.display = 'none';
  
}, false);
frmAbout.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmAbout);

hdrAbout.onclick = function(choice) { savethefunction_rvar="";
          if(choice == "Back") {
        nsbDOMAttr(frmAbout,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
        }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmFeedback.style.display = 'block';

  NSB.addProperties(hdrFeedback);
  NSB.addDisableProperty(hdrFeedback);


  if(typeof(hdrFeedback.onclick)=='function'){
    if(typeof(hdrFeedback_left)!='undefined') hdrFeedback_left.onclick=function() {hdrFeedback.onclick(hdrFeedback_left.getAttribute('nsbvalue'))};
    if(typeof(hdrFeedback_right)!='undefined') hdrFeedback_right.onclick=function() {hdrFeedback.onclick(hdrFeedback_right.getAttribute('nsbvalue'))}};


  NSB.List_jqm_init14('lstFeedback','Feedback is most welcome:, Send Email',false,'100%',false,false);

  lstFeedback.refresh=function(){if (typeof lstFeedback_ref!='undefined') setTimeout(NSB.refresh,100,lstFeedback_ref)};

  NSB.addProperties(lstFeedback);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstFeedback_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmFeedback.style.display = 'none';
  
}, false);
frmFeedback.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmFeedback);

hdrFeedback.onclick = function(choice) { savethefunction_rvar="";
        if(choice == "Back") {
        nsbDOMAttr(frmFeedback,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
        }
return savethefunction_rvar; }

lstFeedback.onclick = function(choice) { savethefunction_rvar="";

switch (True) {
  case ((choice) == 1):
    location = "mailto:amarhss@gmail.com?subject=Birds of Malaysia Feedback";

}


return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmIntroduction.style.display = 'block';

  NSB.addProperties(hdrIntro);
  NSB.addDisableProperty(hdrIntro);


  if(typeof(hdrIntro.onclick)=='function'){
    if(typeof(hdrIntro_left)!='undefined') hdrIntro_left.onclick=function() {hdrIntro.onclick(hdrIntro_left.getAttribute('nsbvalue'))};
    if(typeof(hdrIntro_right)!='undefined') hdrIntro_right.onclick=function() {hdrIntro.onclick(hdrIntro_right.getAttribute('nsbvalue'))}};


  NSB.List_jqm_init14('lstIntro','Sections:,Bird Ethics, How to watch birds, Interesting Facts About Birds',true,'100%',false,false);
  lstIntro_ref = new IScroll(lstIntro_scroller,{ mouseWheel:true, scrollbars:true, bounce:true, zoom:false,click:iScrollClick()});
  lstIntro.refresh=function(){if (typeof lstIntro_ref!='undefined') setTimeout(NSB.refresh,100,lstIntro_ref)};
  NSB.addProperties(lstIntro, lstIntro_scroller);

  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstIntro_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  if (true) {HTMLviewIntro_ref = new IScroll(HTMLviewIntro_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLviewIntro.refresh=function(){setTimeout(HTMLviewIntro_ref.refresh(),100)}}
  NSB.addProperties(HTMLviewIntro,HTMLviewIntro_scroller);
  frmIntroduction.style.display = 'none';
  
}, false);
frmIntroduction.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmIntroduction);
hdrIntro.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
    nsbDOMAttr(frmIntroduction,'style.display',"none");
    nsbDOMAttr(frmMain,'style.display',"block");
    }
return savethefunction_rvar; }

lstIntro.onclick = function(choice) { savethefunction_rvar="";
  backlink = "introduction";
    switch (True) {
  case ((choice) == 1):
    filename = "chapters/Introduction/BirdEthics.html";
    imglink = "chapters/Introduction/BirdEthics.jpg";
    fileread(filename);
    viewpageintro();
	break;
  case ((choice) == 2):
    filename = "chapters/Introduction/HowToWatchBirds.html";
    imglink = "chapters/Introduction/HowToWatchBirds.jpg";
    fileread(filename);
    viewpageintro();
	break;
  case ((choice) == 3):
    filename = "chapters/Introduction/InterestingFactsAboutBirds.html";
    imglink = "chapters/Introduction/InterestingFactsAboutBirds.jpg";
    fileread(filename);
    viewpageintro();
    }
return savethefunction_rvar; }

function viewpageintro() { savethefunction_rvar="";
    nsbDOMAttr(frmIntroduction,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();
return savethefunction_rvar; }





window.addEventListener('load', function() {
  frmGettingStarted.style.display = 'block';

  NSB.addProperties(hdrGettingStarted);
  NSB.addDisableProperty(hdrGettingStarted);


  if(typeof(hdrGettingStarted.onclick)=='function'){
    if(typeof(hdrGettingStarted_left)!='undefined') hdrGettingStarted_left.onclick=function() {hdrGettingStarted.onclick(hdrGettingStarted_left.getAttribute('nsbvalue'))};
    if(typeof(hdrGettingStarted_right)!='undefined') hdrGettingStarted_right.onclick=function() {hdrGettingStarted.onclick(hdrGettingStarted_right.getAttribute('nsbvalue'))}};


  NSB.List_jqm_init14('lstGettingStarted','Sections:,10 Common Garden Birds, Other Reasonably Common Garden Birds',true,'97%',false,false);
  lstGettingStarted_ref = new IScroll(lstGettingStarted_scroller,{ mouseWheel:true, scrollbars:true, bounce:true, zoom:false,click:iScrollClick()});
  lstGettingStarted.refresh=function(){if (typeof lstGettingStarted_ref!='undefined') setTimeout(NSB.refresh,100,lstGettingStarted_ref)};
  NSB.addProperties(lstGettingStarted, lstGettingStarted_scroller);

  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstGettingStarted_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  if (true) {HTMLGetingStarted_ref = new IScroll(HTMLGetingStarted_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLGetingStarted.refresh=function(){setTimeout(HTMLGetingStarted_ref.refresh(),100)}}
  NSB.addProperties(HTMLGetingStarted,HTMLGetingStarted_scroller);
  frmGettingStarted.style.display = 'none';
  
}, false);
frmGettingStarted.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmGettingStarted);
hdrGettingStarted.onclick = function(choice) { savethefunction_rvar="";
     if(choice == "Back") {
    nsbDOMAttr(frmGettingStarted,'style.display',"none");
    nsbDOMAttr(frmMain,'style.display',"block");
    }
return savethefunction_rvar; }

lstGettingStarted.onclick = function(choice) { savethefunction_rvar="";
    switch (True) {
case ((choice) == 1):
 //lstTenCommon.refresh()
    nsbDOMAttr(frmGettingStarted,'style.display',"none");
    nsbDOMAttr(frmTenCommon,'style.display',"block");

	break;
case ((choice) == 2):
 //lstOtherCommon.refresh()
    nsbDOMAttr(frmGettingStarted,'style.display',"none");
    nsbDOMAttr(frmOtherCommon,'style.display',"block");

    }
return savethefunction_rvar; }








window.addEventListener('load', function() {
  frmTenCommon.style.display = 'block';

  NSB.addProperties(hdrTenCommon);
  NSB.addDisableProperty(hdrTenCommon);


  if(typeof(hdrTenCommon.onclick)=='function'){
    if(typeof(hdrTenCommon_left)!='undefined') hdrTenCommon_left.onclick=function() {hdrTenCommon.onclick(hdrTenCommon_left.getAttribute('nsbvalue'))};
    if(typeof(hdrTenCommon_right)!='undefined') hdrTenCommon_right.onclick=function() {hdrTenCommon.onclick(hdrTenCommon_right.getAttribute('nsbvalue'))}};


  NSB.List_jqm_init14('lstTenCommon','List,Yellow Vented Bulbul,Magpie Robin,Common Myna,Eurasian Tree Sparrow,Zebra Dove,Spotted Dove,Asian Glossy Starling,Black-naped Oriole,White-throated Kingfisher,Common Iora',true,'100%',false,false);
  lstTenCommon_ref = new IScroll(lstTenCommon_scroller,{ mouseWheel:true, scrollbars:true, bounce:true, zoom:false,click:iScrollClick()});
  lstTenCommon.refresh=function(){if (typeof lstTenCommon_ref!='undefined') setTimeout(NSB.refresh,100,lstTenCommon_ref)};
  NSB.addProperties(lstTenCommon, lstTenCommon_scroller);

  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstTenCommon_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmTenCommon.style.display = 'none';
  
}, false);
frmTenCommon.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmTenCommon);

hdrTenCommon.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
    nsbDOMAttr(frmTenCommon,'style.display',"none");
    nsbDOMAttr(frmGettingStarted,'style.display',"block");
    }
return savethefunction_rvar; }

lstTenCommon.onclick = function(choice) { savethefunction_rvar="";
  backlink = "tencommon";
switch (True) {
  case ((choice) == 1):
    filename = "chapters/Bulbuls/Yellow-ventedBulbul.html";
    imglink = "chapters/Bulbuls/Yellow-ventedBulbul.jpg";
    fileread(filename);
    viewpagetencommon();
	break;
  case ((choice) == 2):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 3):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 4):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 5):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 6):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 7):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 8):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 9):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 10):
  _msgbox_confirm("Not done yet");
}
return savethefunction_rvar; }

function viewpagetencommon() { savethefunction_rvar="";
    nsbDOMAttr(frmTenCommon,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();
return savethefunction_rvar; }
window.addEventListener('load', function() {
  frmOtherCommon.style.display = 'block';

  NSB.addProperties(hdrOtherCommon);
  NSB.addDisableProperty(hdrOtherCommon);


  if(typeof(hdrOtherCommon.onclick)=='function'){
    if(typeof(hdrOtherCommon_left)!='undefined') hdrOtherCommon_left.onclick=function() {hdrOtherCommon.onclick(hdrOtherCommon_left.getAttribute('nsbvalue'))};
    if(typeof(hdrOtherCommon_right)!='undefined') hdrOtherCommon_right.onclick=function() {hdrOtherCommon.onclick(hdrOtherCommon_right.getAttribute('nsbvalue'))}};


  NSB.List_jqm_init14('lstOtherCommon','List,Blue-throated Bee-eater,Blue-tailed Bee-eater ,Bay (Chestnut)-headed Bee-eater,Pink-necked Green Pigeon,Rock Pigeon ,Common (Long-tailed) Tailorbird,Brown Throated Sunbird ,Scarlet-backed Flowerpecker,Pied fantailed Flycatcher ,Asian Brown Flycatcher ,Pied Triller ,Common Flameback ,Coppersmith Barbet ,Lineated Barbet',true,'100%',false,false);
  lstOtherCommon_ref = new IScroll(lstOtherCommon_scroller,{ mouseWheel:true, scrollbars:true, bounce:true, zoom:false,click:iScrollClick()});
  lstOtherCommon.refresh=function(){if (typeof lstOtherCommon_ref!='undefined') setTimeout(NSB.refresh,100,lstOtherCommon_ref)};
  NSB.addProperties(lstOtherCommon, lstOtherCommon_scroller);

  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstOtherCommon_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmOtherCommon.style.display = 'none';
  
}, false);
frmOtherCommon.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmOtherCommon);

hdrOtherCommon.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
    nsbDOMAttr(frmOtherCommon,'style.display',"none");
    nsbDOMAttr(frmGettingStarted,'style.display',"block");
    }
return savethefunction_rvar; }

lstOtherCommon.onclick = function(choice) { savethefunction_rvar="";
  switch (True) {
  case ((choice) == 1):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 2):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 3):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 4):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 5):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 6):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 7):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 8):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 9):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 10):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 11):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 12):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 13):
  _msgbox_confirm("Not done yet");
	break;
  case ((choice) == 14):
  _msgbox_confirm("Not done yet");
}
return savethefunction_rvar; }


window.addEventListener('orientationchange', function(){window.scrollTo(0,0)});
window.addEventListener('load', function() {
  browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
  frmSplash.style.display = 'block';
  Main();
  if (typeof(frmSplash.onshow)=='function') frmSplash.onshow();
  
}, false);

backlink = "";
filename = "";
imglink = "";

function fileread(filename) { savethefunction_rvar="";
    req=ReadFile(filename);
    if(req.status==200 || req.status==0) {
    HTMLview1.innerHTML = req.responseText;
    imgView1.src = imglink;
 } else {
    _msgbox_confirm("File could not be read");
    }
return savethefunction_rvar; }

