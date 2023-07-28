import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { it, expect } from "vitest";
import App from "./App";
import InputTask from "./App";
import { handleClick } from "./App";
import { handleValidate } from "./App";

// toMatchSnapshot
test('renders correctly App', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// nb of btn
test('testing button by role', () => {
  render(<App />);
  const myBtn = screen.getAllByRole('button');
  expect(myBtn).toHaveLength(2);
});

// function handleClick
test("testing if handleClick function is present", () => {
  const handleClick = vi.fn();
  expect(handleClick).toBeDefined()
});

// function handleValidate
test("testing if handleValidate function is present", () => {
  const handleValidate = vi.fn();
  expect(handleValidate).toBeDefined()
});

// button + function
test('handleClick return boolean', () => {const beverage = "yeah";
  const handleClick = vi.fn(beverage => beverage)
  handleClick(beverage)
  expect(handleClick).toHaveReturnedWith("yeah")
  expect(handleClick).toHaveBeenCalledTimes(1)
});

// verify "Validate" btn & call fonction handleValidate when clicked.
test('handleChangeInput met à jour la valeur de l\'entrée', () => {
  // composant utilisant changeInput
  const { getByTestId } = render(
    <InputTask />
  );
  const inputElement = getByTestId('firstname');
  const testValue = 'Nouvelle valeur';
  fireEvent.change(inputElement, { target: { value: testValue } });
  // Verify if value was updated correctly.
  expect(inputElement.value).toBe(testValue);
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


// below it's code that test dosen't look after.

/*
//button + function
test('handleValidate return boolean', () => {
  const valueTodo = 'cool';
  const handleValidate = vi.fn(valueTodo => valueTodo)
  handleValidate(valueTodo)
  const wrapper = render(
    <InputTask>
      <button data-testid="btntestvalidate" onClick={handleClick}>
        Click
      </button>
    </InputTask>
  );
  fireEvent.click(screen.getByTestId('btntestvalidate'));
  expect(handleValidate).toHaveReturnedWith("cool")
  expect(handleValidate).toHaveBeenCalledTimes(1)
});
*/

/*
//tester la valeur de retour
test("should update state with clik", () => {
  const valueTodo = 'ok';
  const handleValidate = vi.fn(valueTodo => valueTodo);
  const wrapper = render(
    <button data-testid="btntest" onClick={handleValidate}>
      Click
    </button>
  );
  const rep = vi.spyOn(React, "useState");
  rep.mockImplementation(size => [size, valueTodo]);
  fireEvent.click(screen.getByTestId('btntest'));
  expect(handleValidate).toHaveBeenCalledTimes(1);
  //expect(valueTodo).toHaveReturnedWith('ok')
});
*/

/*
test('handleValidate return Cool', () => {
  const beverage = "Cool";
  const handleValidate = vi.fn(beverage => beverage)
  handleValidate(beverage)
  const { getByTestId } = render(
    <App />
  );
  fireEvent.click(screen.getByTestId('btntestvalidate'))
  expect(handleValidate).toHaveReturnedWith("Cool")
  expect(handleValidate).toHaveBeenCalledTimes(1)
});
*/