import '../App.css';
const Movie = ({ Title, Image }) => {


    if(Image === "N/A") { Image = "https://via.placeholder.com/200"}

    
  return (
    <article className="movie">
      <h2>{Title}</h2>
      <p><img src={Image} className="img" title={Title} alt={Title} /></p>

    </article>
  )
}

export default Movie