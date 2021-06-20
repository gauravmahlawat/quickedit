var tab_title = '';
function designMode (results){
  document.designMode= "on";
  document.getElementsByClassName('credits').designMode= "off";
}
chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  chrome.tabs.executeScript(tab.id, {
    code: "document.designMode= 'on'"
  }, designMode);
});