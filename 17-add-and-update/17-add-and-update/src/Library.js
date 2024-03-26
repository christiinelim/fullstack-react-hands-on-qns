import React, {useState} from 'react'

export default function Movies() {

    const [books, setBooks] = useState(
        [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags':['futuristic', 'classic']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre':'fantasy',
                'tags':['door-stopper', 'trilogy']
            }
        ]
    )

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("fantasy");
    const [tags, setTags] = useState([]);
    const [mode, setMode] = useState("Add Book");
    const [indexToEdit, setIndexToEdit] = useState(0);

    const addBook = () => {
        const newBook = {
            'id': Math.floor(Math.random()*1000 + 1),
            'title': title,
            'author': author,
            'genre': genre,
            'tags':tags
        }

        const modified = [...books, newBook];
        setBooks(modified);
        clearForm();
    }

    const updateBook = () => {
        const modifiedBook = {
            'id': books[indexToEdit].id,
            'title': title,
            'author': author,
            'genre': genre,
            'tags':tags
        }

        const copyBooks = books.slice();
        copyBooks[indexToEdit] = modifiedBook;
        setBooks(copyBooks);
        clearForm();
        setMode("Add Book")
    }

    const displayEditBook = (b) => {
        setMode("Update Book")
        setTitle(b.title);
        setAuthor(b.author);
        setGenre(b.genre);
        setTags(b.tags);
        setIndexToEdit(books.indexOf(b));
    }

    const cancelEditBook = () => {
        clearForm();
        setMode("Add Book")
    }

    const clearForm = () => {
        setTitle("");
        setAuthor("");
        setGenre("fantasy");
        setTags([]);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if (name === "title") {
            setTitle(value);
        } else if (name === "author") {
            setAuthor(value)
        } else if (name === "genre") {
            setGenre(value)
        } else if (name === "tags") {
            if (tags.includes(value)) {
                const indexToRemove = tags.indexOf(value);
                const filter = tags.filter(tag => tags.indexOf(tag) != indexToRemove);
                setTags(filter);
            } else {
                const modified = [...tags, value];
                setTags(modified);
            }
        }
    }

    const displayBooks = () => {
        return(
            <ul>
                {
                    books.map(b => {
                        return(
                            <div>
                                <li>{b.id}</li>
                                <li>{b.title}</li>
                                <li>{b.author}</li>
                                <li>{b.genre}</li>
                                <li>{b.tags.join(", ")}</li>
                                <button onClick={() => displayEditBook(b)}>Edit</button>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }

    return <React.Fragment>
        <div class="container">
            <div class="col">
                {displayBooks()}
            </div>

            <div class="col">

            <h3>Add Book</h3>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author" value={author} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="radio" name="genre" value="fantasy" checked={genre === "fantasy"} onChange={handleInputChange}/><label>Fantasy</label>
                <input type="radio" name="genre" value="science-fiction" checked={genre === "science-fiction"} onChange={handleInputChange}/><label>Science Fiction</label>
                <input type="radio" name="genre" value="romance" checked={genre === "romance"} onChange={handleInputChange}/><label>Romance</label>
            </div>
            <div>
                <label>Tags</label>
                <input type="checkbox" name="tags" value="classic" checked={tags.includes("classic")} onChange={handleInputChange}/><label>Classic</label>
                <input type="checkbox" name="tags" value="doorstopper" checked={tags.includes("doorstopper")} onChange={handleInputChange}/><label>Doorstopper</label>
                <input type="checkbox" name="tags" value="futuristic" checked={tags.includes("futuristic")} onChange={handleInputChange}/><label>futuristic</label>
                <input type="checkbox" name="tags" value="trilogy" checked={tags.includes("trilogy")} onChange={handleInputChange}/><label>trilogy</label>
            </div>
            <button onClick={mode === "Add Book" ? addBook : updateBook}>{mode}</button>
            {mode === "Update Book" && <button onClick={cancelEditBook}>Cancel Edit</button>}
            </div>
        </div>
    </React.Fragment>
}
