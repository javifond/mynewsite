var React = require('react');

module.exports = React.createClass({
	render: function () {

	return <section className="like">
			<h2 className="like__title">I like to...</h2>
			<div>
				<figure className="photo photo--beer">
					<img className="photo__img"
						srcSet="./css/dist/assets/img/beer-480.jpg  480w,
						./css/dist/assets/img/beer-640.jpg  640w"
						sizes="(min-width: 768px) 100vw, 50vw"
						src="./css/dist/assets/img/beer-480.jpg" alt="I love beer"/>
					<figcaption className="photo__title">Drink beer with friends...</figcaption>
				</figure>
				<figure className="photo photo--travel">
					<img className="photo__img"
						srcSet="./css/dist/assets/img/places-480.jpg  480w,
						./css/dist/assets/img/places-640.jpg  640w"
						sizes="(min-width: 768px) 100vw, 50vw"
						src="./css/dist/assets/img/places-480.jpg" alt="I like to travel"/>
					<figcaption className="photo__title">Fly with the air...</figcaption>
				</figure>
				<figure className="photo photo--food">
					<img className="photo__img"
						srcSet="./css/dist/assets/img/food-480.jpg  480w,
						./css/dist/assets/img/food-640.jpg  640w"
						sizes="(min-width: 768px) 100vw, 50vw"
						src="./css/dist/assets/img/food-480.jpg" alt="I love food and nice views"/>
					<figcaption className="photo__title">Good food & nice views...</figcaption>
				</figure>
			</div>
		</section>
	}
});
