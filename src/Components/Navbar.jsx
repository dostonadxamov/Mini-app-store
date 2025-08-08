
import { CiShoppingCart } from "react-icons/ci";
import { FaTrashCan } from "react-icons/fa6";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
export default function Navbar({ changeLang }) {
    function changeLanguageHandle(e) {
        changeLang(e.target.value)

    }
    const { totalAmount, totalPrice, dispatch, cart, payload, id} = useContext(GlobalContext)
    const { t } = useTranslation();


    return (
        <nav  className=" h-[80px] gap-[15px] sticky top-0 z-10  sm:h-[80px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between px-[50px]  ">
            <h1 className="text-[#E5E7EB] hover:text-[#6366F1] ease-out duration-300 font-[500] text-2xl">{t('MiniStoreApp')}</h1>
            <div className="flex gap-[15px]">
                <div className="bg-white w-[100px]  items-center flex h-[30px] px-[4px] rounded-[10px]">
                    <select className="w-[100px] h-[30px]" onChange={changeLanguageHandle}>
                        <option className=" rounded-[100px]" value="en">Ingilis tili</option>
                        <option value="uz">O'zbek</option>
                        <option value="ru">Rus tili</option>
                    </select>
                </div >

                <Sheet className="  z-15">
                    <div className="relative hover:scale-150 w-[40px] h-[40px] transition-transform flex ">
                        <button className="bg-red-600 absolute text-white right-0 top-0 h-5 min-w-5 rounded-full flex items-center justify-center font-mono tabular-nums">
                            {totalAmount}
                        </button>
                        <SheetTrigger asChild>

                            <CiShoppingCart className="text-[35px] text-white font-bold" />

                        </SheetTrigger>
                    </div>
                    <SheetContent className="bg-gradient-to-br from-[#F4D6FF]  via-[#8D68AA]  to-[#3A294F]" >

                        <div className="grid  flex-1  w-full  overflow-y-auto py-[20px]  px-[20px] auto-rows-min gap-6 ">
                            <div className="">
                                <h2 className="text-[#3A294F] text-[18px] font-bold">Total Price: {totalPrice}$</h2>
                                <div className="py-[20px] flex flex-col gap-[15px]">
                                    {cart.length > 0 ? cart.map((el) => {
                                        return (
                                            <div className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white w-full max-w-2xl">
                                              
                                                <div className="text-2xl text-center font-semibold text-gray-800 px-2 min-w-[100px]">
                                                    {el.name}
                                                </div>

                              
                                                <div className="flex-1">
                                                    <h2 className="text-lg font-medium text-blue-700">{el.brand}</h2>
                                                    <p className="text-sm text-gray-600 line-clamp-2">{el.description}</p>
                                                </div>

                                        
                                                <button
                                                    onClick={() => dispatch({ type: "DEL", payload: el.id })}
                                                    className="p-2 text-red-500 hover:text-red-600 transition-colors duration-200"
                                                    title="Delete item"
                                                >
                                                    <FaTrashCan size={18} />
                                                </button>
                                            </div>

                                        )
                                    }) : (<p className="text-center text-[#2c086e] text-2xl font-extrabold opacity-20 mt-[200px]">Savatcha bo'sh</p>)}
                                </div>
                            </div>
                        </div>
                        <SheetFooter>
                            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                                <Button onClick={(() => {
                                    dispatch({ type: "CLEAR", })
                                })} className="w-full">Clear</Button>
                            </div>
                            <SheetClose asChild>

                                <Button variant="outline">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>



            </div>

        </nav >
    )
}
