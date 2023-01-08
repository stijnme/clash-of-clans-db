import { GoogleSpreadsheet } from "google-spreadsheet";

async function main() {
  const creds = require("./clashofclans-database-4cb0ec1f29d0.json"); // the file saved above
  const doc = new GoogleSpreadsheet(
    "10cRyo1IOVh5fQmpuH34JnVGYIIRWhvPe27WLjyXpBrw"
  );
  await doc.useServiceAccountAuth(creds);

  // or preferably, load that info from env vars / config instead of the file
  // await doc.useServiceAccountAuth({
  // client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  // private_key: process.env.GOOGLE_PRIVATE_KEY,
  // });

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  //  const dataSheet = doc.sheetsById("API Data");
  //  Loop all sheets
  const numberOfSheets = doc.sheetCount;
  for (let i = 0; i < numberOfSheets; i++) {
    //const dataSheet = doc.sheetsById(i);
    const dataSheet = doc.sheetsByIndex[i];
    console.log(dataSheet.sheetId, " = ", dataSheet.title);
  }

  // create a sheet and set the header row
  const sheet = await doc.addSheet({
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

  // const sheets[GoogleSpreadsheetWorksheet] = doc.sheetsByIndex;
  // for(const dataSheet from sheets) {
  //   console.log(dataSheet.sheetId, " = ", dataSheet.title);
  // }
}

main();
