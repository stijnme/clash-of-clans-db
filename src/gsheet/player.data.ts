import { GoogleSpreadsheet } from "google-spreadsheet";

export class PlayerSpreadsheet {
  private doc: GoogleSpreadsheet;

  constructor(document: GoogleSpreadsheet) {
    this.doc = document;
  }

  async addDummyData() {
    // create a sheet and set the header row
    const sheet = await this.doc.addSheet({
      headerValues: ["name", "email"],
      title: "API-Data",
    });

    // append rows
    const larryRow = await sheet.addRow({
      name: "Larry Page",
      email: "larry@google.com",
    });
    const moreRows = await sheet.addRows([
      { name: "Sergey Brin", email: "sergey@google.com" },
      { name: "Eric Schmidt", email: "eric@google.com" },
    ]);
  }
}
