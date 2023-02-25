import {
  GoogleSpreadsheet,
  ServiceAccountCredentials,
} from "google-spreadsheet";

export class SpreadsheetAPI {
  private creds: ServiceAccountCredentials;
  public doc: GoogleSpreadsheet;

  constructor() {
    // this.creds = require("../clashofclans-database-4cb0ec1f29d0.json"); // authentication of the service user
    // load that info from env vars / config instead of the file
    this.creds = {
      private_key: process.env["GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY"],
      client_email: process.env["GOOGLE_SERVICE_ACCOUNT"],
    };
  }

  public async loadDoc(docId: string) {
    this.doc = new GoogleSpreadsheet(docId);

    // TODO: try catch
    await this.doc.useServiceAccountAuth(this.creds);
    // or preferably, load that info from env vars / config instead of the file
    // await this.doc.useServiceAccountAuth({
    // client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // private_key: process.env.GOOGLE_PRIVATE_KEY,
    // });
    await this.doc.loadInfo(); // loads document properties and worksheets
  }

  public async printDocInfo() {
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

  public static getGoogleDate(date: Date): number {
    const googleStartDate = new Date("Dec 30, 1899 00:00:00");
    let googleDate: number;
    googleDate =
      (date.getTime() - googleStartDate.getTime()) / (24 * 60 * 60 * 1000);

    return googleDate;
  }
}
