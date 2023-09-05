#!/bin/bash

npm install
npm run build
npx npm run migrate:run
npm run start:dev