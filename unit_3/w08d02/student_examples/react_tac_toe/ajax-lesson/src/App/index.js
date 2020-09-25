import React, { Component } from "react";
import "./style.scss";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseURL: 'http://www.omdbapi.com/?',
      apiKey: 'apikey=8d432cb5',
      query: '&t=',
      movieTitle: '',
      searchURL: '',
      movie: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = event => {
      console.log(event.currentTarget.id)
      console.log(event.currentTarget.value)
      this.setState({[event.currentTarget.id]: event.currentTarget.value})
    }
    async handleSubmit (event) {
      event.preventDefault();
      const query = `${this.state.baseURL}${this.state.apiKey}${this.state.query}`
      try {
        const request = await fetch(`${query}${this.state.movieTitle}`)
        const response = await request.json()
        await this.setState({
          movie: response
        })
      } catch(error){
        console.error(error)
      }
    }


  // handleSubmit = async (event) => {
  //   event.preventDefault()
  //    this.setState({
  //      searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
  //    },
  //     () => {
  //       fetch(this.state.searchURL)
  //       .then( response =>{
  //         return response.json()
  //       })
  //       .then(
  //         (response) => {
  //           this.setState({movie: response})
  //         }
  //       )
  //       .catch(
  //         (err) => {
  //           console.error(err)
  //         }
  //       )
  //     }
  //  )
  // }
  render() {
    return (
      <div className="App">
        Hello World
        <form onSubmit={this.handleSubmit}>
          <label hmtlFor="movieTitle">Search by Title</label>
          <input 
            type="text" 
            id="movieTitle"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search"></input>
        </form>
      </div>
    )
  }
}

export default App;
