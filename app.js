import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

var i="";
var i1=[];
app.get('/', (req, res) => {
//   res.send('Hello World!');
    res.render("list",{newListItems: i1});
});

app.post('/',(req,res)=>{
    i = req.body.n;
    // console.log(i);
    // res.render("list",{newListItem: i});
    i1.push(i);
    res.redirect("/")
})

app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
})