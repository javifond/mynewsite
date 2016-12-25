var React = require('react');

var FrontPage = require('./frontpage');
var AboutMe = require('./aboutme');
var Skills = require('./skills');
var Like = require('./like');
var Footer = require('./footer');

module.exports = React.createClass({
	render: function() {
	return <div className="wrapper">
		<section className="wrapper__left">
			<FrontPage/>
		</section>
		<section className="wrapper__right">
			<AboutMe/>
			<Skills/>
			<Like/>
			<Footer/>
		</section>
	</div>
	}
});
