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
- [x] Schedule to run every x-hours
- [ ] Add cli interface
  - [ ] Or Discord bot?
- [x] Replace `#` with `%23`

# Clan Requests

These requests are made to make the gathering of source data for the clan Google Spreadsheet easier.

- [x] Player donations
- [x] Clan games
  > How does Clan Games Scoreboard work?
  > Clan Games points can not be obtained directly! It is only possible by comparing Games Champion achievement.
  > Our system pulls everyone's Games Champion achievement at the beginning of Clan Games and compares every 30-60 minutes.
  - [ ] Also add extra fields to sqlite db
- [x] Get an output format to copy paste into the Google Spreadsheet document
  - [x] Google Docs API?
  - [ ] Use Google BigQuery?

# Ideas

TODO: move this to a contribute file

- Each module should have an agreed interface/signature
  Example: db should always have functions insert()/update()/delete()
  => calls to module should always be the same, even if db is replaced
- Function save() of model should know a db object (class or input param)
- Same for API

Check:
[ ] https://github.com/suksant/sequelize-typescript-examples/blob/master/sequelize-express/src/models/product-model.ts

# Date handling in Google Spreadsheet

See: https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption

# Hosting

- [ ] Free Oracle cloud tier ?

- [ ] Azure function? See:
  - Function app: https://learn.microsoft.com/en-us/azure/azure-functions/shift-expressjs?tabs=typescript
  - Schedule: https://learn.microsoft.com/en-us/azure/azure-functions/functions-create-scheduled-function
