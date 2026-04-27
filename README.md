# Duel Game

A turn-based duel simulation between two characters.

## Setup

Install the required dependencies and compile the TypeScript code:

npm install
npx tsc

## How to run

Run a standard duel (abilities assigned once at the start):
node dist/index.js

Run with dynamic abilities (new ability assigned every round):
node dist/index.js --dynamic

Run a 1,000 matches simulation to get win rates:
node dist/index.js --simulate

You can also combine the flags:
node dist/index.js --simulate --dynamic