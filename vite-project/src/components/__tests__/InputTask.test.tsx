import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { it, expect } from "vitest";
import InputTask from "../InputTask";
//import { handleValidate } from '../InputTask';

test('renders correctly InputTask', () => {
  const component = renderer.create(<InputTask />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//props
//handleChangeInput
//handleValidate
