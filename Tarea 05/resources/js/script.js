document.addEventListener("DOMContentLoaded", function () {
    function generatePrediction() {
        let userName = document.getElementById('userName').value.trim();
        let greeting = userName ? `¡Hola, ${userName}!` : "¡Hola!";
        console.log(greeting);

        let weatherCondition = document.getElementById('weatherCondition').value.trim();
        if (!weatherCondition) {
            alert("Por favor, ingresa la condición del clima.");
            return;
        }
        console.log(`El clima actual es: ${weatherCondition}`);

        let predictions = [
            "Hoy será un día increíble, ¡disfrútalo!",
            "Mantente alerta, puede haber sorpresas inesperadas.",
            "Será un día productivo si te organizas bien.",
            "No dejes que los pequeños problemas arruinen tu día.",
            "Hoy es un buen día para probar algo nuevo.",
            "Confía en tu intuición, tomará las mejores decisiones por ti."
        ];

        let randomPrediction = Math.floor(Math.random() * predictions.length);
        let prediction = predictions[randomPrediction];
        console.log(prediction);

        document.getElementById('output').innerText = `${greeting}\n${prediction}`;
    }

    document.querySelector("button").addEventListener("click", generatePrediction);
});
