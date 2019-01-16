$( "[type=checkbox]" ).click(function(){
    toggleAPI(this);
});

function toggleAPI(toggler){
    console.log("Name: " + toggler.name + "; Status: " + toggler.checked);
    // Check the "checked" attribute
    // if TRUE:
    //   startAPI(toggler.name)
    // else:
    //   stopAPI(toggler.name)

    /*
        NOTES:
            - encapsulate start/stop options in Python?
    */
}
