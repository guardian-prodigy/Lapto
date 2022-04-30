const Error = ({Link}) => {
  return (
    <section className='section'>
      <h2>The provided url that has been entered does not exist</h2>
      <Link to={'/'} className="btn">back home</Link>
    </section>
  );
};
export default Error;
