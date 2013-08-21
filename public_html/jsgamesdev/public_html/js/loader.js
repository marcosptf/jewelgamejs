/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var jewel = {
    screens : {},
    settings: {
        rows         :8,
        cols         :8,
        baseScore    :100,
        numJewelTypes:7
    }
};

//wait while the document is loaded

window.addEventListener("load",function(){
   
    //start dynamic loading
    Modernizr.load([{
     
     //these files are always loaded
     load:[
         "js/libs/sizzle-1.4.4/sizzle.min.js",
         "js/dom.js",
         "js/game.js",
         "js/screen.splash.js",
         "js/screen.main-menu.js",
         "js/board.js"
     ],
     
     //called when all files have finished loading an executing
     complete:function(){
         console.log("all files loaded!");
         jewel.game.showScreen("splash-screen");
     }
            
    }]);
    
},false);

