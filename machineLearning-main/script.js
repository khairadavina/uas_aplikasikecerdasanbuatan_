var parameters = new URLSearchParams(window.location.search);
var activeHeart = document.getElementById("activeheart");
var inputs = {
  Rest: parseInt(parameters.get("rest")),
  Smoke: parseInt(parameters.get("smoke")),
  Gender: parseInt(parameters.get("sex")),
  Exercise: parseInt(parameters.get("exercise")),
  Hgt: parseInt(parameters.get("height")),
  Wgt: parseInt(parameters.get("weight")),
};

var options = {
    type: "regression"
};

var modelDetails = {
    model: "model/model.json",
    metadata: "model/model_meta.json",
    weights: "model/model.weights.bin"
};

var neuralNetwork = ml5.neuralNetwork(options);

function predict(){
    neuralNetwork.predict(inputs, function (err, results) {
        if(err){
            console.log(err);
            return;
        };

        var result = results[0];
        // We have a prediction
        activeHeart.innerHTML = result.Active;
         console.log(result);
        
    });
}
neuralNetwork.load(modelDetails, predict);