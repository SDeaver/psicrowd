$w.onReady(function () {

});


// show or hide menu on click
export function MenuButton_click(event) {
    if ($w("#MainMenu").hidden) {
	    $w("#MainMenu").show();
    }
    else
    {
        $w("#MainMenu").hide();
    }
}


// fade out if mouse moves away
export function MainMenu_mouseOut(event) {
  
    let FadeOptions = {
        "duration":   250,
        "delay":      0
    };
	
    $w("#MainMenu").hide("fade", FadeOptions);
}
