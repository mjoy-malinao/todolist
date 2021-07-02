const express = require("express"); //Mahalaga dapat laging kasama
const bodyParser = require("body-parser"); //Mahalaga dapat laging kasama
const app = express(); //Mahalaga dapat laging kasama
const date = require(__dirname + "/date.js"); // tinatawag na tin yung date.js para magamit natin ang mga code sa loob nito

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs"); //Mahalaga dapat laging kasama KAPAG gumagamit k ng ejs Template
app.use(bodyParser.urlencoded({ extended: true })); //Mahalaga dapat laging kasama para makuha yung data n galing sa html form at kaya natatawag natin ang body katulad ng ganto "req.body.list" kung walang ganto hdini natin matatawag ang body at magkaka error
app.use(express.static("public")); //Mahalaga dapat laging kasama para malagyan ng design ang website. hindi kasi mababasa ang mga css files or mga images kung hindi tinatawag ang folder n pinagagalingan nito at ito ay yung public folder. dapat nasa loob ng public folder si css folder at laman non ay styles.css

app.get("/", function (req, res) {
  //ito ang home route

  /* kapag kinon console.log(date) natin ang date ganto ang lalabas magiging output lng nito ay ganto [function: getDate] its just a function and its called getdate
its not going to actually run that function and give me the return statement which is the actual date that we are loonking for
pero kung console.log(date()) ganto na ipiprint na nito yung gusto nating makuha na output which is yung date.

let day = date(); ganto ang pagtwag kapag isa lang ang function na nasa date.js pero pag marami n kailangan iba n

  let day = date.getDate(); kung gusto mo makuha yung unang fuction

  let day = date.getDay(); kung gusto mo namn makuha yung pangawalng function

*/

  let day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items }); // pinapasa natin ang mga value nila listTitle at newListItems sa list.ejs
});

app.post("/", function (req, res) {
  /*  console.log(req.body); OUTPUT { newItem: 'fdfd', list: 'Work' }
yung fdfd nakuha yan sa website sa ininput ni user
yung Work naman dahil sa listTitle na nasa /work route sa baba na "Work List" hidni kasama makukuha ang word n List
Work lang ang makukuha.


si list ay galing sa list.ejs name ng button. kung saang route pumunta si user halimbawa sa "/work" route
at nag input ng data si user sa textbox at pinindot ni user yung button. yung button kukunin nya kung ano ang current
listTitle na nasa website nya, then gumawa tau ng if else condition kung sakaling nasa "/work" route si user
dapat sa "/work" route pa rin mag add ang mga data.
*/

  if (req.body.list === "Work") {
    let item = req.body.newItem; //para makuha yung ininput sa textbox ni user.
    workItems.push(item); //ina add nya sa dulo ng array kay workItems yung mga ini input ni user sa textbox;
    res.redirect("/work"); // then pupunta sya kay /work route at yung value ni item d2 sa function nato masasave at makukuha ni /work
  } else {
    let item = req.body.newItem; //para makuha yung ininput sa textbox ni user.
    items.push(item); //ina add nya sa dulo ng array kay items yung mga ini input ni user sa textbox;
    res.redirect("/"); // then pupunta sya kay home at yung value ni item d2 sa function nato masasave at makukuha ni home
  }
});

//We're targeting the work route so that we can provide a WORK todo list
app.get("/work", function (req, res) {
  // Work route
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  //Mahalaga dapat laging kasama
  console.log("Server started on port 3000");
});
