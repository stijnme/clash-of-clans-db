# Proof of concept

- [x] Do API request
- [x] Setup TypeScript
  - [x] Init TypeScript
  - [x] Generate JavaScript in dedicated directory
- [x] Setup ESLint
- [x] Replace `node-fetch` with Typescript alternative
  - Fetch is only available natively from node `18.0.0`. See [blogpost](https://blog.devgenius.io/experimenting-node-js-native-fetch-api-using-typescript-c5275f8a7592).
  - Switch `fetch` to `axios`.
- [x] Retrieve token from separate file (non-versioned)
- [x] Implement unit testing
- [x] Save data in SQLite db
  - [x] Setup DB
  - [x] Execute SQL
- Refactor to make modular, to should be possible to replace each module (e.g. other database)
  - [x] call API
  - [x] parse into data model -> type, interface or class?
  - [x] save to DB
- [x] Improve code with Typescript
  - [x] Model declarations
  - [x] Proper imports
- [ ] Schedule to run every x-hours
- [ ] Add cli interface
- [x] Replace `#` with `%23`

# Clan Requests

These requests are made to make the gathering of source data for the clan Google Spreadsheet easier.

- [ ] Player donations
- [ ] Clan games
- [ ] Get an output format to copy paste into the Google Spreadsheet document
  - [ ] Google Docs API?
  - [ ] Output sqlite?
  - [ ] Text file?

# Ideas

TODO: move this to a contribute file

- Each module should have an agreed interface/signature
  Example: db should always have functions insert()/update()/delete()
  => calls to module should always be the same, even if db is replaced
- Function save() of model should know a db object (class or input param)
- Same for API

Check:
[ ] https://github.com/suksant/sequelize-typescript-examples/blob/master/sequelize-express/src/models/product-model.ts
