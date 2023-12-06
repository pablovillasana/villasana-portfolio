function Home() {
  return (
    <>
      <div className="home">
        <div className="section hero">
          <div class="content">
            <sub className="hero__sub">Hello!</sub>
            <h1 className="hero__title">
              I'm <span> Pablo Villasana</span>
            </h1>
            <h2 className="hero__description">
              Crafting Digital Experiences: A Web Developer's Odyssey
            </h2>
          </div>
        </div>
        <div className="section me">
          <div class="content">
            <img className="me__image" src="me.webp" alt="" srcset="" />
            <div className="me__info">
              <h2 className="section__title">Half human, Half digital</h2>
              <p className="section__description">
                Welcome to my virtual realm, where I transform ideas into
                immersive online experiences. I am a web developer from Malaga,
                born and raised.
              </p>
              <p className="section__description">
                I bring concepts to life through clean, efficient, and visually
                stunning code. Whether it's a sleek and responsive website, a
                dynamic web application, or a powefull API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
