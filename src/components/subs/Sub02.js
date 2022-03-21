import { jjanguDb } from "../../db";
import { PageTitle } from "../PageTitle";
import { Sub } from "./Sub";

export const Sub02 = () => {
  return (
    <div>
      <PageTitle title={"Sub02"} />
      <Sub
        img={jjanguDb[1].img}
        title={jjanguDb[1].title}
        desc={jjanguDb[1].desc}
      />
    </div>
  );
};
