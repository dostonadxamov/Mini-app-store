import logo from "../assets/logo.png";

export default function Hero() {
  return (
    
    <div data-aos="flip-right" className="px-[15px] pt-[50px] max-w-[1480px] m-auto bg-gradient-to-r mt-[75px] rounded-[50px]  from-purple-600 to-pink-500 text-white ">
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row items-center justify-between ">
        
      
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Sifatli Mahsulotlar <br /> Tez Yetkazib Beriladi
          </h1>
          <p className="text-lg opacity-90">
            Bizning onlayn magazin orqali kerakli mahsulotlarni oson toping va buyurtma bering
          </p>
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition">
            Hozir xarid qilish
          </button>
        </div>

      
        <div className="w-full md:w-1/2">
          <img
            src={logo}
            alt="Hero Image"
            className="w-full rounded-xl transition-transform duration-300 hover:scale-110 "
          />
        </div>
      </div>
    </div>
  )
}
