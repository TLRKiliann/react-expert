import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, it, expect, vi } from "vitest";
import renderer from 'react-test-renderer';
import InputTask, { PropsValue } from "../InputTask";
import { handleValidate } from '../InputTask';

// toMatchSnapshot
test('renders correctly InputTask', () => {
  const component = renderer.create(<InputTask />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Test 2: Vérification que le champ de saisie appelle la fonction handleChangeInput lorsqu'il est modifié
test("Le champ de saisie appelle la fonction handleChangeInput lorsqu'il est modifié", () => {
  const handleChangeInput = vi.fn(); // Créez un mock pour la fonction handleChangeInput
  const props: PropsValue = {
    valueToRetrieve: {
      firstName: "John",
      age: 30,
      admin: true,
    },
    change: "Hello",
    handleChangeInput, // Utilisez le mock ici
    handleValidate: vi.fn(),
  };
  render(<InputTask {...props} />);
  const inputElement = screen.getByTestId("firstname");
  fireEvent.change(inputElement, { target: { value: "New Value" } });
  expect(handleChangeInput).toHaveBeenCalledTimes(1);
  expect(handleChangeInput).toHaveBeenCalledWith(expect.any(Object)); 
});

// Test 3: Verify "Validate" btn & call fonction handleValidate when clicked.
test("Le bouton 'Validate' appelle la fonction handleValidate lorsqu'il est cliqué", () => {
  const handleValidate = vi.fn(); // Créez un mock pour la fonction handleValidate
  const props: PropsValue = {
    valueToRetrieve: {
      firstName: "John",
      age: 30,
      admin: true,
    },
    change: "Hello",
    handleChangeInput: vi.fn(),
    handleValidate,
  };
  render(<InputTask {...props} />);
  const validateButton = screen.getByTestId("btntestvalidate");
  fireEvent.click(validateButton);
  expect(handleValidate).toHaveBeenCalledTimes(1);
});
