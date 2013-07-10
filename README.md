#Present Something

A simple app to create and share presentations. Checkout this [example](http://present-something.herokuapp.com/)

##Requirements
- [node.js](http://nodejs.org/)
- [foreman](http://ddollar.github.com/foreman)
- Chrome / Firefox

##Instructions
- `git clone git@github.com:Trecenti/present-something.git`
- create your presentation html pages and save them under `app/pages`
- reference them in presentation order in `app/js/pages.js`
- `npm install`
- `foreman start`
- browse your presentation at [http://localhost:5000/](http://localhost:5000/)

##Next Steps
- deploy to heroku.
- create different branches for different presentation styles
- profit.
