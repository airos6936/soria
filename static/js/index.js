//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
    
	console.log("Encendido");
    alert("led on");
    sendMessage("On");
}
function LED1_Off(){	
	console.log("Apagado");
    alert("led off");
    sendMessage("Off");
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "skillet776@yahoo.com",
    password: "1993orellana768",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conexion Establecida");
	
    client.subscribe("skillet776@yahoo.com/test");
    sendMessage("hola desde mii web");
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    mensaje=message.payloadString.split("= ");
    document.getElementById("sensor").innerHTML=mensaje[1];
    console.log("MensajeRecibido:"+message.payloadString);

  }
    function onMessageArrived(message) {
    mensaje=message.payloadString.split("= ");
    document.getElementById("sensor1").innerHTML=mensaje[1];
    console.log("MensajeRecibido:"+message.payloadString);  

  function sendMessage(Texto){
    message = new Paho.MQTT.Message(Texto);
    message.destinationName = "skillet776@yahoo.com/test1";
    client.send(message);
  }
  
  

  
