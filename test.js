function result(){
    const questions = [document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked'),
    document.querySelector('input[name="q4"]:checked'),
    document.querySelector('input[name="q5"]:checked'),
    document.querySelector('input[name="q6"]:checked'),
    document.querySelector('input[name="q7"]:checked'),
    document.querySelector('input[name="q8"]:checked'),
    document.querySelector('input[name="q9"]:checked'),
    document.querySelector('input[name="q10"]:checked')]

    let score = 0

    for (let i = 0; i < questions.length; i++) {
        if (questions[i]) {
            score += parseInt(questions[i].value);
        }
    }

    const h1Result = document.getElementById('h1-result');
    h1Result.textContent = `Resultado: ${score}`;
    h1Result.style.display = 'block';
    console.log(score);
    console.log(h1Result.style.display);
}