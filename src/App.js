import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext'; // contexto
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("Guillermu"); // state para componente funcional

  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">


      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
