export default function CardUser({ avatar, name, email }) {
  return (
    <div style={styles.container} className="w-70 h-30">
      <img src={avatar} alt={name} style={styles.image} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
};
