import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Layout from './pages/Layout';
import Home from './pages/Home'
import About from './pages/About';

function App() {

  const styleApp = {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 50,

  }

  return (
    <div style={styleApp}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

          </Route>
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
