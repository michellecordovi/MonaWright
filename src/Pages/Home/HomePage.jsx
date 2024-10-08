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
				<section className="divider quote">
					<blockquote>
						&quot;You see a thing can be an object,a person or a
						sin. It really just depends on what you&apos;re judging
						then.&quot;
					</blockquote>
				</section>

				<section id="home-about-section">
					<h2>About</h2>

					<img
						src="/images/Maya-Angelou.jpg"
						alt="image of maya angelou"
					/>

					<div id="home-about-text">
						<h3>Mona Wright</h3>
						<h4>Poet, Author</h4>
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit.
							Tortor magna tempor velit laoreet massa vivamus
							nulla. Praesent habitant suscipit vel nisl vehicula
							orci. Natoque senectus ridiculus sit proin orci
							molestie a.
						</p>

						<button>Learn more</button>
					</div>

					<div id="about-awards-section">
						<img
							src="/images/example-award.png"
							alt="example award"
						/>
						<img
							src="/images/example-award.png"
							alt="example award"
						/>
						<img
							src="/images/example-award.png"
							alt="example award"
						/>
					</div>
				</section>

				{/* <section id="featured-pieces-section">
					<h2>Featured Pieces</h2>
				</section> */}
			</main>
		</>
	);
}

export default HomePage;
