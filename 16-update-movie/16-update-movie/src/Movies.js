import React, {useState} from 'react'

export default function Movies(){

    const [movies, setMovies] = useState(
        [
            {
            'id': 101,
            'title': 'Star Wars IV: A New Hope',
            'director': 'George Lucas'
            },
            {
            'id': 102,
            'title': 'The Lord of the Rings: The Fellowship of the Ring',
            'director': 'Peter Jackson'
            }
        ]
    )
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [displayForm, setDisplayForm] = useState(false);
    const [modfyingIndex, setModifyingIndex] = useState(0);
 

    function updateMovie() {
        let updatedMovie  = {
            id: movies[modfyingIndex].id,
            title: title,
            director: director
        }

        const modified = movies.slice();
        modified[modfyingIndex] = updatedMovie
        setMovies(modified);
        setDisplayForm(false);
    }

    const onDisplayFormClick = (m) => {
      setDisplayForm(true);
      setTitle(m.title);
      setDirector(m.director);
      setModifyingIndex(movies.indexOf(m));
    }

    return <React.Fragment>
      <div class="container">
        <div class="col">
          {movies.map(m => (
            <React.Fragment>
              <div class="movie">
                <h1> {m.title} <button onClick={() => onDisplayFormClick(m)}>Edit</button> </h1>
                <h2> Directed by {m.director} </h2>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div class="col" style={{display: displayForm ? "block" : "none"}}>
            <h3>Edit Movie</h3>
            <div>
                <label>Movie Title:</label>
                <input type="text" name="title" value={title} onChange={(event)=> setTitle(event.target.value)} />
            </div>
            <div>
                <label>Director</label>
                <input type="text" name="director" value={director} onChange={(event)=> setDirector(event.target.value)} />
            </div>
            <button onClick={updateMovie}>Update Movie</button>
        </div>
      </div>
    </React.Fragment>
}
