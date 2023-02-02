#!/bin/bash

echo ".................................."
echo "TEST:" $TEST

cd /home/node/app
npm install
npm run build
npm run lint

if [ -n "$TEST" ] && [ "$TEST" = 'unit' ]; then
    echo "Running unit tests"
    npm run test:cov
elif [ -n "$TEST" ] && [ "$TEST" = 'e2e' ]; then
    echo "Running e2e tests"
    npm run test:e2e:cov
elif [ -n "$TEST" ] && [ "$TEST" = 'lint' ]; then
    echo "Running lint"
    npm run lint
    npm run format
elif [ -n "$TEST" ] && [ "$TEST" = 'dev' ]; then
    echo "Running dev"
    npm run start:dev
fi
