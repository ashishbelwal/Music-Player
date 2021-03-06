

## Requirements
This project requires you to have a installation of [nodejs](https://nodejs.org/en/) with [npm](https://www.npmjs.com/get-npm)
This project also requires you to have global installations of [gulp](http://gulpjs.com/).
```
# Install gulp globally
sudo npm install -g gulp
```

## Quick Start
```
# 1 Clone this repo


# 3 Install all node packages
yarn or npm install

# 4 Get started
yarn dev or npm run dev - starts localhost server with browser-sync, watches html sass js with hot reloading
yarn build or npm run build - minify css/js and builds your app into the dist directory, ready for production
```

## Gulp commands
**gulp serve**

The gulp serve command starts a local Browsersync server that serves your files in the browser.
It automatically reload the current page when changing html, sass and js files.
The output of all sass files go to main.css.
All js files are concatenated into main.js.
You can access the project live in development with other devices on the same network. Go to the "External" address specified by Browsersync in the terminal in the browser of your device.
```
gulp serve
```

**gulp (build)**

The default gulp command is set to creating a "dist" directory with a production version of the project, ready to be deployed.
It minifies and renames js/css assets as well as cleaning the old "dist" directory. CSS is autoprefixed for the latest two browser versions.
```
gulp
```

**gulp concatScripts**

The gulp concatScripts command combines the specified js ressources into main.js.
You can add new js files to this command on line 16 in gulpfile.js
You might want to run concatScripts once seperately after adding new js files.
```
gulp concatScripts
```

## Overwriting Bootstrap sass variables
You can overwrite specific bootstrap sass variables by uncommenting lines in assets/css/bootstrap/_variables.scss

## PHP Support
If you need a server with PHP support you can use the project with [MAMP Pro](https://www.mamp.info/en/mamp-pro/) or similiar.
* Place the project folder in the htdocs folder
* Create a new host in the hosts panel of MAMP Pro and choose the project folder as the document root
* Enable Symlinks settings in the "Extended" tab of the host configuration
* On line 59 in gulpfile.js change the browserSync.init function to the following:
```
browserSync.init({
    proxy: "http://name-of-your-mamp-host:8888",
    open: "external"
});
```
* Start the MAMP services and run "gulp serve" as before

```
<div class="coded with"> <3 </div>
```