import Image from "next/image";
export default function Card({ title, price, category, image }) {
  return (
    <div className="bg-gray-50/50 h-50 w-[40%] min-h-60  p-2 flex items-center gap-3 justify-between rounded-2xl">
      <div className="w-full h-full flex justify-center flex-col gap-2 p-3">
        <div className="w-full h-25 flex justify-center items-center">
          <Image
            src={image}
            width={100}
            height={100}
            className="bg-gray-200 rounded-2xl"
            alt={title}
          ></Image>
        </div>

        <div className="flex flex-col">
          <p className="font-bold truncate">{title}</p>
          <p>R$ {price}</p>
          <p className="text-gray-300">{category}</p>
        </div>

        <button
          className="bg-green-500 p-2 rounded-2xl font-bold"
          type="button"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
