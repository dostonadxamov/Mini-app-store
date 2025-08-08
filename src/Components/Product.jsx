import { Button } from "@/components/ui/button";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { ImCheckboxChecked } from "react-icons/im";
import { toast } from "react-hot-toast";


export default function Product({ el }) {
    const { dispatch, cart } = useContext(GlobalContext);
    const itemincart = cart.find((e) => e.id == el.id);
    const { t } = useTranslation();

    return (
        <div className="max-w-xs  m-auto flex bg-gray-200 flex-col pb-[20px] px-[10px] rounded-lg border-none inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow duration-700  ">
            <div className=" pt-[70px]" />
            <div className="text-5xl relative text-center">{el.name}  <Badge className="text-white absolute left-0 top-[-50px]  bg-red-500">
                -25%
            </Badge> <CiHeart className="absolute right-0 top-[-50px] text-[25px]" /></div>

            <div className="p-4 pb-[40px] text-start">
                <h2 className="text-xl line-clamp-1 font-bold text-gray-800 mt-[20px] mb-2">{el.brand}</h2>

                <p className="text-gray-600 mb-[-20px] text-sm line-clamp-1">
                    {el.description}
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <Badge className="bg-white text-red-500">
                    {t("Price")}: ${el.price}
                </Badge>
                <Badge className="bg-white text-black" variant="destructive">
                    {t("Category")}: {el.category}
                </Badge>
                <Badge className="bg-white text-black" variant="destructive">
                    <ImCheckboxChecked />
                    <CiStar className="bg-yellow-300" />4.9
                </Badge>
            </div>




            {!itemincart && (
                <Button
                    onClick={() => {
                        dispatch({ type: "ADD", payload: { ...el, amount: 1 } })
                        toast.success("Saqlandi")
                    }}
                    className="inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow duration-700  bg-purple-500 mt-[15px]"
                    variant="secondary"
                >
                    {t("Add to basket")}
                </Button>
            )}

            {itemincart && (
                <div className="flex items-center justify-center gap-[15px] mt-[5px]">
                    <Button
                        variant="secondary"
                        onClick={() => {
                            if (itemincart.amount === 1) {
                                dispatch({ type: "DEL", payload: itemincart.id });
                            } else {
                                dispatch({ type: "DEC", payload: itemincart.id });
                            }
                             toast.error("O'chirildi");


                        }}
                        size="icon"
                        className=" size-8 inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow duration-700 "
                    >
                        -
                    </Button>

                    <span>{itemincart.amount}</span>

                    <Button
                        onClick={() => dispatch({ type: "INC", payload: itemincart.id })}
                        variant="secondary"
                        size="icon"
                        className="size-8 inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow ease-initial duration-700"
                    >
                        +
                    </Button>
                </div>
            )}
        </div>
    );
}
