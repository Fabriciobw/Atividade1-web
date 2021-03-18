


function loadDoc() {

 	xhtml = new XMLHttpRequest();
  xhtml.onreadystatechange = function() {
    if (xhtml.readyState == 4 && xhtml.status == 200) {
     document.getElementById("textoAjax").innerHTML = xhtml.responseText;
    }
  };
  xhtml.open("GET", "resposta.html", true)
  xhtml.send();
}
