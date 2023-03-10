import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { userContext } from './context/userContext'; // contexto
import { themeContext } from './context/themeContext'; // contexto
import ReactPlayer from "react-player"

function App() {

  const [user, setUser] = useState("Guillermu"); // state para componente funcional
  const [theme, setTheme] = useState("__dark"); // state para theme

  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  const toggleTheme = () => theme === "" ? setTheme("__dark") : setTheme("")

  const data = {
    user,
    login,
    logout
  }

  const themeData = {
    theme, //"__dark" o ""
    toggleTheme
  }

  return (
    <div className="App">
      <Provider store={store}>
        <themeContext.Provider value={themeData}>
          <BrowserRouter>
            <userContext.Provider value={data}>
              <Header />
              <Main />
            </userContext.Provider>
          </BrowserRouter>
          <Footer />
        </themeContext.Provider>
      </Provider>
      
      <ReactPlayer className="audio_player"
        url="https://soundcloud.com/nieves-sanz-romero/georgie-dann-carnaval-carnaval?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        width={200}
        height={100}
        loop={true}
      />

    </div>
  );
}

export default App;
