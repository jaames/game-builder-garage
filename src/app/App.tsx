import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { IndexPage } from './routes/IndexPage';
import { FaqPage } from './routes/FaqPage';
import { GameView } from './routes/GameView';
import { TextureEditView } from './routes/TextureEditView';

import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="Main">
          <Switch>
            <Route path="/game/:gameIdx/texture/:textureIdx" component={ TextureEditView }/>
            <Route path="/game/:gameIdx" component={ GameView }/>
            <Route exact path="/about" component={ FaqPage }/>
            <Route exact path="/" component={ IndexPage }/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}