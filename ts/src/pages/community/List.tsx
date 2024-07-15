import Pagination from "@components/Pagination";
import Search from "@components/Search";
import Spinner from "@components/Spinner";
import useFetch from "@hooks/useFetch";
import ListItem from "@pages/community/ListItem";
import usePageStore from "@zustand/pageStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const { setCurrentPage, setLastPage } = usePageStore();
  const location = useLocation();
  const crrntpage = location.search.match(/(\d+)$/)?.[0] || "1";

  const { data, loading } = useFetch(`/posts?limit=10&page=${crrntpage}`);

  useEffect(() => {
    setCurrentPage(+crrntpage);
    if (data?.pagination.totalPages) {
      setLastPage(data?.pagination.totalPages);
    }
  }, [setCurrentPage, setLastPage, crrntpage, data?.pagination?.totalPages]);

  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
          정보 공유
        </h2>
      </div>
      <div className="flex justify-end mr-4">
        {/* 검색 */}
        <Search />

        <button
          type="button"
          className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
          onClick={() => navigate("/info/new")}
        >
          글작성
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <section className="pt-10">
          <table className="border-collapse w-full table-fixed">
            <colgroup>
              <col className="w-[10%] sm:w-[10%]" />
              <col className="w-[60%] sm:w-[30%]" />
              <col className="w-[30%] sm:w-[15%]" />
              <col className="w-0 sm:w-[10%]" />
              <col className="w-0 sm:w-[10%]" />
              <col className="w-0 sm:w-[25%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-solid border-gray-600">
                <th className="p-2 whitespace-nowrap font-semibold">번호</th>
                <th className="p-2 whitespace-nowrap font-semibold">제목</th>
                <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  조회수
                </th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  댓글수
                </th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 로딩 상태 표시 */}
              {/* 에러 메세지 출력 */}
              {/*
              <tr>
                <td colSpan="6" className="py-20 text-center">에러 메세지</td>
              </tr>
            */}

              {/* 본문 출력 */}
              {data?.item?.map((el, idx) => (
                <ListItem
                  key={el._id}
                  id={el._id}
                  title={el.title}
                  name={el.user.name}
                  createdAt={el.createdAt}
                  num={String(Number(idx) + 1)}
                  views={el.views}
                />
              ))}
            </tbody>
          </table>
          <hr />

          {/* 페이지네이션 */}
          <Pagination />
        </section>
      )}
    </main>
  );
};

export default List;
