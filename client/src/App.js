import React from 'react'
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('http://localhost:3001')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data ${error}`);
      })
  }

  render() {
    return (
      <div className='App'> 
        <header className='App-header'>
          GoodThings
        </header>
        {this.state.data}
      </div>
    )
  }
}

export default App;
<><header className='App-Header'>

  <h1>GoodThings</h1>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/register">Register</Link></li>
    {user ?
      <li><Link to="" onClick={this.logOut}>Log out</Link></li> :
      <li><Link to="/login">Log in</Link></li>}
  </ul>
</header><main>
    <Routes>
      <Route path="/" element={<Home user={user} data={data} />} />
      <Route path="/register" element={<Register {...authProps} />} />
      <Route path="/login" element={<Login {...authProps} />} />
    </Routes>
  </main></>;
