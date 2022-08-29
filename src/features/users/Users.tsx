import Filter, { FilterProps } from "components/users/filter";
import Table from "components/users/table";
import { User } from "./types";
import { SortType } from "./usersSlice";

interface Props extends FilterProps {
  users: User[];
  onSort: (props: SortType) => void;
  page: number;
  onPageChange: (page: number) => void;
}

function Users({
  users,
  keyword,
  onResetFilter,
  onSearch,
  onSelectGender,
  selectedGender,
  onSort,
  page,
  onPageChange,
}: Props) {
  return (
    <div className="flex flex-col p-5">
      <Filter
        keyword={keyword}
        onResetFilter={onResetFilter}
        onSearch={onSearch}
        onSelectGender={onSelectGender}
        selectedGender={selectedGender}
      />

      <Table
        users={users}
        onSort={onSort}
        page={page}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Users;
