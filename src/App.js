import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = (props) => {
 const apiKey= process.env.REACT_APP_NEWS_API

  const [ progress, setProgress] = useState(0)

  

    return (
      <Router>
        <div>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key={`home-${props.category}`} pageSize={10} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key={`business-${props.category}`} pageSize={10} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key={`entertainment-${props.category}`} pageSize={10} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key={`general-${props.category}`} pageSize={10} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key={`health-${props.category}`} pageSize={10} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key={`science-${props.category}`} pageSize={10} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key={`sports-${props.category}`} pageSize={10} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key={`technology-${props.category}`} pageSize={10} country="in" category="technology" />} />
          </Routes>
        </div>
        </Router>
    )
}

export default App;