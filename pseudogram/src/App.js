import React, { Component } from 'react';
import firebase, { firestore } from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user  });
    });
  }
  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log('${result.user.email} ha iniciado sesion'))
      .catch(error => console.log('Error ${error.code}: ${error.message}'));
  }
  handleLogout(){
    firebase.auth().signOut()
    .then(result => console.log('${result.user.email} ha salido'))
      .catch(error => console.log('Error ${error.code}: ${error.message}'));
  }
  renderLoginButton(){
    //si el usuario esta logueado
    if(this.state.user){
      return (
        <div>
          <img  width="150" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>Hola {this.state.user.displayName}  !</p>
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      );
    }else{
      return(
        <button onClick={this.handleAuth}>Login con Google</button>
      );
    //si no lo esta
     } 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
           <h1 className="App-title">Pseudogram</h1>
        </header>
        <p className="App-intro">
          
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default App;
