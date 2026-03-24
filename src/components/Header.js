"use client";
import { useRouter } from "next/navigation";
import style2 from "./Header.module.css";
import Logo from "./Logo";
export default function Header() {
  const router = useRouter();
  return (
    <header style={styles.container}>
      <div className="flex flex-row gap-5 items-center">
        <Logo />
        <h1 className={style2.logo}>IFONE</h1>
      </div>
      <nav>
        <ul style={styles.nav}>
          <li className="h-10 flex justify-center items-center">Home</li>
          <li className="h-10 flex justify-center items-center">Sobre</li>
          <li className="h-10 flex justify-center items-center">FAQ</li>
          <li className="h-10 flex justify-center items-center">Contato</li>
          <li className="h-10 bg-white/20 rounded-2xl px-2 flex justify-center items-center">
            <button type="button" onClick={() => router.push("/signup")}>
              Cadastre-se
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  nav: {
    display: "flex",
    listStyleType: "none",
    gap: 20,
  },
};
