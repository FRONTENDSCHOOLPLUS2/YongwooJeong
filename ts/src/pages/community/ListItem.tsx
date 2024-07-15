import { useNavigate } from "react-router-dom";
import { DashboardItem } from "types";

type Proptype = Pick<DashboardItem, "title" | "createdAt" | "views">;

const ListItem = ({
  id,
  title,
  createdAt,
  name,
  num,
  views,
}: Proptype & { id: number; name: string; num: string }) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">{num}</td>
      <td
        className="p-2 truncate indent-4 cursor-pointer"
        onClick={() => navigate(`/info/${id}`)}
      >
        {title}
      </td>
      <td className="p-2 text-center truncate">{name}</td>
      <td className="p-2 text-center hidden sm:table-cell">{id}</td>
      <td className="p-2 text-center hidden sm:table-cell">{views}</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">
        {createdAt}
      </td>
    </tr>
  );
};

export default ListItem;
