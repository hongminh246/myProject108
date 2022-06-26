function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/piZRvNjow/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("got results");
    if (error) {
        console.log(error);
    } else {
        document.getElementById("mainSub").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("mainHeading").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        mainImg = document.getElementById('mainImg');
        if (results[0].label == "Bark") {
            mainImg.src = 'bark.gif';
        } else if (results[0].label == "Meow") {
            mainImg.src = 'meow.gif';
        } else if (results[0].label == "Roar") {
            mainImg.src = 'roar.gif';
        } else if (result[0].label == "Moo") {
            mainImg.src = 'moo.gif';
        } else {
            mainImg.src = 'listen.gif'
        }
    }
}