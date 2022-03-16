import "../styles/style.css";

export const Kakao = ({ kakaos }) => {
  return (
    <ul className="kakao">
      {kakaos.map((kakaos) => (
        <li key={kakaos.id}>
          <h1>{kakaos.title}</h1>
          <p>{kakaos.description}</p>
        </li>
      ))}
    </ul>
  );
};
