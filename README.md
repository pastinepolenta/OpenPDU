##  OpenPDU

# Installation and compilation
On this repo there are only source files. A compilation must be done in order to get the static files.
Eventually in the future I will commit also compiled resources. The app uses libraries which must be installed using [Bower](http://bower.io "Bower"). 
The compilation concerns JS, HTML and CSS code. It is done automatically by [Middleman](http://middlemanapp.com// "Middleman").

Setup procedure (on Ubuntu 12.04):

*	Install bower with `npm install -g bower`. On Ubuntu 12.04 it requires to install nodejs > 0.10.xx which can be found on a third party repo (see [this](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint). 

*	Install middleman with `gem install middleman`. On Ubuntu 12.04 it requires to upgrade ruby to 1.9.3 following [this](http://leonard.io/blog/2012/05/installing-ruby-1-9-3-on-ubuntu-12-04-precise-pengolin/)

*	Install all the libraries with `bower install`
*	Compile the code with `middleman server`. This command will also start a server on http://0.0.0.0:4567/ where you should be able to see this app running 

# Usage
When `middleman server` is started the app will recompile automatically so every change will be visible on the browser.
Those changes include HTML, JS and SASS
