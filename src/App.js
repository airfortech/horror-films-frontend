import { Header } from "./components/Header/Header";
import { FilmsList } from "./components/FilmsList/FilmsList";
import { LanguageProvider } from "./context/LanguageContext/LanguageContext";
import { Fog } from "./effects/Fog/Fog";
import style from "./App.module.css";
import { bats } from "./effects/bats/bats";
import { useEffect } from "react";
import { QueryProvider } from "./context/QueryContext/QueryContext";

export const App = () => {
  useEffect(() => {
    bats(5);
  }, []);
  return (
    <QueryProvider>
      <LanguageProvider>
        <div className={style.app}>
          <Header />
          <div className={style.wrapper}>
            <FilmsList />
            <Fog cover />
          </div>
        </div>
      </LanguageProvider>
    </QueryProvider>
  );
};
