// select dom items
const menuBtn = document.querySelector(".menu-btn");


// Set the initial state of the menu
let showMenu = false;

menuBtn.onclick = function(){
    if (!showMenu) {
        menuBtn.classList.add("close");
        $('.main-menu').css('display', 'block');
        $('.setting-menu').css('display', 'block');
        // Reset the menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        $('.main-menu').css('display', 'none');
        $('.setting-menu').css('display', 'none');
    
        // Reset the menu state
        showMenu = false;
    }
};



window.onresize = function() {
    if (window.innerWidth >= 600) {
        menuBtn.classList.remove("close");
        $('.main-menu').css('display', 'block');
        $('.setting-menu').css('display', 'block');
    }else{
        $('.main-menu').css('display', 'none');
        $('.setting-menu').css('display', 'none');
    }
  }
 