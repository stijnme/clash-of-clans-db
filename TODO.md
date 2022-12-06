# Proof of concept
- [X] Do API request
- [X] Setup TypeScript
  * [X] Init TypeScript
  * [X] Generate JavaScript in dedicated directory
- [X] Setup ESLint
- [X] Replace `node-fetch` with Typescript alternative
  * Fetch is only available natively from node `18.0.0`. See [blogpost](https://blog.devgenius.io/experimenting-node-js-native-fetch-api-using-typescript-c5275f8a7592).
  * Switch `fetch` to `axios`.
- [X] Retrieve token from separate file (non-versioned)
- [X] Implement unit testing
- [X] Save data in SQLite db
  - [X] Setup DB
  - [X] Execute SQL
- [ ] Improve code with Typescript
  - [ ] Model declarations
  - [ ] Proper imports
- [ ] Schedule to run every x-hours
- [ ] Add cli interface
