import { render, fireEvent } from "@testing-library/react";
import Filter from ".";

const setup = () => {
  const emptyFunction = () => null;
  const utils = render(
    <Filter
      onSearch={emptyFunction}
      keyword={"23"}
      onResetFilter={emptyFunction}
      onSelectGender={emptyFunction}
      selectedGender={emptyFunction}
    />
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = utils.getByPlaceholderText("Search...");
  return {
    input,
    ...utils,
  };
};

test("It should show the input value", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});
