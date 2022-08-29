import { Popover, Transition } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";
import { Gender } from "features/users/types";

export interface FilterProps {
  onSearch: (keyword: string) => void;
  onSelectGender: (gender: Gender) => void;
  onResetFilter: () => void;
  selectedGender: Gender;
  keyword: string;
}

function Filter({
  onSearch,
  onSelectGender,
  onResetFilter,
  selectedGender,
  keyword,
}: FilterProps) {
  const genders = ["all", "male", "female"];

  return (
    <div className="flex flex-row items-end">
      {/* Search Filter */}
      <div className="flex flex-col">
        <p className="font-semibold text-md">Search</p>
        <div className="flex flex-row border-l border-t border-b border-black rounded">
          <input
            onChange={(e) => onSearch(e.target.value)}
            className="px-2 w-40 h-7 rounded-l"
            type={"search"}
            placeholder={"Search..."}
            value={keyword}
            aria-label="Search"
          />
          <div className="bg-blue-500 w-8 flex items-center justify-center border-black border-r rounded-tr rounded-br">
            <BsSearch color="white" />
          </div>
        </div>
      </div>
      {/* Gender Filter */}
      <div className="mx-5">
        <p className="font-semibold text-md">Gender</p>
        <Popover className={"w-40 border border-black rounded px-2 h-7"}>
          <Popover.Button className={"capitalize text-left w-full"}>
            {selectedGender}
          </Popover.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className={"flex flex-col bg-white -mx-2"}>
              {/* <div className={"flex flex-col bg-white border"}> */}
              {genders.map((gender, index) => (
                <Popover.Button
                  className="capitalize hover:bg-gray-500 hover:text-white"
                  key={index}
                  onClick={() => onSelectGender(gender as Gender)}
                >
                  {gender}
                </Popover.Button>
              ))}
              {/* </div> */}
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      {/* Reset Filter */}
      <button
        onClick={onResetFilter}
        className="border border-black rounded h-7 w-24"
      >
        <span>Reset Filter</span>
      </button>
    </div>
  );
}

export default Filter;
