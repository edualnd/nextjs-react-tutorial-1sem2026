"use client";

import Footer from "import/components/Footer";
import Header from "import/components/Header";
import Sidebar from "import/components/Sidebar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, pass, avatar);
    //TODO: Enviar os dados para o backend criar a conta do usuário
    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        avatar,
        pass,
      }),
    });
    if (response) {
      const res = await response.json();
      alert(res.message);

      if (response.ok) {
        router.push("user");
      }
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <main className="h-[82%] flex gap-4 justify-between">
        <Sidebar></Sidebar>
        <div className=" w-[85%] flex flex-col justify-start items-start p-4">
          <h1>Cadastre-se</h1>
          <p>Preencha o formulário abaixo para criar sua conta:</p>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.textInput}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.textInput}
            />
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              style={styles.textInput}
            />
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              style={styles.textInput}
            />
            <button type="submit" className="hover:cursor-pointer">
              Cadastrar
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  section: {
    display: "flex",
    gap: 20,
    padding: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: 300,
    marginTop: 30,
  },
  textInput: {
    padding: 6,
    marginBottom: 4,
    border: "1px solid #CCC",
    borderRadius: 6,
  },
};
