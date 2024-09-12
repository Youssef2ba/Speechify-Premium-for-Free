# Speechify-Prenium-for-Free

## Description

Basically, a broke student who can't read finds out about Speechify, but the broke student is limited to the free version, which has a max speaking rate of 1.5x. Too slow, so I made my own.

## Installation

Follow these steps to download and set up the text-to-speech extension:

1. **Download the Files**:
   - Download the two files attached to this project: `manifest.json` and `background.js`.

2. **Open Your Browser's Extensions Page**:
   - For Chrome: Go to `chrome://extensions/`.
   - For Edge: Go to `edge://extensions/`.

3. **Enable Developer Mode**:
   - In the top right corner of the Extensions page, toggle the "Developer mode" switch to turn it on.

4. **Load Unpacked Extension**:
   - Click on the "Load unpacked" button.
   - Select the folder where you saved the `manifest.json` and `background.js` files.

5. **Verify Installation**:
   - Ensure the extension is listed and enabled on the Extensions page.

## Usage

1. **Select Text**:
   - Navigate to any webpage and select the text you want to be read aloud.

2. **Use Keyboard Shortcuts**:
   - Press `Alt + A` to start reading the selected text.
   - Press `Alt + S` to increase the speaking rate.
   - Press `Alt + D` to decrease the speaking rate.
   - Press `Alt + R` to reset the speaking rate to 2x.

## Customization

### Change the Voice

- To change the voice used by the text-to-speech function, open the `background.js` file in a text editor.
- Locate the line that specifies the `voiceName` in the `chrome.tts.speak` function.
- chrome.tts.speak(results[0].result, {'voiceName': 'Microsoft Susan - English (United Kingdom)', 'rate': speakingRate});
- Replace the current voice name with the desired voice name from the extensive list of available voices for various languages.

## Features

- Customizable speaking rate beyond the limitations of free versions of other text-to-speech tools.
- Simple installation and usage with keyboard shortcuts.

## License

This project is licensed under the MIT License.
