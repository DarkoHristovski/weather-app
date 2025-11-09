import { useState } from 'react';
import style from './Search.module.css';

type SearchProps={
    handleSearch:(city:string)=>void;
}


const Search = ({handleSearch}:SearchProps) => {

 const [city, setCity]= useState<string>('');   




    const changekHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{ 

        setCity(e.target.value);
    }

    const submitHandler = (e:React.FormEvent) =>{
        e.preventDefault();
        handleSearch(city.trim());
        setCity('');

    }



  return (
    <section>
      <div className="container">
      <div className={`row ${style.row}`}>
        <h1>How's the sky looking today?</h1>

        <form onSubmit={submitHandler}>
          <input
           type="text"
           onChange={changekHandler} 
          
            placeholder="Search for a place..." 
            value={city}
            />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Search;
