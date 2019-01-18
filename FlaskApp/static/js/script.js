$( "[type=checkbox]" ).click(function(){
    callAPI(this);
});

/**
    Constructs the API call
*/
function callAPI(toggler){
    var url = '/' + toggler.name + '?status=';

    if(toggler.checked)
        url += '1';
    else
        url += '0';

    console.log(url);
    requestURL(url);
}

/**
    Makes a GET request to a given URL
*/
function requestURL(url){

    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.className = 'fadedIn';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadingOverlay.className = '';
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}
