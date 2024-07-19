let questions = [
    {
     num: 1,
     question : " Full form of HTML is?",
     answer : "A. Hypertext Markup Language",
     option : ["A. Hypertext Markup Language",
        "B. High Text Machine Language",
                "C. Hypertext and Links Machine Language",
               "D. None of these" 

     ]
    },
    {
     num: 2,
     question : " Land of pakistan has total area of?",
     answer : "D. 796,096 sq.kilometers",
     option : ["A. 465,890 sq.kilometers",
                "B. 560,189 sq.kilometers",
               "C. 912,815 sq.kilometers" ,
               "D. 796,096 sq.kilometers",
     ]
     },

    {
     num: 3,
     question : " Pick the correct synonym for word Abstain?",
     answer : "A. Refrain",
     option : ["A. Refrain",
        "B. Indulge",
"C. Consume",
"D. Continue",

     ]
    },
    {
     num: 4,
     question : " Gamma rays are fast moving?",
     answer : "B. Photons",
     option : [ "A. Electrons",
        "B. Photons",
"C. Protons",
"D. Neutrons",

     ]
    },
    {
     num: 5,
     question : " Carbon dioxide reacts with water to form?",
     answer : "C. Carboxylic acids",
     option : [ "B. Carbonic acid",
"C. Ether",
"C. Carboxylic acids",
"D. Aldehyde",

     ]
    },
    {
     num: 6,
     question : " Most of the neurons in the human brain are?",
     answer : "B. Sensory neurons",
     option : [ "A. Motor neurons",
        "B. Sensory neurons",
"C. Interneurons",
"D. Auditory neurons",

     ]
    }
]
let questioncount = 0;
let questionnum = 1;
let score = 0;


let nextbutt = document.getElementById("change");

nextbutt.onclick = () => {
    questioncount ++;
    showquestion(questioncount)

    questionnum ++;
    questioncounter(questionnum);
}
function showquestion(index){
     const questiontext = document.querySelector('.questiontext');
     questiontext.textContent = `${questions[index].num}.${questions[index].question}`;

let choices = document.querySelector(".choices")
let optionlist = `
<div class = "option"><p>${questions[index].option[0]}</p></div>
<div class = "option"><p>${questions[index].option[1]}</p></div>
<div class = "option"><p>${questions[index].option[2]}</p></div>
<div class = "option"><p>${questions[index].option[3]}</p></div>`

choices.innerHTML = optionlist;

}
function countquestion(index){
  let quesnum = document.getElementById("quiznum")
  quesnum.textContent =`${index} of ${questions.length} Questions`
}
let options = document.querySelectorAll(".option")
for(i=0; i<options.length; i++){
    options[i].setAttribute('onclick', 'choosedoption(this)')
}
function choosedoption(answer){
    let userans = answer.textContent;
    let correctans = questions[questioncount].answer;
    let alloptions = choices.children.length;

    if(userans == correctans){
        answer.classlist.add("correct")
        console.log("correct");
        score++;
    }
    else{
        answer.classlist.add("incorrect")
        console.log("incorrect");
    }

    for(let i=0; i<alloptions; i++){
       if(optionlist.children[i].textContent == correctans){
        optionlist.children[i].setAttribute('class', 'option correct')
       }
    }
}
let scoretext = document.querySelector('.score');
scoretext.textContent = `Score: ${score} / ${questions.length}`;

console.log(score);