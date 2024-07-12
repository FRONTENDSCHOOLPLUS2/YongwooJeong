import Theme from "@components/Theme";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import useUsersStore from "@zustand/usersStore";

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, loginUserData, setIsLogin } = useUsersStore();

  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <h2 className="a11y-hidden">네비게이션</h2>
        <div className="w-1/2 order-1 md:w-auto">
          <h3 className="a11y-hidden">홈으로</h3>
          <div className="flex items-center gap-2">
            <a className="flex" aria-label="홈으로">
              <img className="mr-3 h-6 sm:h-9" src={logo} />
              <span className="text-lg font-bold">멋사컴</span>
            </a>
          </div>
        </div>
        <div className="w-auto order-2 text-base mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <h3 className="a11y-hidden">메뉴</h3>
            <li className="hover:text-amber-500 hover:font-semibold">
              <a href="/info?page=1">정보공유</a>
            </li>
            <li className="hover:text-amber-500 hover:font-semibold">
              <a href="/free">자유게시판</a>
            </li>
            <li className="hover:text-amber-500 hover:font-semibold">
              <a href="/qna">질문게시판</a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">
          <h3 className="a11y-hidden">로그인 및 다크모드</h3>
          <div className="flex justify-end">
            <div className="flex justify-end">
              {isLogin ? (
                <p className="flex items-center">
                  <img
                    className="w-8 rounded-full mr-2"
                    src={
                      "item" in loginUserData.profileImage
                        ? `https://api.fesp.shop/${loginUserData.profileImage.item[0].path}`
                        : "https://api.fesp.shop/files/00-sample/user-muzi.webp"
                    }
                  />
                  {loginUserData.name}
                  <button
                    type="button"
                    className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                    onClick={() => {
                      setIsLogin(false);
                      localStorage.removeItem("user");
                      localStorage.removeItem("accessToken");
                      localStorage.removeItem("refreshToken");
                      navigate("/user/login");
                    }}
                  >
                    로그아웃
                  </button>
                </p>
              ) : (
                <>
                  <button
                    type="button"
                    className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                    onClick={() => navigate(`/user/login`)}
                  >
                    로그인
                  </button>
                  <button
                    type="button"
                    className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                    onClick={() => navigate(`/user/signup`)}
                  >
                    회원가입
                  </button>
                </>
              )}
            </div>
            <Theme />
          </div>
          <button />
        </div>
      </nav>
    </header>
  );
};

export default Header;
