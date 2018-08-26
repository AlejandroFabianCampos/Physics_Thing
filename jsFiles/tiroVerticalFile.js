var values = {
}



//declaramos e inicializamos los elementos para mostrar valores
var outMasa = document.getElementById("showMasa");
var outVel = document.getElementById("showVelocidad");
var outGrav = document.getElementById("showGravedad");
//declaramos los objetos de los sliders y despues agregamos la propiedad del elemento que muestra los valores
var masaSlider = document.getElementById("valMasa");
masaSlider.valueSlider = outMasa;
var velSlider = document.getElementById("valVelocidadInicial");
velSlider.valueSlider = outVel;
var gravSlider = document.getElementById("valGravedad");
gravSlider.valueSlider = outGrav;

masaSlider.valueSlider.innerHTML = masaSlider.value; // Mostramos el valor por default de cada slider
velSlider.valueSlider.innerHTML = velSlider.value;
gravSlider.valueSlider.innerHTML = gravSlider.value;

// Actualizamos el slider cada vez que el mismo es modificado
masaSlider.oninput = function() {
    this.valueSlider.innerHTML = this.value;
    valueAct();
}
velSlider.oninput = function() {
    this.valueSlider.innerHTML = this.value;
    valueAct();
}
gravSlider.oninput = function() {
    this.valueSlider.innerHTML = this.value;
    valueAct();
}

// Con las siguientes declaraciones vamos a preparar la informacion necesaria para crear los gráficos

function valueAct() {
    console.log("NUEVA ACTUALIZACION");
    //Vi:g=T
    //vf = vi-g.t
    //vf-vi= -g.t
    //-vi:-g = t
    //tiempo = -velocidadInicial : -gravedad
    //se cancelan los signos asi que es lo mismo ponerlos como positivos o negativos
    var tiempoTotal = velSlider.value/gravSlider.value;
    //Y = Yo+Vi.T-1/2.G.T.T
    //Y = 0+Vi.T-1/2.G.T.T
    //Y = Vi.T-1/2.G.T.T
    var alturaMaxima = velSlider.value*tiempoTotal-(1/2)*gravSlider.value*tiempoTotal*tiempoTotal;
    //var energiaPotencial = masaSlider.value*gravSlider.value*
    var valuesForChart = complexCalc(tiempoTotal,alturaMaxima);
    drawChart(valuesForChart);
}

function complexCalc(tiempoTotal,alturaMaxima){
    var tiempoIndividual = tiempoTotal/4;

    

    for (var i=1;i<=4;i++) {
        tiempoAct = tiempoIndividual*i;
        velocidadAct = velSlider.value-gravSlider.value*tiempoAct;
        alturaAct = velSlider.value*tiempoAct-(1/2)*gravSlider.value*tiempoAct*tiempoAct;

        var valueObject = {
            velocidadIni : Number(velSlider.value), 
            velocidad : velocidadAct,
            tiempo : tiempoAct,
            altura : alturaAct
        }
        
        switch (i) {
            case 1:
                values.value1 = valueObject;
            break;
            case 2:
                values.value2 = valueObject;
            break;
            case 3:
                values.value3 = valueObject;
            break;
            case 4:
                values.value4 = valueObject;
            break;
        
        }
    }

    return values;
}

