// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var informacion="";
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
    console.log("Conectado...");
  
    client.subscribe("skillet776@yahoo.com/IoT");
  
  
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

    console.log("onMessageArrived:"+message.payloadString);
    informacion=(message.payloadString).split(("?"));
    
    
  }
  function fun1(){
    var dat=document.getElementById("info");  
    dat.innerHTML="";
    dat.innerHTML=informacion[0];
    }

    
  
  function fun2(){
    var dat=document.getElementById("info");
    dat.innerHTML="";
    dat.innerHTML=informacion[1];
  }
  

  
