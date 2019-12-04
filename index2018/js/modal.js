var url = document.referrer;
if (url.match(/as-03hon/)) {
  var modalelements = parent.document.getElementsByClassName('modal');
  for (var i=0; modalelements.length; i++) {
    modalelements[i].parentNode.removeChild(modalelements[i]);
  }
}
