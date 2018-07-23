import React from 'react';
import { Route, IndexRoute} from 'react-router';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import App from './App';

export default(
    <Route path="/" component={App}>
     <IndexRoute component={HomePage}/>
     <Route path="about" component={AboutPage}/>
    </Route>
); 