function Home() {
  return (
    <main>
      <figure className="profile_picture">
        <img src="https://via.placeholder.com/75/150" alt="Vince Aggrippino" />
        <figcaption>Vince Aggrippino</figcaption>
      </figure>

      <section className="intro" aria-labelledby="intro__heading">
        <h2 className="intro__heading" id="intro__heading">Hi! I'm Vince.</h2>

        <p>I build websites</p>
      </section>

      <section className="tech" aria-labelledby="tech__heading">
        <h2 id="tech__heading" className="tech__heading">Using these technologies...</h2>
        <ul>
          <li>
            <img
              src="https://via.placeholder.com/64?text=HTML+logo"
              alt="HTML logo"
            />
          </li>
          <li>
            <img
              src="https://via.placeholder.com/64?text=CSS+logo"
              alt="CSS logo"
            />
          </li>
          <li>
            <img
              src="https://via.placeholder.com/64?text=JavaScript+logo"
              alt="JavaScript logo"
            />
          </li>
          <li>
            <img
              src="https://via.placeholder.com/64?text=NodeJS+logo"
              alt="NodeJS logo"
            />
          </li>
          <li>
            <img
              src="https://via.placeholder.com/64?text=ReactJS+logo"
              alt="ReactJS logo"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home
