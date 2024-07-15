import Spinner from "@components/Spinner";
import useMutate from "@hooks/useMutate";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "types";

type SignupProps = Pick<LoginUser, "email" | "name" | "type" | "profileImage">;

const Signup = () => {
  const navigate = useNavigate();
  const { loading, send } = useMutate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps & { password: string }>();

  const onSignup: SubmitHandler<SignupProps & { password: string }> = async (
    data
  ) => {
    const formData = new FormData();
    formData.append("attach", data.profileImage[0]);

    const responseProfileImgPost = await fetch("https://api.fesp.shop/files", {
      method: "POST",
      body: formData,
    });

    const profileImageData = await responseProfileImgPost.json();

    const responseSignupPost = await send.post("/users/", {
      email: data.email,
      password: data.password,
      name: data.name,
      type: "user",
      profileImage: profileImageData,
    });

    if (responseSignupPost.ok) {
      navigate("/user/login");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8  border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            회원 가입
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSignup)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="name"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("name")}
            />
            {/* 입력값 검증 에러 출력 */}
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">에러 메세지</p> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("email", {
                minLength: {
                  value: 8,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            {/* 입력값 검증 에러 출력 */}
            {
              <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
                {errors?.email?.message}
              </p>
            }
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자리 이상 입력해야 합니다.",
                },
              })}
            />
            {/* 입력값 검증 에러 출력 */}
            {
              <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
                {errors?.password?.message}
              </p>
            }
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="profileImage"
            >
              프로필 이미지
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              {...register("profileImage")}
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded"
            >
              회원가입
            </button>
            <button
              type="reset"
              className="bg-gray-900 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded"
              onClick={() => history.back()}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
