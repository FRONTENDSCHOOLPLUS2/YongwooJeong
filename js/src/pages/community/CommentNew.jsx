import useMutate from "@hooks/useMutate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CommentNew = ({ id }) => {
  const { loading, send } = useMutate();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await send.post(
      `/posts/${id}/replies`,
      {
        content: data.content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(id);

    if (res.ok) {
      window.location.reload();
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <textarea
            rows="3"
            cols="40"
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"
            {...register("content", {
              minLength: { value: 1, message: "잘못된 입력입니다." },
            })}
          ></textarea>

          {/* 에러 메세지 출력 */}
          {/*
              <p className="ml-2 mt-1 text-sm text-red-500">
                에러 메세지
              </p>
              */}
        </div>
        <button
          type="submit"
          className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
        >
          댓글 등록
        </button>
      </form>
    </div>
  );
};

export default CommentNew;
