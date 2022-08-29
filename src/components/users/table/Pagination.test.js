import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import "@testing-library/jest-dom/extend-expect";

test("Pagination Render", () => {
  const emptyFunction = () => null;

  // render the component on virtual dom
  render(<Pagination page={1} onPageChange={emptyFunction} />);

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const nextBtn = screen.getByTestId("next");

  //interact elements
  fireEvent.click(nextBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("Showing 1 to 10 of 10 results");
});
