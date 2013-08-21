/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


jewel.dom = (function(){
   var $ = Sizzle;
   
   function bind(element,event,handler){
       if(typeof element == "string"){
           element = $(element)[0];
       }
       element.addEventListener(event,handler,false)
   }
   
   function hasClass(el,clsName){
       var regex = new RegExp("(^|\\s)"+clsName+"(\\s|$)");
       return regex.test(el.className);
   }
   
   function addClass(el,clsName){
       if(!hasClass(el,clsName)){
           el.className += " " + clsName;
       }
   }
   
   function removeClass(el,clsName){
       var regex = new RegExp("(^|\\s)"+clsName+"(\\s|$)");
       el.className = el.className.replace(regex,"");
   }
   
   return {
       $            : $,
       hasClass     : hasClass,
       addClass     : addClass,
       bind         : bind,
       removeClass  : removeClass
   }; 
   
})();