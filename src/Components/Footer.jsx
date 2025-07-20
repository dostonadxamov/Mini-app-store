
export default function Footer() {
    return (
        <footer data-aos="zoom-out-left"className="bg-gray-900 text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h1 className="text-2xl font-bold">Mini Store App</h1>
                    <p className="text-sm mt-2 text-gray-400">
                        O'zbekistondagi eng ishonchli onlayn do'kon. Siz xohlagan mahsulotlar bir joyda!
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Foydali Havolalar</h3>
                    <ul className="space-y-1 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Biz haqimizda</a></li>
                        <li><a href="#" className="hover:text-white">Do'kon</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Boglanish</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Yordam</h3>
                    <ul className="space-y-1 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white">Yetkazib berish</a></li>
                        <li><a href="#" className="hover:text-white">Qaytarish siyosati</a></li>
                        <li><a href="#" className="hover:text-white">Buyurtma holati</a></li>
                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Biz bilan boglaning</h3>
                    <div className="flex space-x-4 mt-2 text-gray-400">
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">telegram</a>
                    </div>
                    <p className="text-sm mt-4 text-gray-400">Email support@.uz</p>
                </div>
            </div>



        </footer>

    )
}
