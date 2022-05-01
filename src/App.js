import { Header } from "./components/Header/Header";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { LanguageProvider } from "./context/LanguageContext/LanguageContext";
import { Fog } from "./effects/Fog/Fog";
import style from "./App.module.css";
import { bats } from "./effects/bats/bats";
import { useEffect } from "react";
// import { QueryProvider } from "./context/QueryContext/QueryContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { getFilmsUrlParams } from "./variables";

export const App = () => {
  useEffect(() => {
    bats(5);
  }, []);
  return (
    <Router>
      <LanguageProvider>
        <div className={style.app}>
          <Header />
          <div className={style.wrapper}>
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate replace to={"/en/films/?" + getFilmsUrlParams} />
                }
              />
              <Route path="/:lang/films/" element={<FilmsList />} />
            </Routes>
            <Fog cover />
          </div>
        </div>
      </LanguageProvider>
    </Router>
  );
};
