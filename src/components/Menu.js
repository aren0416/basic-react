export const Menu = ({ foods }) => {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food.id}>
          오늘의 메뉴는 {food.menu} 사이드는 {food.side}
        </li>
      ))}
    </ul>
  );
};
