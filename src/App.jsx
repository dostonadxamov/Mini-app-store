import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translateEn from "./locale/translateEn";
import translateUz from "./locale/translateUz";
import translateRu from "./locale/translateRu";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translateEn },
        uz: { translation: translateUz },
        ru: { translation: translateRu }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default function App() {
    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <Navbar changeLang={changeLang} />
            <Hero/>
            <ProductList />
            <Footer/>
        </>
    );
}
