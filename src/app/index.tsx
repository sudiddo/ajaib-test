import { Gender } from "features/users/types";
import Users from "features/users/Users";
import {
  resetSortTypes,
  setPage,
  setSortType,
  SortType,
  usersSelector,
} from "features/users/usersSlice";
import { getUsers } from "features/users/usersThunk";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "usehooks-ts";
import { AppDispatch } from "./store";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, sortTypes, page } = useSelector(usersSelector);

  const [selectedGender, setSelectedGender] = useState<Gender>("all");
  const [keyword, setKeyword] = useState("");
  const keywordValue = useDebounce<string>(keyword, 500);

  useEffect(() => {
    // Triggers when "debouncedValue" changes
    dispatch(
      getUsers({
        gender: selectedGender,
        keyword: keywordValue,
        sorts: sortTypes,
        page,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordValue]);

  const onSelectGender = (gender: "male" | "female" | "all") => {
    setSelectedGender(gender);
    dispatch(
      getUsers({ gender, keyword: keywordValue, sorts: sortTypes, page })
    );
  };

  const onSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  const onResetFilter = () => {
    setKeyword("");
    setSelectedGender("all");
    setPage(1);
    dispatch(setPage(1));
    dispatch(resetSortTypes());
  };

  const onSort = (props: SortType) => {
    const index = sortTypes.findIndex((s) => s.sortBy === props.sortBy);
    if (index === -1) {
      dispatch(setSortType(props));
      dispatch(
        getUsers({
          gender: selectedGender,
          keyword: keywordValue,
          sorts: [...sortTypes, props],
          page,
        })
      );
    } else {
      const sortOrder =
        sortTypes[index].sortOrder === "ascend" ? "descend" : "ascend";
      const newSort: SortType = { ...props, sortOrder };
      const newSorts = [...sortTypes];
      newSorts.splice(index, 1, newSort);
      dispatch(setSortType(newSort));
      dispatch(
        getUsers({
          gender: selectedGender,
          keyword: keywordValue,
          sorts: [...newSorts],
          page,
        })
      );
    }
  };

  const onPageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
    dispatch(
      getUsers({
        gender: selectedGender,
        keyword: keywordValue,
        sorts: sortTypes,
        page: pageNumber,
      })
    );
  };

  return (
    <div className="h-screen w-screen">
      <Users
        users={users}
        onSelectGender={onSelectGender}
        keyword={keyword}
        onResetFilter={onResetFilter}
        onSearch={onSearch}
        selectedGender={selectedGender}
        onSort={onSort}
        page={page}
        onPageChange={onPageChange}
      />
    </div>
  );
}
