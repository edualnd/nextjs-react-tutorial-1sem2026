import { RxAvatar } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
export default function Card(){
    return (
        <div className="bg-gray-50/50 h-50 w-[30%] p-2 flex items-center gap-3 justify-between rounded-2xl">
            <div className="w-full h-full flex justify-center flex-col gap-2">
                <div className="w-36 h-25 flex justify-center items-center">
                    <img className="bg-white/30 rounded-2xl" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="Produto X"  width={100} height={100}/>
                </div>
                
                <div className="flex gap-5">
                    <p className="font-bold">Produto</p>
                    <p>R$ 50,00</p>
                </div>
                <button className="bg-green-500 p-2 rounded-2xl font-bold">
                    Comprar
                </button>
            </div>
            
            

        </div>
    )   
}