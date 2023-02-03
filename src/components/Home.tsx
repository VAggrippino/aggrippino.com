function Home() {
  return (
    <main className="intro">
      <img className="intro__profile_image" src="/profile_image.png" alt="Profile picture of Vince" />
      <section aria-labelledby="intro_heading">
        <h2 className="intro__heading" id="intro__heading">Hi! I'm Vince.</h2>
        <p>I build websites...</p>
      </section>
    </main>
  );
}

export default Home
