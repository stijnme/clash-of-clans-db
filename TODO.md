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
- Refactor to make modular, to should be possible to replace each module (e.g. other database)
  - [ ] call API
  - [ ] parse into data model -> type, interface or class?
  - [ ] save to DB
- [ ] Improve code with Typescript
  - [ ] Model declarations
  - [ ] Proper imports
- [ ] Schedule to run every x-hours
- [ ] Add cli interface


Ideas:
- Each module should have an agreed interface/signature
  Example: db should always have functions insert()/update()/delete()
  => calls to module should always be the same, even if db is replaced
- Function save() of model should know a db object (class or input param)
- Same for API