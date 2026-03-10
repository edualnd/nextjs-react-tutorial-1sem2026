import Logo from "./Logo"
export default function Footer(){
    return (
        <div className="bg-black flex flex-row-reverse items-center p-5 justify-between">
            
            <Logo/>
            <p className="text-gray-500 text-[12px]">IFSP Campus Caraguatatuba</p>
            <div></div>
        </div>
    )
}