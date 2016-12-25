var React = require('react');

module.exports = React.createClass({
	render: function() {
	return <header className="fp">
		<img src="https://s.gravatar.com/avatar/e4664b531ad286257f3503cf72adc15d?s=200" alt="My Avatar"
	className="fp__avatar"/>
		<h1 className="fp__motto">La vida es de los valientes.</h1>
		<div className="fp__contact-buttons">
			<a href="https://www.linkedin.com/in/javier-betancourth-0036a554" target="_blank" rel="noopener"><i className="icon-linkedin-square"></i></a>
			<a href="https://github.com/javifond" target="_blank" rel="noopener"><i className="icon-github"></i></a>
			<a href="mailto:javifond@gmail.com"><i className="icon-comments-o"></i></a>
		</div>
		<div className="fp__location"><i className="icon-street-view"></i> Malaga - Spain</div>
	</header>
	}
});
