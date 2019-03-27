# Eleventy_flatCMS (POC & gh-pages) Repository

## Dependencies

* clean-css
* postcss
* precss
* gulp
* eleventy

### Install dependencies

```bash
# gulp
sudo npm install -g gulp

# clean-css
sudo npm install -g clean-css

# postcss
sudo npm install -g postcss

# precss
sudo npm install -g precss

```
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
With ❤️/ Clement Po
https://clpo.net
