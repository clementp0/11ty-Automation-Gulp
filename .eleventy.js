const CleanCSS = require("clean-css");
const postcss = require('postcss')
const precss = require('precss')

module.exports = {

  templateFormats: [
    "md","css","img","html","jpg","png","gif"
  ],
  passthroughFileCopy: true
};
module.exports = {
    dir: {
        output: "../EleventyMeetup_output"
    }
};