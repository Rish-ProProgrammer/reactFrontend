import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
//import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [areButtonsHidden, setAreButtonsHidden] = useState(false);

  const hideButtons = () => {
    setAreButtonsHidden(true);
  };
  const handleButtonClick = () => {
    // Action 1: Set button visibility to false
    setButtonVisible(false);

    // Action 2: Perform another action (you can add your custom logic here)
    navigateTo('create')
  };

  
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      /*case 'home':
        return <ListEmployee />;*/
      case 'create':
        //console.clear()
        return <CreateEmployee />;
        //return <Routes></Routes><Route path="/add-employee/:id" element={CreateEmployeeComponent}></Route>
      case 'update':
        return <UpdateEmployee />
      //case 'view':
      //  return <ViewEmployeeComponent />;
      default:
        return <ListEmployee hideButtons={hideButtons}/>;
    }
  };
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  return (
    /*<div>
      <HeaderComponent />
      <div className="container">
      <ListEmployee />
    </div>
    <FooterComponent />
    </div>*/
    /*<div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                    <Route path="/" element={ListEmployee}></Route>
                    <Route path="/employees" element={ListEmployee}></Route>
                    <Route path="/add-employee/:id" element={CreateEmployeeComponent}></Route>
                    <Route path="/view-employee/:id" element={ViewEmployeeComponent}></Route>
                    <Route path="/update-employee/:id" element={UpdateEmployeeComponent}></Route>
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>*/
    <div>
    <Header />
    <nav style={{ marginBottom: '15px', marginTop: '15px', marginLeft: '15px' }}>
      {areButtonsHidden || buttonVisible && (<button onClick={handleButtonClick} className="btn btn-info" >Create New Employee</button>)}
      
    </nav>
    <div>
      {renderPage()}
      <nav style={{ marginBottom: '15px', marginTop: '15px', marginLeft: '15px' }}>
      
      {areButtonsHidden || buttonVisible && (<button className="btn btn-danger">Remove All</button>)}
    </nav>
    </div>
    <Footer />
  </div>
);
}/*
<Routes> 
                          <Route path = "/" exact component = {ListEmployee}></Route>
                          <Route path = "/employees" component = {ListEmployee}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          { <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> }
                    </Routes>*/
export default App;
