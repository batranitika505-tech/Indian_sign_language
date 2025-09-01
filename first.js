function onResults(results) {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) return;
  
    const landmarks = results.multiHandLandmarks[0];
  
   
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];
  
    let gesture = "unknown";
  
   
    if (
      indexTip.y > landmarks[5].y && 
      middleTip.y > landmarks[9].y &&
      ringTip.y > landmarks[13].y &&
      pinkyTip.y > landmarks[17].y
    ) {
      gesture = "fist"; 
    }
    
    else if (thumbTip.y < indexTip.y && thumbTip.y < middleTip.y) {
      gesture = "thumb_up"; 
    }
    
    else if (thumbTip.y > indexTip.y && thumbTip.y > middleTip.y) {
      gesture = "thumb_down"; 
    }
  
    const gestureDictionary = {
      "fist": "Hello",
      "thumb_up": "Yes",
      "thumb_down": "No"
    };
  
    const text = gestureDictionary[gesture] || "Unknown";
    document.getElementById("output").textContent = text;
  
    if (text !== "Unknown") {
      speak(text);
    }
  }