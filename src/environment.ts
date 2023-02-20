import { ServiceAccountCredentials } from "google-spreadsheet";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COC_TOKEN: string;
      COC_URI: string;
      GOOGLE_SERVICE_ACCOUNT: string;
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
