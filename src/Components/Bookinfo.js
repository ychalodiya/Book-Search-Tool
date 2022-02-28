import './Book.css';

const Bookinfo = ({data}) => { 
    return (
        <>
            <ul>{
                data.map((book,index) => {
                    return (
                        <li key={index}>
                        <div className="book">
                            <div>
                                <img 
                                    className="coverImage" 
                                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`} 
                                    alt={book.title} 
                                    onError={(e) => ( e.target.onerror = null, e.target.src = 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg')}  />
                            </div>
                            
                            <div className="bookInfo">
                                <h3>Title: {book.title}</h3>
                                <p>Author name: {book.author_name}</p>
                                <p>Published Date: {book.publish_date[0]}</p>
                                <p>ISBN: {book.isbn[0]}</p>
                            </div>
                        </div>
                        
                    </li>
                    )
                })
            }
            </ul>
        </>
    )
}


export default Bookinfo;