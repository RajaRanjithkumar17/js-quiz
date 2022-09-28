var startQuiz = document.getElementById("startQuiz");
var showQuiz = document.getElementById("showQuiz");



function showquestions(){
    var displayQuiz = document.createElement("div");
    
var question = [{

    id:0,
    que : "national language of india?",

    ans :[{false:"tamil"},
          {false:"telugu"},
          {false:"malayalam"},
          {true :"nono"}]
},


{   id:1,
    que : "biggest eagle statue placed in?",

    ans :[  {false:"tamil nadu"},
            {true:"kerala"},
            {false:"moonaar"},
            {false:"mp"}]
},


 {  id:2,
    que : "orgin of rice?",

    ans :[{true:"india"},
          {false:"ua"},
          {false:"italy"},
          {false: "canada"}]
},


{
    id:3,
    que : "current indian GDP?",

    ans :[{true:"19.9"},
          {false:"2.3"},
          {false:"10"},
          {false: "90"}]
    
},


{   id:4,
    que : "tamil nadu current  finance minister?",


    ans :[{true:"PTR"},
          {false:"stalin"},
          {false:"anbil magesh"},
          {false:"dont know"},]
}]


// function identQues(){
//     for(i=0; i<question.length; i++){
//         var id;
//         id++;
        
//     }
// }

let ids= 0;//id++
let property = "que";
let res = question.filter((item) => {
    return item.id == ids;
});

let exactRes = res[0][property];
displayQuiz.innerText = exactRes;

let ids1= 1;//id++
let propert = "que";




let resu = question.filter((item) => {
    return item.id == ids1;
});

let exactResu= resu[0][propert];
displayQuiz.innerText = exactResu;




//Object.keys(question).forEach(key => ( question[key]));

 //displayQuiz.append(Object.keys(question).forEach(key => ( question[key])))
    
   // console.log(question[key]); // the value of the current key.
  //}));



showQuiz.appendChild(displayQuiz);

console.log();



}
startQuiz.addEventListener("click",showquestions())
