import Movie from './movie'
import '../App.css';

const AllMovies = (Showsearch) => {
    const Data = Showsearch.Showsearch;



return(
    <section className="movies">
    {Data?.length > 0
      ? Data.map((value) => (
          <Movie key={value.Title} Title={value.Title} Image={value.Poster} />
        ))
      : null}
  </section>
   
)
}

export default AllMovies;