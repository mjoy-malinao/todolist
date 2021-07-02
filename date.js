/* this is how we can create our own modules and require them and get their functionality exported out
of the module to be used anywhere within our project.
so this makes it reusable and way more useful.

*/

/* why the getDate dont have any parenthesis? 

when you add the parenthesis then that means we're actually calling, we're activiting the function.
and we don't want to do that because we want allow the app.js to determine when that function should be called.

*/

/* kapag maraming function sa iisang file ganto kung paano tawagin ito*/

exports.getDate = getDate;

function getDate() {
  const today = new Date(); //kinuha ang date today

  const options = {
    // ginawa natin to para magkaroon tau ng sariling format ng date katulad ng ganto "Friday, May 7"
    weekday: "long", //Friday
    day: "numeric", //7
    month: "long", // May
  }; // ibig sabihin ng long is naka string sya at buo ang pangalan n kukunin pag numeric namn ay number.

  return today.toLocaleDateString("en-US", options); //magiging ganto n yung laman ni day "Friday, May 7"
}

exports.getDay = getDay;

function getDay() {
  const today = new Date(); //kinuha ang date today

  const options = {
    weekday: "long", //Friday
  };

  return today.toLocaleDateString("en-US", options); //magiging ganto n yung laman ni day "Friday, May 7"
}

/* another way gumawa ng function sa js at para maayos at mapaikli p natin ang codes.
sa taas ang unang way pero meron pang mas maikli

giangawa lang natin anonymous ang function at at mag dedelare tau ng variable para d2 parang ganto

var getDate = function(){
};

don't forget yung semicolon sa dulo ng end ng curly braces


exports.getDate = function getDate() {
  let today = new Date(); 

  let options = {
    
    weekday: "long",
    day: "numeric", 
    month: "long", 
  }; 

  return today.toLocaleDateString("en-US", options); 

 
}

exports.getDay = function getDay() {

  let today = new Date(); //kinuha ang date today

  let options = {
    weekday: "long", //Friday
  };

  return today.toLocaleDateString("en-US", options); //magiging ganto n yung laman ni day "Friday, May 7"


}

*/
