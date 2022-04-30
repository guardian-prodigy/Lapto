const Home = ({ Link }) => {
  return (
    <section className="section">
      <h2>Home Page</h2>
      <Link to="about">
        <button className="btn">test</button>
      </Link>
    </section>
  );
};
export default Home;
