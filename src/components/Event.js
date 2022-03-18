// import { useState } from "react";

// export const Event = () => {
//   const [num, setNum] = useState(0);

//   //   const onClickPlus = () => {
//   //     setNum(num + 1);
//   //   };

//   //   const onClickMinus = () => {
//   //     setNum(num - 1);
//   //   };

//   return (
//     <div>
//       <h4>{num}</h4>
//       {/* <button onClick={onClickPlus}>+</button>
//       <button onClick={onClickMinus}>-</button> */}
//       <button onClick={() => setNum(num + 1)}>+</button>
//       <button onClick={() => setNum(num - 1)}>-</button>
//     </div>
//   );
// };

import { useState } from "react";

export const Event = () => {
  const [like, setLike] = useState(0);
  const [heart, setHeart] = useState("♡");

  const onClickHeart = () => {
    setLike(like + 1);
    setHeart("♥︎");
  };

  return (
    <div>
      <span onClick={onClickHeart}>{heart}</span>좋아요 <span>{like}</span>
    </div>
  );
};
