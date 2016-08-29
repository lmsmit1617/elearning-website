
var isShown = false;
function showMenu() {
	var menu = jQuery("#nav_menu");
	if (isShown) {
  	menu.removeClass("menu_transitions");  
  	jQuery.Deferred(function() {
    	menu.addClass("menu_hidden");
    });    		
  } else {
  		menu.addClass("menu_transitions").removeClass("menu_hidden");
  }
  isShown = !isShown;
}

