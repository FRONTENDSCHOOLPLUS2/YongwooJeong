import { DashboardItem } from "types";

type CommentItemProps = Pick<
  DashboardItem,
  "content" | "createdAt" | "updatedAt" | "user" | "_id"
>;

const CommentItem = ({ replyData }: { replyData: CommentItemProps }) => {
  console.log(replyData);

  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src={
            replyData?.user?.profile?.item[0]?.path
              ? `https://api.fesp.shop${replyData?.user?.profile?.item[0]?.path}`
              : "https://api.fesp.shop/files/00-sample/user-muzi.webp"
          }
          alt="어피치 프로필 이미지"
        />
        <a href="" className="text-orange-400">
          {replyData?.user?.name}
        </a>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">
          {replyData?.createdAt}
        </time>
      </div>
      <pre className="whitespace-pre-wrap text-sm">{replyData?.content}</pre>
    </div>
  );
};

export default CommentItem;
