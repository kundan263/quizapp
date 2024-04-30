let data = [
    {
        Q:"Q : When was IPL started?",
        a: "2008",
        b: "2009",
        c: "2007",
        d: "2006",
        ans: "ans1",
    },
    {
        Q:"Q : Which player has made highest numbers of runs in IPL history?",
        a: "Suresh Raina",
        b: "Virat Kohli",
        c: "Chris Gayle",
        d: "Murli Vijay",
        ans: "ans2",
    },
    {
        Q:"Q :Which team has never won the IPL tournament?",
        a: "Kolkata Knight Riders",
        b: "Sunrisers Hyderabad",
        c: "Rajasthan Royals",
        d: "Royal Challengers Bangalore",
        ans: "ans4",
    },
    {
        Q:"Q : Maximum how many foreign players can play in the playing eleven of the IPL match?",
        a: "3",
        b: "5",
        c: "4",
        d: "Not fixed,depends on the decision of the captain of the team",
        ans: "ans3",
    },
    {
        Q:"Q : Which team won IPL title in the year 2012?",
        a: "CSK",
        b: "RR",
        c: "KKR",
        d: "DC",
        ans: "ans3",
    },
    {
        Q: "Q : Who has hit most sixes in all the IPL Tournaments?",
        a: "Rohit Sharma",
        b: "Suresh Raina",
        c: "Chris Gayle",
        d: "AB de Villiers",
        ans: "ans3",
    },
   
    {
        Q: "Q : Who is the current head coach of the Delhi Capitals?",
        a: "Virender Sehwag",
        b: "Rahul Dravid",
        c: "Ricky Ponting",
        d: "Pravin Amre",
        ans: "ans3"
    },
    {
        Q: "Q : Who holds the record for trhe fastest IPL century?",
        a: "Virat Kohli",
        b: "Rohit Sharma",
        c: "AB de Villiers",
        d: "Chris Gayle",
        ans: "ans4"
    },
    {
        Q: "Q : Who is the current Captain of the Chennai Super Kings?",
        a: "Ravinder Jadeja",
        b: "Ruturaj Gaikwad",
        c: "MS Dhoni",
        d: "Suresh Raina",
        ans: "ans2"
    },
    {
        Q: "Q :  What is the name of the stadium that will host the opening match of IPL 2024?",
        a: "Eden Gardens",
        b: "M. Chinnaswamy Stadium",
        c: "Wankhede Stadium",
        d: "M.A.Chidambaram Stadium",
        ans: "ans3"
    },
]

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options")

let num = 0;
let score =0;
let myScore = document.querySelector(".myScore");
let nextBtn= document.getElementById("next");

question.innerHTML=data[num].Q;
option1.innerHTML =data[num].a;
option2.innerHTML =data[num].b;
option3.innerHTML =data[num].c;
option4.innerHTML =data[num].d;

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
}

function next(){
   
    let checkedAns = checkAns();
    if(checkedAns == data[num].ans){
        score++;
    }
    num++;
    
    disSelect();

   if(num < data.length){
question.innerHTML=data[num].Q;
option1.innerHTML =data[num].a;
option2.innerHTML =data[num].b;
option3.innerHTML =data[num].c;
option4.innerHTML =data[num].d;
   } else{
      myScore.innerHTML=` You Scored ${score}/${data.length} <br/><br/>
      <button onclick="location.reload()">Start Again</button>`

      nextBtn.style.display="none";
      document.querySelector(".btn").style.backgroundColor="lightBlue";
   }
    

}

function checkAns(){
   let ans;
   answers.forEach((curElement)=>{
    if(curElement.checked){
        ans = curElement.id;
    }
   })
   return ans;
}