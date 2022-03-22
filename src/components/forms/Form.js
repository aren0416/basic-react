import { useForm } from "react-hook-form";
import { Wrap, SForm, Title, Input, Button, Msg } from "../../styles/FormStyle";
import { userDB } from "../../db";
import { useNavigate } from "react-router-dom";

let idErrorMsg;
let pwdErrorMsg;
// => 입력한 아이디비번과 db에 저장된내용 비교해서 출력하기 위해 빈 변수 만듬

export const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    // console.log(getValues());

    const { userId: inputUserId, password: inputPwd } = getValues();
    // => 비구조화할당
    // const {실제 알아올 객체명 안에 있는 것들 넣기} = 실제 알아올 객체 명;

    //console.log(inputUserId, inputpwd);

    if (inputUserId !== userDB.userId) {
      //   console.log("아이디가 틀림");
      idErrorMsg = "아이디 틀림";
    }

    if (inputPwd !== userDB.password) {
      //   console.log("패스워드가 틀림");
      pwdErrorMsg = " 패스워드 틀림";
    }
    //console.log(idErrorMsg, pwdErrorMsg);

    alert("로그인이 되었습니다");
    navigate("/home");
  };

  //   console.log(watch());
  //   => 유저가 작성한 내용을 실시간으로 알아올 수 있음

  //   console.log(errors);
  //   => 유효성 검사시 오류가 났을때 내용을 알려줌

  //   console.log(isValid);
  //   => 폼 상태를 나타내며, 오류 및 유효성 검사를 실시간으로 할 수 있음
  //   => 불리언값으로 리턴됨

  return (
    <Wrap>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("userId", {
            required: "아이디는 필수입니다.",
            minLength: {
              value: 8,
              message: "아이디는 8자리 이상 작성해주세요.",
            },
          })}
          type="text"
          name="userId"
          placeholder="아이디"
        />

        {/* {errors?.userId?.message} */}
        {/* => and연산자를 사용할땐 식이 너무 길어지기 때문에 ?. 라는 옵셔널체이닝이 나옴
        => 속성이 없는 중첩객체를 오류없이 접할 수 있음 */}

        {errors?.userId?.message && <Msg>{errors?.userId?.message}</Msg>}
        {/* => 아이디에 에러존재시 message가 나오도록 작성 */}
        {idErrorMsg ? <Msg>{idErrorMsg}</Msg> : ""}
        {/* => db의 아이디와 비교해서 틀리면 onSubmit에 들어있는 조건대로 출력 */}

        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해주세요.",
            },
          })}
          type="password"
          name="password"
          placeholder="패스워드"
        />
        {errors?.password?.message && <Msg>{errors?.password?.message}</Msg>}
        {pwdErrorMsg ? <Msg>{pwdErrorMsg}</Msg> : ""}

        <Button
          active={isValid ? "1" : "0.4"}
          cursor={isValid ? "pointer" : "normal"}
        >
          로그인
        </Button>
      </SForm>
    </Wrap>
  );
};
