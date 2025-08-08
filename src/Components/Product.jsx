import { Button } from "@/components/ui/button";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { CiStar, CiHeart } from "react-icons/ci";
import { ImCheckboxChecked } from "react-icons/im";
import { toast } from "react-hot-toast";

export default function Product({ el }) {
  const { dispatch, cart } = useContext(GlobalContext);
  const { t } = useTranslation();

  if (!el) {
    return (
      <div className="p-4 bg-red-100 text-red-600 rounded">
        {t("Product data is missing")}
      </div>
    );
  }

  const itemInCart = cart?.find((e) => e.id === el.id);

  return (
    <div className="max-w-xs m-auto flex bg-gray-200 flex-col pb-[20px] px-[10px] rounded-lg border-none inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow duration-700">
      <div className="pt-[70px]" />
      <div className="text-5xl relative text-center">
        {el.name || t("No name")}
        <Badge className="text-white absolute left-0 top-[-50px] bg-red-500">
          -25%
        </Badge>
        <CiHeart className="absolute right-0 top-[-50px] text-[25px]" />
      </div>

      <div className="p-4 pb-[40px] text-start">
        <h2 className="text-xl line-clamp-1 font-bold text-gray-800 mt-[20px] mb-2">
          {el.brand || t("Unknown brand")}
        </h2>
        <p className="text-gray-600 mb-[-20px] text-sm line-clamp-1">
          {el.description || t("No description available")}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Badge className="bg-white text-red-500">
          {t("Price")}: ${el.price ?? 0}
        </Badge>
        <Badge className="bg-white text-black" variant="destructive">
          {t("Category")}: {el.category || t("Uncategorized")}
        </Badge>
        <Badge className="bg-white text-black" variant="destructive">
          <ImCheckboxChecked />
          <CiStar className="bg-yellow-300" />4.9
        </Badge>
      </div>

      {!itemInCart && (
        <Button
          onClick={() => {
            dispatch({ type: "ADD", payload: { ...el, amount: 1 } });
            toast.success(t("Added to cart"));
          }}
          className="inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow duration-700 bg-purple-500 mt-[15px]"
          variant="secondary"
        >
          {t("Add to basket")}
        </Button>
      )}

      {itemInCart && (
        <div className="flex items-center justify-center gap-[15px] mt-[5px]">
          <Button
            variant="secondary"
            onClick={() => {
              if (itemInCart.amount === 1) {
                dispatch({ type: "DEL", payload: itemInCart.id });
                toast.error(t("Removed from cart"));
              } else {
                dispatch({ type: "DEC", payload: itemInCart.id });
                toast.error(t("Decreased quantity"));
              }
            }}
            size="icon"
            className="size-8 inset-shadow-sm hover:inset-shadow-indigo-500 transition-shadow duration-700"
          >
            -
          </Button>

          <span>{itemInCart.amount}</span>

          <Button
            onClick={() => {
              dispatch({ type: "INC", payload: itemInCart.id });
              toast.success(t("Increased quantity"));
            }}
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
