import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { it, expect } from "vitest";
import App from "./App";
import InputTask from "./App";
import { handleClick } from "./App";
import { handleValidate } from "./App";

test('renders correctly App', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/*
test('renders correctly InputTask', () => {
  const component_2 = renderer.create(
    <InputTask />
  );
  let tree_2 = component_2.toJSON();
  expect(tree_2).toMatchSnapshot();
});
*/

test('testing button by role', () => {
  render(<App />);
  const myBtn = screen.getAllByRole('button');
  expect(myBtn).toHaveLength(2);
});

//function handleClick
test("testing if handleClick function is present", () => {
  const handleClick = vi.fn();
  expect(handleClick).toBeDefined()
});

//button + function
test('handleClick return boolean', () => {const beverage = "yeah";
  const handleClick = vi.fn(beverage => beverage)
  handleClick(beverage)
  expect(handleClick).toHaveReturnedWith("yeah")
  expect(handleClick).toHaveBeenCalledTimes(1)
});

//button + function
test('handleValidate return boolean', () => {const beverage = "yeah";
  const handleValidate = vi.fn(beverage => beverage)
  handleValidate(beverage)
  expect(handleValidate).toHaveReturnedWith("yeah")
  expect(handleValidate).toHaveBeenCalledTimes(1)
});

//tester la valeur de retour
test("should update state with clik", () => {
  const valueTodo = 'ok';
  const handleClick = vi.fn(valueTodo => valueTodo);
  const wrapper = render(
    <button onClick={handleClick} data-testid="btntest">
      Click
    </button>
  );
  const rep = vi.spyOn(React, "useState");
  rep.mockImplementation(size => [size, valueTodo]);
  fireEvent.click(screen.getByTestId('btntest'));
  expect(handleClick).toHaveBeenCalledTimes(1);
  //expect(valueTodo).toHaveReturnedWith('ok')
});

test('handleClick return yeah', () => {
  const beverage = "yeah";
  const handleClick = vi.fn(beverage => beverage)
  handleClick(beverage)
  const { getByTestId } = render(
    <App />
  );
  fireEvent.click(screen.getByTestId('btntest'))
  expect(handleClick).toHaveReturnedWith("yeah")
  expect(handleClick).toHaveBeenCalledTimes(1)
});

test('handleValidate return Cool', () => {
  const beverage = "Cool";
  const handleValidate = vi.fn(beverage => beverage)
  handleValidate(beverage)
  const { getByTestId } = render(
    <InputTask />
  );
  fireEvent.click(screen.getByTestId('btntestvalidate'))
  expect(handleValidate).toHaveReturnedWith("Cool")
  expect(handleValidate).toHaveBeenCalledTimes(1)
});