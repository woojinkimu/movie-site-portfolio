import React, { Component } from 'react';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Story from './components/story/story';
import Actors from './components/actors/actors';
import ETC from './components/etc/etc';
import Music from './components/music/music';
import Board from './components/board/board';
import ErrorPage from './components/404/error_page';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isFadeout: false,
      cardsData: [
        {title: 'Story', img: 'images/story.png', position: 'center', pathname: 'story'},
        {title: 'Actors', img: 'images/cast.jpg', position: '50% 25%', pathname: 'actors'},
        {title: 'Music', img: 'images/music.jpg', position: '50% 43%', pathname: 'music'},
        {title: 'ETC', img: 'images/etc.png', position: '50% 50%', pathname: 'etc'},
        {title: 'Board', img: 'images/board.jpg', position: '50% 50%', pathname: 'board'}
      ],
    };
  }

  componentDidMount(){
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
    setTimeout(() => {
      this.setState({isFadeout: true});
    }, 3000);
  }

  render() {
    return (
      <div className={styles.app}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
            {
              this.state.isLoading ?
              <div className={`${styles.cover} ${this.state.isFadeout && styles.cover_fade_out}`}>
                <img className={styles.logo} src="images/logo.png" alt="logo"/>
                <img className={styles.spin} src="images/galaxy.png" alt="spinner"/>
              </div>
              :
              <Home cardsData={this.state.cardsData} />
            }
              {/* <Home /> */}
            </Route>
            <Route path="/story">
              <Story cardsData={this.state.cardsData} />
            </Route>
            <Route path="/actors">
              <Actors cardsData={this.state.cardsData} />
            </Route>
            <Route path="/etc">
              <ETC cardsData={this.state.cardsData} />
            </Route>
            <Route path="/music">
              <Music cardsData={this.state.cardsData} />
            </Route>
            <Route path="/board">
              <Board cardsData={this.state.cardsData} />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;