"use client";
import Card from "import/components/Card";
import Footer from "import/components/Footer";
import Header from "import/components/Header";
import Sidebar from "import/components/Sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      await fetch(
        `https://dummyjson.com/products//category/smartphones/?limit=${limit}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    }
    loadProducts();
  }, [limit]);

  return (
    <div className="h-screen">
      <Header />
      <main className="h-[82%] flex gap-4 justify-between">
        <Sidebar></Sidebar>
        <div className="w-[85%] p-1 pt-3 gap-3 flex flex-col">
          <p className=" font-bold">Confira os nossos produtos</p>
          <select
            name="limit"
            id="limit"
            className="bg-white text-black font-bold rounded-2xl w-20"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <div className="w-full flex flex-row justify-around flex-wrap overflow-y-scroll gap-y-5">
            {products.map((pd) => (
              <Card
                key={pd.id}
                title={pd.title}
                price={pd.price}
                category={pd.category}
                image={pd.images[0]}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
