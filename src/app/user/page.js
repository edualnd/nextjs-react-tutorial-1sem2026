"use client";

import CardUser from "import/components/CardUser";
import Footer from "import/components/Footer";
import Header from "import/components/Header";
import Sidebar from "import/components/Sidebar";
import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      fetch("http://localhost:8000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.users);
        })
        .catch((err) => console.error(err));
    };

    getUsers();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <main className="h-[82%] flex gap-4 justify-between">
        <Sidebar></Sidebar>
        <div className=" w-[85%] h-fit flex gap-4 justify-center items-start p-4">
          <div className="w-[80%] h-fit flex flex-row flex-wrap gap-4 justify-start items-start">
            {loading
              ? <p>Carregando</p>
              : users.map((u) => {
                  return (
                    <CardUser
                      key={u.id}
                      name={u.name}
                      avatar={u.avatar}
                      email={u.email}
                    />
                  );
                })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
