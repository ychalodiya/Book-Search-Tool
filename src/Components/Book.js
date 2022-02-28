import { useState, useEffect } from "react";
import Bookinfo from "./Bookinfo";
import './Book.css';

const Book = () => {
    const URL = 'https://openlibrary.org/search.json?title=';
    const [searchWord, setSearchWord] = useState('');
    const [dataObject, setDataObject] = useState([]);
    const [recentSearchWord, setRecentSearchWord] = useState([]);

    const onInputChange = (e) => {
        setSearchWord(e.target.value);
    }

    const fetchData = async () => {
        const searchTerm = searchWord.replace(/\s/g, '+');
        const response = await fetch(`${URL}${searchTerm}`)
                                .then(res => res.json())
                                .then((result) => { 
                                    setDataObject(result.docs.slice(0, 10)) 
                                });                              
    }

    const sortBookList = (type) => {
        const types = {
            title: 'title'
        } 
        const sortProperty = types[type];
        const sorted = [...dataObject].sort((a,b) => { 
            return b[sortProperty].localeCompare(a[sortProperty])
        });
        setDataObject(sorted);
    }

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('recent') || "[]");
        setRecentSearchWord(data);
    }, [])

    const submitQuery = (e) => {
        e.preventDefault();
        document.getElementById('sort').value = 'empty';
        setRecentSearchWord([searchWord, ...recentSearchWord]);
        window.localStorage.setItem('recent', JSON.stringify([searchWord, ...recentSearchWord]));
        fetchData();
        document.getElementById('search').focus()
    }

    return (
        <>  
            <div className="header">
                <h2> Search for books </h2>
                <input
                    id="search" 
                    type="search" 
                    placeholder="Search"
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                          submitQuery(event)
                        }
                    }}
                    onChange={onInputChange}
                />
                <button type="submit" onClick={submitQuery}>Search</button>
            </div>

            <div className="container">
            <div className="sidebar">
                <div>
                    <p>Sort the list by: &nbsp; 
                        <select id="sort" onChange={e => sortBookList(e.target.value)}>
                            <option value="empty">-</option>
                            <option value="title">Title[A-Z]</option>
                    </select>
                    </p>
                </div>

                <div className="recentSearch">
                    <h5>Recent Search History</h5>
                    <ul>
                        {
                            recentSearchWord.length > 0
                            ?  
                            recentSearchWord.map((data, index ) => {
                                return <li key={index}>{data}</li> 
                            }) 
                            : <p>No Recent Search Hisotry Found</p>
                        } 
                    </ul>
                </div>
            </div>
            <div className="listOfBooks">
                {
                        dataObject.length > 0 
                        ? 
                        <Bookinfo data = {dataObject} /> 
                        : 
                        <h4>No Search Result Found</h4>
                }
            </div>
            </div>
        </>
    )
}

export default Book;