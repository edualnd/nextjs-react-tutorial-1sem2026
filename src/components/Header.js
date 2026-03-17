import style2 from "./Header.module.css";
import Logo from "./Logo";
export default function Header() {
  return (
    <header style={styles.container}>
      <div className="flex flex-row gap-5 items-center">
        <Logo />
        <h1 className={style2.logo}>IFONE</h1>
      </div>
      <nav>
        <ul style={styles.nav}>
          <li>Home</li>
          <li>Sobre</li>
          <li>FAQ</li>
          <li>Contato</li>
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
