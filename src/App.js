import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FilmsView } from "./views/FilmsView/FilmsView";
import { FilmView } from "./views/FilmView/FilmView";
import { NoResultsView } from "./views/NoResultsView/NoResultsView";
import { NotFoundView } from "./views/NotFoundView/NotFoundView";
import { ServerErrorView } from "./views/ServerErrorView/ServerErrorView";
import { LanguageProvider } from "./context/LanguageContext/LanguageContext";
import { Fog } from "./effects/Fog/Fog";
import style from "./App.module.css";
import { bats } from "./effects/bats/bats";
import { useEffect } from "react";
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
          <Fog opacity={1} />
          <div className={style.wrapper}>
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate replace to={"/en/films/?" + getFilmsUrlParams} />
                }
              />
              <Route path="/:lang/films/" element={<FilmsView />} />
              <Route
                path="/:lang/films/no-results"
                element={<NoResultsView />}
              />
              <Route
                path="/:lang/films/server-error"
                element={<ServerErrorView />}
              />
              <Route path="/:lang/films/:id" element={<FilmView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
};
