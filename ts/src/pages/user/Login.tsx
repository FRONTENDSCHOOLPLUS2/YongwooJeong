import Spinner from "@components/Spinner";
import useMutate from "@hooks/useMutate";
import useUsersStore from "@zustand/usersStore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loading, send } = useMutate();
  const { isLogin, setIsLogin, loginUserData, setLoginUserData } =
    useUsersStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    const res = await send.post(`/users/login`, {
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("accessToken", res.item.token.accessToken);
    localStorage.setItem("refreshToken", res.item.token.refreshToken);

    setLoginUserData(res.item);

    if (res.ok) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [navigate, isLogin, loginUserData]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            로그인
          </h2>
        </div>

        <form onSubmit={handleSubmit(onLogin)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
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
              id="password"
              type="password"
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
            <a
              href="#"
              className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline"
            >
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              로그인
            </button>
            <a
              href="/user/signup"
              className="ml-8 text-gray-800 hover:underline"
            >
              회원가입
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
