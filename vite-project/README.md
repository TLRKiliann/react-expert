# React + TypeScript + Vite

## Subject

- How to change the value of a prop with an input, from another component.

## Motivation

- A simple exercise to review typescript and a practical execution to test RTL and jsdom.

## Basic Installation from scratch

$ pnpm create vite

Options :

> React

> TypeScript

## Run

$ cd vite-project

$ pnpm install

$ pnpm run dev

## Configuration for testing

$ pnpm install --save-dev react-test-renderer

$ pnpm install --save-dev jest babel-jest jsdom @babel/preset-env @babel/preset-react

```
(vite.config.js)

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    }
})
```

```
(package.json)

"scripts": {
   ...
   "test": "vitest"
 "test": "vitest",
   "coverage": "vitest run --coverage",
   "watch-co": "vitest watch --coverage",
  },
```

## Testing

$ pnpm run test

```
 Test Files  3 passed (3)
      Tests  12 passed (12)
   Start at  12:31:17
   Duration  2.23s (transform 119ms, setup 0ms, collect 676ms, tests 256ms, environment 1.45s, prepare 418ms)
```

$ pnpm run coverage

```
% Coverage report from v8
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 src            |     100 |      100 |     100 |     100 |                   
  App.tsx       |     100 |      100 |     100 |     100 |                   
 src/components |     100 |      100 |     100 |     100 |                   
  InputTask.tsx |     100 |      100 |     100 |     100 |                   
  Task.tsx      |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------
```
