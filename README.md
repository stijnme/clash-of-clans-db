# Documentation

## Setup Azure

Source: (Quickstart: Create a TypeScript function in Azure from the command line)[https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=azure-cli]

### Sign in

```
az login
```

### Create resource group

List locations/regions:

```
az account list-locations
```

```
az group create --name <resource-group-name> --location westeurope
```

### Create storage account

```
az storage account create --name <storage-account-name> --location westeurope --resource-group <resource-group-name> --sku Standard_LRS
```

### Create function app

```
az functionapp create --resource-group <resource-group-name> --consumption-plan-location westeurope --os-type Linux --runtime node --runtime-version 18 --functions-version 4 --name <function-app-name> --storage-account <storage-account-name>
```

Remark: command failed, created the app manually on the Azure Portal

## Call Azure Function

Parameters:

- `docId`: document id of Google Sheets
- `sheetName`: the sheet name in the Google Sheets document. Will be created if it doesn't exist, else it will be appended.
- `clanTag`: the Clash Of Clans clan tag, without the hashtag prefix

Example request:

```
http://localhost:7071/api/coc-gsheet?docId=10cRyo1IOVh5fQmpuH34JnVGYIIRWhvPe27WLjyXpBrw&sheetName=API-PlayerData&clanTag=20LCQ2CR8
```

## Deploy to Azure

This is automatically performed by merging into the main branch on GitHub: [deployments](https://github.com/stijnme/clash-of-clans-db/deployments)

## Schedule

API calls are scheduled via [https://console.cron-job.org](https://console.cron-job.org)
