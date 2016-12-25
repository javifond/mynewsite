var React = require('react');

module.exports = React.createClass({
	render: function () {

	return <section className="like">
			<h2 className="like__title">I like to...</h2>
			<div>
				<figure className="photo photo--beer">
					<img className="photo__img" src="https://s.gravatar.com/avatar/e4664b531ad286257f3503cf72adc15d?s=300" alt="My Avatar"/>
					<figcaption className="photo__title">Drink beer with friends...</figcaption>
				</figure>
				<figure className="photo photo--travel">
					<img className="photo__img" src="https://s.gravatar.com/avatar/e4664b531ad286257f3503cf72adc15d?s=300" alt="My Avatar"/>
					<figcaption className="photo__title">Fly with the air...</figcaption>
				</figure>
				<figure className="photo photo--food">
					<img className="photo__img" src="https://s.gravatar.com/avatar/e4664b531ad286257f3503cf72adc15d?s=300" alt="My Avatar"/>
					<figcaption className="photo__title">Good food & nice views...</figcaption>
				</figure>
			</div>
		</section>
	}
});
