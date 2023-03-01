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
az group create --name ClashOfClans-Melxaco --location westeurope
```

### Create storage account

```
az storage account create --name cocmelxacostorage --location westeurope --resource-group ClashOfClans-Melxaco --sku Standard_LRS
```

### Create function app

```
az functionapp create --resource-group ClashOfClans-Melxaco --consumption-plan-location westeurope --os-type Linux --runtime node --runtime-version 18 --functions-version 4 --name ClashOfClans-Melxaco --storage-account cocmelxacostorage
```

Remark: command failed, created the app manually on the Azure Portal

## Call Azure Function

sheetName:
docId:
clanTag:

Example request:

```
http://localhost:7071/api/coc-gsheet?docId=10cRyo1IOVh5fQmpuH34JnVGYIIRWhvPe27WLjyXpBrw&sheetName=API-PlayerData&clanTag=20LCQ2CR8
```
