import useMutate from "@hooks/useMutate";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DashboardItem } from "types";

type NewProps = Pick<DashboardItem, "title" | "content">;

const New = () => {
  const { send } = useMutate();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProps>();

  const onSubmit: SubmitHandler<NewProps> = async (data) => {
    const res = await send.post(
      `/posts/`,
      {
        // type: "JakeJeong",
        title: data?.title,
        content: data?.content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (res.ok) {
      navigate(`/info/${res?.item?._id}`);
    }
  };

  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          게시글 등록
        </h2>
      </div>
      <section className="mb-8 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">
              제목
            </label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register("title", {
                required: "잘못된 제목입니다.",
              })}
            />
            {/* 입력값 검증 에러 출력 */}
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              {errors?.title?.message}
            </p>
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">
              내용
            </label>
            <textarea
              id="content"
              rows={15}
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              {...register("content", {
                required: "잘못된 내용입니다.",
              })}
            ></textarea>
            {/* 입력값 검증 에러 출력 */}
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              {errors?.content?.message}
            </p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              등록
            </button>
            <button
              type="reset"
              className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
              onClick={() => history.back()}
            >
              취소
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default New;
