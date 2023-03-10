function Main({ nummer, inhalt, karte }) {
  return (
    <main className={karte ? "sub card" : "main card"}>
      <h3>
        {nummer}. {inhalt}
      </h3>
    </main>
  );
}

Main.defaultProps = {
  nummer: "3",
  inhalt: "Elaine ",
};

export default Main;
