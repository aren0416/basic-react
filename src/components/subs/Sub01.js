import { jjanguDb } from "../../db";
import { PageTitle } from "../PageTitle";
import { Sub } from "./Sub";

console.log(jjanguDb[0]);

export const Sub01 = () => {
  return (
    <div>
      <PageTitle title={"Sub01"} />
      <Sub
        img={jjanguDb[0].img}
        title={jjanguDb[0].title}
        desc={jjanguDb[0].desc}
      />
    </div>
  );
};
