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

// import { useState } from "react";

// export const Event = () => {
//   const [like, setLike] = useState(0);
//   const [heart, setHeart] = useState("♡");

//   const onClickHeart = () => {
//     setLike(like + 1);
//     setHeart("♥︎");
//   };

//   return (
//     <div>
//       <span onClick={onClickHeart}>{heart}</span>좋아요 <span>{like}</span>
//     </div>
//   );
// };

// import { useState } from "react";
// import styled from "styled-components";

// const Box = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: ${(props) => props.backColor};
//   color: white;
// `;

// export const Event = () => {
//   const [color, setColor] = useState("gold");

//   const [num, setNum] = useState(0);

//   const onClickBox = () => {
//     if (num === 0) {
//       setColor("mediumslateblue");
//       setNum(num + 1);
//     } else if (num === 1) {
//       setColor("gold");
//       setNum(num - 1);
//     }
//     console.log(num);
//   };

//   return (
//     <Box backColor={color} onClick={onClickBox}>
//       <h3>클릭해주세요</h3>
//     </Box>
//   );
// };

import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: slateblue;
  color: white;
`;

const PopBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: lightgray;
  margin: 100px auto;
  display: ${(props) => props.boxDisplayBlock};
`;

const Close = styled.h4`
  font-size: 30px;
  width: 50px;
  height: 50px;
  background-color: #f8f8f8;
`;

export const Event = () => {
  const [displayBlock, setDisplayBlock] = useState("none");

  const onBoxClick = () => {
    setDisplayBlock("block");
  };

  const onCloseClick = () => {
    setDisplayBlock("none");
  };

  return (
    <>
      <Box onClick={onBoxClick}>
        <h3>클릭해주세요</h3>
      </Box>

      <PopBox boxDisplayBlock={displayBlock}>
        <Close onClick={onCloseClick}>X</Close>
      </PopBox>
    </>
  );
};
