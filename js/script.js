function submitAnswers(){

    var totalScore = 5;
    var personalScore = 0;

    //Create Array Of Inputs
    var inputsGot = new Array(5);

    // Init inputsGot With The Inserted Values
    for(var i = 0; i < inputsGot.length; i++){
        var el = "q" + (i + 1);
        var value = document.forms["quizForm"][el].value;
        if (value == null || value == ""){
            alert("You missed the question n " + (i + 1));
            break;
        } 
        inputsGot[i] = value;
    }

    // Create Array With The Correct Answers
    var correctAnswers = ["b","d","c","b","d"];

    if (inputsGot.length == correctAnswers.length){
        // Get The Number Of Correct Answers
        for(var i = 0; i < correctAnswers.length; i++){
            if (inputsGot[i] == correctAnswers[i]){
                personalScore++;
            }
        }
    }

    // Print Result
    var result = document.querySelector("#result");
    result.innerHTML = `<h3>You scored ${personalScore} of ${totalScore}</h3>`;

    return false;
}