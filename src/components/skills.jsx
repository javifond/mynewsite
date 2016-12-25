var React = require('react');

module.exports = React.createClass({
	render: function () {

	return <section className="skills">
			<h2 className="skills__title">My Skills</h2>
			<div className="skills__container">
				<article className="skill-pod">
					<h3><i className="skill-pod__icon icon-users"></i></h3>
					<ul className="skill-pod__list">
						<li className="skill-pod__list-item">Easy Going</li>
						<li className="skill-pod__list-item">Hard Working</li>
						<li className="skill-pod__list-item">Team Player</li>
						<li className="skill-pod__list-item">Punctual</li>
					</ul>
				</article>
				<article className="skill-pod">
					<h3><i className="skill-pod__icon icon-laptop"></i></h3>
					<ul className="skill-pod__list">
						<li className="skill-pod__list-item">Javascript</li>
						<li className="skill-pod__list-item">HTML5</li>
						<li className="skill-pod__list-item">CSS3</li>
					</ul>
				</article>
				<article className="skill-pod">
					<h3><i className="skill-pod__icon icon-linode"></i></h3>
					<ul className="skill-pod__list">
						<li className="skill-pod__list-item">Leadership</li>
						<li className="skill-pod__list-item">Agile Methodology</li>
					</ul>
				</article>
			</div>
		</section>
	}
});
