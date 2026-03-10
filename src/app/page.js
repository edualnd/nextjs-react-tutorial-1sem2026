import Footer from "import/components/Footer";
import Header from "import/components/Header";
import Sidebar from "import/components/Sidebar";
import Card from "import/components/Card";
export default function Home() {
  return (
    <div className="h-screen">
      <Header/>
      <main className="h-[82%] flex gap-4 justify-between">
        <Sidebar>
          
        </Sidebar>
        <div className="w-[65%] p-5 gap-3 flex flex-col">
          <p className=" font-bold">Confira os nossos produtos</p>
          <div className="w-full flex flex-row gap-3 flex-wrap overflow-y-scroll">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
          
        
      </main>
      
      <Footer/>
    </div>
  );
}

