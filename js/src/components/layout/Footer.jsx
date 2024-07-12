const Footer = () => {
  return (
    <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
      <h2 className="a11y-hidden">푸터</h2>
      <ul className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">약관</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">게시판 정책</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">회사소개</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">광고</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">마이비즈니스</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">제휴 제안</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">이용약관</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">개인정보취급방침</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">청소년보호 정책</a>
        </li>
        <li className="hover:font-semibold dark:hover:text-gray-200">
          <a href="#">고객센터</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
