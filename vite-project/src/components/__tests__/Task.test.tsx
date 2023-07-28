import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { it, expect } from "vitest";
import Task from "../Task";

// toMatchSnapshot
test('renders correctly Task', () => {
  const component = renderer.create(<Task />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

