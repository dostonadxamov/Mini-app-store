import { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";


export default function ProductList() {
    const [data, setData] = useState([]);

    const [loader, setloader] = useState(false);
    const [limit] = useState(12);
    const [skip, setSkip] = useState(0);
    const { t, i18n } = useTranslation();



        useEffect(() => {
            setloader(true)
            fetch(`https://json-api.uz/api/project/fn38-6-exam/${i18n.language}?limit=${limit}&skip=${skip}`)
                .then(res => res.json())
                .then(res => {
                    setData(prev => [...prev, ...res.data]);
                })
                .finally(() => {
                    setloader(false);
                });
        }, [skip, i18n.language]);

        useEffect(() => {
            setData([]);
            setSkip(0);
        }, [i18n.language]);


    if (loader) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }
return (
    <div className="max-w-[1540px] px-[20px] bg-amber-50 pt-[70px]">
        <div className="grid gap-[15px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {data.map((el) => (
                <Product key={el.id} el={el} />
            ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            
                <Button
                    variant="ghost"
                    className="w-full bg-purple-500  mt-[10px]"
                    onClick={() => setSkip(prev => prev + limit)}
                >
                    <h2>{t("More")}</h2>
                </Button>
        
        </div>
    </div>
);

}



