import React, {Component} from 'react';
import axios from 'axios'
import ShowBook from './ShowBook'


const MERN_URL = "https://mern-library-back.herokuapp.com/books/"

class BookList extends Component {
  constructor(props) {
    super();
    this.state={
      books:[]
    }
  }

  componentDidMount(){
    axios.get(MERN_URL)
          .then(response => {
            this.setState({books: response.data})
          })
          .catch(err => {
            console.log(err);
          })
  }
  render() {
    const books = this.state.books;
    let bookList;
    if (!books) {
       bookList= 'There are no books'
    } else {
      bookList = books.map(k=>
        <p>
        <ShowBook books={k} />
        ***
        </p>


      )
    }

    return (
      <div>
        <div className="book-container">
          <h2> All the books</h2>
          <p> {bookList} </p>
        </div>
      </div>
    )
  }
}
export default BookList
