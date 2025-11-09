import style from './Search.module.css';

const Search = () => {
  return (
    <section>
      <div className="container">
      <div className={`row ${style.row}`}>
        <h1>How's the sky looking today?</h1>

        <form action="">
          <input type="text" placeholder="Search for a place..." />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Search;
