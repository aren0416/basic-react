export const Menu = ({ foods }) => {
  const text = "오늘의 메뉴는";
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <ul>
        <li>
          {text} {foods[0].menu} 사이드 {foods[0].side}
        </li>
        <li>
          {text} {foods[1].menu} 사이드 {foods[1].side}
        </li>
        <li>
          {text} {foods[2].menu} 사이드 {foods[2].side}
        </li>
        <li>
          {text} {foods[3].menu} 사이드 {foods[3].side}
        </li>
        <li>
          {text} {foods[4].menu} 사이드 {foods[4].side}
        </li>
      </ul>
    </>
  );
};
