import {
  GoogleSpreadsheet,
  ServiceAccountCredentials,
} from "google-spreadsheet";

export class SpreadsheetAPI {
  private creds: ServiceAccountCredentials;
  private doc: GoogleSpreadsheet;

  constructor() {
    // or preferably, load that info from env vars / config instead of the file
    this.creds = require("../clashofclans-database-4cb0ec1f29d0.json"); // authentication of the service user
    this.loadDoc();
  }

  private async loadDoc() {
    this.doc = new GoogleSpreadsheet(
      // TODO: make following hardcoded value variable
      "10cRyo1IOVh5fQmpuH34JnVGYIIRWhvPe27WLjyXpBrw"
    );

    // TODO: try catch
    await this.doc.useServiceAccountAuth(this.creds);
    // or preferably, load that info from env vars / config instead of the file
    // await this.doc.useServiceAccountAuth({
    // client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // private_key: process.env.GOOGLE_PRIVATE_KEY,
    // });
  }

  async printDocInfo() {
    await this.doc.loadInfo(); // loads document properties and worksheets
    console.log(this.doc.title);

    //  const dataSheet = this.doc.sheetsById("API Data");
    //  Loop all sheets
    const numberOfSheets = this.doc.sheetCount;
    for (let i = 0; i < numberOfSheets; i++) {
      //const dataSheet = this.doc.sheetsById(i);
      const dataSheet = this.doc.sheetsByIndex[i];
      console.log(dataSheet.sheetId, " = ", dataSheet.title);
    }
  }
}