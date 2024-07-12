import useFetch from "@hooks/useFetch";
import CommentNew from "./CommentNew";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";

const CommnetList = () => {
  const params = useParams();
  const { data, loading } = useFetch(`/posts/${+params._id}/replies`);

  return (
    <section className="mb-8">
      {/* 댓글 목록 */}
      <h4 className="mt-8 mb-4 ml-2">{`댓글 ${
        data ? data?.item?.length : 0
      }개`}</h4>

      {/* 댓글 */}
      {data?.item?.map((el) => (
        <CommentItem key={el._id} replyData={el} />
      ))}

      {/* 댓글 입력 */}
      <CommentNew id={params._id} />
    </section>
  );
};

export default CommnetList;
