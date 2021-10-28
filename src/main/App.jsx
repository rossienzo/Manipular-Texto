import React from 'react';

/* Styles */
import '../common/template/Custom.css';
import '../textManipulator/Custom.css';
import '../textManipulator/WideTextGenerator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Components */
import Header from '../common/template/Header';
import Footer from '../common/template/Footer';
import Routes from './Routes';


const App = props => (
    <div className="wrapper">
        <Header />
        <Routes />
        <Footer />
    </div>
)

export default App;