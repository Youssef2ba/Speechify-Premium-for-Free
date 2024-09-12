let speakingRate = 3.0; // Default speaking rate

chrome.commands.onCommand.addListener(function(command) {
  switch (command) {
    case "speak-selected-text":
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tabId = tabs[0].id; // Get the current tab ID
        chrome.scripting.executeScript({
          target: {tabId: tabId},
          func: () => window.getSelection().toString()
        }, (results) => {
          if (results && results[0] && results[0].result) {
            console.log("Selected text:", results[0].result); // Log the selected text
            chrome.tts.speak(results[0].result, {'voiceName': 'Microsoft Susan - English (United Kingdom)', 'rate': speakingRate});
          } else {
            console.log("No text selected or script execution failed.");
          }
        });
      });
      break;
    case "increase-speed":
      if (speakingRate < 5.0) { // Limit to a maximum of 5.0
        speakingRate += 0.1; // Increment by 0.1
        console.log("Increased speed to:", speakingRate); // Log the new speed
      }
      break;
    case "decrease-speed":
      if (speakingRate > 0.1) { // Prevent negative or zero rate
        speakingRate -= 0.1; // Decrement by 0.1
        console.log("Decreased speed to:", speakingRate); // Log the new speed
      }
      break;
    case "reset-speed":
      speakingRate = 2.0;
      console.log("Reset speed to 2.0"); // Log the reset action
      break;
  }
});