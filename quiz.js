function check() {
    
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;    
    
    if (question1 === "yes"){
        correct++;
    }
    if (question2 === "pitch1"){
        correct++;
    }
    if (question3 === "venus3"){
        correct++;
    }
    if (question4 === "sundew2"){
        correct++;
    }
    if (question5 === "waterYes"){
        correct++;
    }
    if(question6 === "Venus Flytrap"){
        correct++;
    }
    
    
    document.getElementById("after-submit").style.visibility = "visible";
    document.getElementById("submit-button").style.visibility = "hidden" ;
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " out of 6 correct.";
}

