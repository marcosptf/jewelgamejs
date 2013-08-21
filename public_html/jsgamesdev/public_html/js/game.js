/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

jewel.game = (function(){
    
    var dom = jewel.dom,
    $       = dom.$;
    
    //hide the active screen (if any) and show the screen with the specified #id
    function showScreen(screenID){
//        var activeScreen = $("#game.screen.active")[0],
          var  screen       = $("#"+screenID)[0];
    
        jewel.screens[screenID].run();    
        dom.addClass(screen,"active");
//        if(activeScreen){
//            dom.removeClass(screen,"active");
//        }
//        dom.addClass(screen,"active");
    }
    
    return {
        showScreen : showScreen
    };
     
})();

