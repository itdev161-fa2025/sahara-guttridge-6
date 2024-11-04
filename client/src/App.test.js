import { render, screen } from '@testing-library/react';
import App from './App';
import { Component } from 'react';
import { all } from 'axios';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
state={
  data: null,
  token: null,
  user: null
}


componentDidMount(){
  axios.get('http://localhost:3001')
  .then((reponse) =>{
    this.setState({
      data: response.data
    })
  })
  .catch((error) =>{
    console.error('Error fetching data ${error}');
  })
  this.authenticateUser();
}

authenticateUser => () =>{
  const token = localStorage.getItem('token');
  if(!token){
    localStorage.removeItem('user');
    this.setState({ user: null});
  
  if(token){
    const config ={
      headers: {
        'x-auth-token': token
      }
    }
    axios.get('http://localhost:5000/api/auth', config)
    .then((reponse) =>{
      localStorage.setItem('user', reponse.data.name)
      this.setState({user: reponse.data.name})
    })
    .catch((error) => {
      localStorage.removeItem('user');
      this.setState({user:null});
      console.error('error logging in: ${errror}');
    })
  }
}
}
logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({ user:null, token: null});
}
render(){
  let{user, data} = this.state;
  const authProps = {
    authenticateUser: this.authenticateUser
  }
}
