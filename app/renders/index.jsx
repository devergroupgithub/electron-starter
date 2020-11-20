import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import Home from './components/Home';
import './assets/style.css';
const Root = ({children}) => {
        return (
            <Fragment>
                {children}
            </Fragment>
        )
};

const HMR  =  hot(Root);

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
        <HMR>
            <Home /> 
        </HMR>
    </AppContainer>,
    document.getElementById('root')
  );
});
