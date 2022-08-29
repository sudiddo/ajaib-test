import moment from "moment";

import { User } from "features/users/types";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { SortType } from "features/users/usersSlice";
import Pagination, { PaginationProps } from "./Pagination";

interface Props extends PaginationProps {
  users: User[];
  onSort: (props: SortType) => void;
}

function Table({ users, onSort, onPageChange, page }: Props) {
  return (
    <div className="flex w-full flex-col">
      <table className="mt-10 text-white">
        <thead className="bg-black">
          <tr className="text-left text-md">
            <th
              onClick={() =>
                onSort({ sortBy: "username", sortOrder: "ascend" })
              }
              className="px-3 border cursor-pointer"
            >
              <span className="align-middle">Username</span>
              <div className="float-right">
                <BsChevronUp />
                <BsChevronDown />
              </div>
            </th>
            <th
              onClick={() => onSort({ sortBy: "name", sortOrder: "ascend" })}
              className="px-3 border cursor-pointer"
            >
              <span className="align-middle">Name</span>
              <div className="float-right">
                <BsChevronUp />
                <BsChevronDown />
              </div>
            </th>
            <th
              className="px-3 border cursor-pointer"
              onClick={() => onSort({ sortBy: "email", sortOrder: "ascend" })}
            >
              <span className="align-middle">Email</span>
              <div className="float-right">
                <BsChevronUp />
                <BsChevronDown />
              </div>
            </th>
            <th
              className="px-3 border cursor-pointer"
              onClick={() => onSort({ sortBy: "gender", sortOrder: "ascend" })}
            >
              <span className="align-middle">Gender</span>
              <div className="float-right">
                <BsChevronUp />
                <BsChevronDown />
              </div>
            </th>
            <th
              className="px-3 border cursor-pointer"
              onClick={() =>
                onSort({ sortBy: "registered", sortOrder: "ascend" })
              }
            >
              <span className="align-middle">Registered Date</span>
              <div className="float-right">
                <BsChevronUp />
                <BsChevronDown />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.login.uuid}
              className={`h-10 capitalize text-black ${
                index % 2 !== 0 ? "bg-gray-400" : "bg-gray-300"
              }`}
            >
              <td className="border px-3">{user.login.username}</td>
              <td className="border px-3">{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td className="border px-3">{user.email}</td>
              <td className="border px-3">{user.gender}</td>
              <td className="border px-3 text-right">
                {moment(user.registered.date).format("DD-MM-YYYY HH:MM")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination onPageChange={onPageChange} page={page} />
    </div>
  );
}

export default Table;
