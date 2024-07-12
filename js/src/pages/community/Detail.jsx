import useFetch from "@hooks/useFetch";
import useMutate from "@hooks/useMutate";
import useUsersStore from "@zustand/usersStore";
import { useNavigate, useParams } from "react-router-dom";
import CommnetList from "./CommentList";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { loginUserData } = useUsersStore();

  const { data, loading } = useFetch(`/posts`);
  const { send } = useMutate();

  const item = data?.item?.filter((el) => el._id === +params._id)[0];

  const handlePostDelete = async () => {
    const res = await send.delete(`/posts/${item?._id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (res.ok) {
      navigate("/info");
    }
  };

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <div className="font-semibold text-xl">{item?.title}</div>
        <div className="text-right text-gray-400">
          작성자 : {item?.user?.name}
        </div>
        <div className="mb-4">
          <div>
            <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
              {item?.content}
            </pre>
          </div>
          <hr />
        </div>
        <div className="flex justify-end my-4">
          <button
            type="button"
            className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            onClick={() => navigate("/info")}
          >
            목록
          </button>
          {loginUserData?.name === item?.user?.name ? (
            <>
              <button
                type="button"
                className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                onClick={() => navigate(`/info/${item?._id}/edit`)}
              >
                수정
              </button>
              <button
                type="button"
                className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                onClick={handlePostDelete}
              >
                삭제
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
      <CommnetList />
    </main>
  );
};

export default Detail;
