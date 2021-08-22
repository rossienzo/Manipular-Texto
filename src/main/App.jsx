import React from 'react';

/* Styles */
import '../common/template/Custom.css';
import '../textManipulator/Custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Components */
import Header from '../common/template/Header';
import Content from '../common/template/Content';
import Footer from '../common/template/Footer';
import CaseManipulator from '../textManipulator/CaseManipulator';


export default props => (
    <div className="wrapper">
        <Header />
        <CaseManipulator />
        <Footer />
    </div>
)