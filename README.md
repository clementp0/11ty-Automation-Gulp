# Eleventy_flatCMS (POC & gh-pages) Repository

## Dependencies

* clean-css
* postcss
* precss

### Start

```bash
# clone the source file repository
git clone git@github.com:clementp0/Eleventy_flatCMS.git

# Start eleventy server and gulp watch simultaneously
gulp watch & eleventy --serve --formats=md,css,html,gif,js,svg

# It will build the site in the output directory called "EleventyMeetup_output". Can be changed here :
};
module.exports = {
    dir: {
        output: "../EleventyMeetup_output"
    }
};

```
