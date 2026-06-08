async function loadQuestions () {
    try {
        const response = await fetch ('http://localhost:3000/api/questions');
        const questions = await response.json ();
        console.log ("Questions recieved in browser: ", questions);

        if (questions.length > 0) {
            document.getElementById ('question-box').innerText = questions[0].question;
        }
    } catch (err) {
        console.error ('Error fetching questions: ', err);
    }
}

export function drawEasyGame () {
    loadQuestions ();
}
// window.onload = loadQuestions;