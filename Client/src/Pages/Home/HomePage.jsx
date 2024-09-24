import './HomePage.css'

function HomePage() {
	return (
		<>
			<header className="hero overlay">
				<div id="hero-text">
					<h1>Mona Wright</h1>
					<p>
						Lorem ipsum odor amet, consectetuer adipiscing elit.
						Tortor magna tempor velit laoreet massa vivamus nulla.
						Praesent habitant suscipit vel nisl vehicula orci.
						Natoque senectus ridiculus sit proin orci molestie a.
					</p>
				</div>
			</header>

			<main>
				<section id="awards-section">
					<img
						src="../../../public/images/example-award.png"
						alt=""
					/>
					<img
						src="../../../public/images/example-award.png"
						alt=""
					/>
					<img
						src="../../../public/images/example-award.png"
						alt=""
					/>
				</section>

				<section id="home-about-section">

					<img
						src="../../../public/images/maya-angelou.jpg"
						alt="image of maya angelou"
					/>

					<div id="home-about-text">
						<h2>Mona Wright</h2>
						<h3>Poet, Author</h3>
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit.
							Tortor magna tempor velit laoreet massa vivamus
							nulla. Praesent habitant suscipit vel nisl vehicula
							orci. Natoque senectus ridiculus sit proin orci
							molestie a.
						</p>

						<button>Learn more</button>
					</div>
				</section>
			</main>
		</>
	);
}

export default HomePage;
