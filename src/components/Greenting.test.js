import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greenting";

describe("Greeting Component", () => {
  test("render hello world as a text", () => {
    render(<Greeting />);

    //Arrange

    // Act
    // ..no logic written

    // Assert
    const getText = screen.getByText("Hello World", { exact: false });
    expect(getText).toBeInTheDocument();
  });

  test('check is "Good to see you all" message exist', () => {
    render(<Greeting />);
    const getText = screen.getByText("Good to see you all", { exact: false });
    expect(getText).toBeInTheDocument();
  });

  test('check is "Changed!" message exist after click', () => {
    render(<Greeting />);
    //act
    const buttonEle = screen.getByRole("button"); //select button from page t be clicked
    userEvent.click(buttonEle); // with event click n button
    //assert
    const getText = screen.getByText("Changed", { exact: false }); 
    expect(getText).toBeInTheDocument();
  });

});
