$( "[type=checkbox]" ).click(function(){
    toggleAPI(this);
});

function toggleAPI(toggler){

    var url = '/' + toggler.name + '?status=';

    if(toggler.checked)
        url += '1';
    else
        url += '0';

    console.log(url);
    requestURL(url);

}

function requestURL(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
