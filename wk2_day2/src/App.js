import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Form from './Form'

class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
    isLoaded: false,
    query: "",
    stories: [],
    isClicked: false
  }
}

onChange = e => {
  const {value} = e.target;
  this.setState({
    query: value,
    isClicked: !this.state.isClicked
  });

  // this.search(value)
}

handleClick = (e) => {
  e.preventDefault()
  this.search(this.state.query)
  }



search = query => {
  let url = `https://hn.algolia.com/api/v1/search?query=${query}`
  let token = {}
  this.token = token

  fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        stories: json.hits
      })
    })
}

handleClick2 = (e) => {
    e.preventDefault()
    this.search2(this.state.query)
    console.log("***YAY***")
  }

search2 = query => {
  let url = `https://hn.algolia.com/api/v1/search?numericFilters=created_at_i>=${query}`
  let token = {}
  this.token = token

  fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        stories: json.hits
      })
    }) .catch(() => console.log("**work"))
    console.log("***YAY2***")
}

// componentDidMount() {
//   this.search("")
// }

  render() {
  return (
    <div className = "App">
    <h1>HN API Search</h1>
    <h4>Search by Title</h4>
     <form>
        <input
          type="text"
          className="search-title"
          placeholder="Search for..."
          onChange={this.onChange}
        />
    <button onClick = {this.handleClick}>Submit</button>  
    </form> 
    <h4>Search by Date</h4>
    <form>
        <input
          type="text"
          className="search-date"
          placeholder="Search for..."
          onChange={this.onChange}
        />
    <button onClick = {this.handleClick2}>Submit</button>  
    </form>  
        {this.state.stories.map(hits => (
          <>
          <ul key={hits.title}>
            <li>TITLE : {hits.title}</li>
            <li>AUTHOR : {hits.author}</li>
            <li>CREATED AT: {hits.created_at}</li>
          </ul>
          <p>{hits.url}</p>
          </> 
          ))}
           
    </div>
    );
  }
}

// const Child = ({hits}) => ({
//   return 

// })

export default App;


{/* <Form /> */}
      {/* <ul>
        {item.map(story => (
          <li key={item.story_id}>
          
          </li>
        ))}
      </ul> */}