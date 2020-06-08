# spfx2016

SPFx sample app that targets SP2016 on-premise environment. Serves as guidance and how-to for common operations (create, read, update, delete) of list items.

## Screenshots

Once provisioned, this app provisions a single SharePoint list.

![Site Contents](./screenshots/walkthrough1.png "Site Contents")

Query all list items.

![get all](./screenshots/walkthrough2.png "get all")


Clicking on "Avery Stewart" below creates a new list item.

![contacts](./screenshots/walkthrough3.png "contacts")

Query for a single list item.

![chat](./screenshots/walkthrough4.png "chat")

Update a single list item.

![update1](./screenshots/walkthrough5.png "update1")

Update a single list item again.

![update2](./screenshots/walkthrough6.png "update2")

Query all list tiems.

![get all](./screenshots/walkthrough7.png "get all")

## Setting up Windows Machine for SPFx Development

1. Install code editor [VSCode](https://code.visualstudio.com/)
2. Install NodeJS [NodeJS](https://www.nodejs.org)
3. Install Git [Git](https://git-scm.com/downloads)
4. Install Node Version Manager [NVM](https://github.com/coreybutler/nvm-windows)
5. Install required tools from npm

```
nvm use 10.20.1
npm install --global yo
npm install --global @microsoft/generator-sharepoint
npm install --global gulp
```

## Installing the App on SP2016

### Pre-requisites, obtain some URLs from SharePoint

| URL                                                            | Example                                                            |
| ---------------------------------------------------------------|:------------------------------------------------------------------:|
| Document library/folder where you wish to keep bundled assets  | http://socafrica.westeurope.cloudapp.azure.com/SPFxBundles/sp-2016 | 
| App Catalog                                                    | http://socafrica.westeurope.cloudapp.azure.com/sites/appcatalog    |
| Site where you wish to install App                             | http://socafrica.westeurope.cloudapp.azure.com                     |


### Get Source Code
```
cd ~\Desktop
git clone https://github.com/chanm003/spfx2016.git
```


### Edit CDN Base Path to match URL of document library/folder that you created
```
code ~\Desktop\spfx2016\config\write-manifests.json
```

### Build source code
```
cd ~\Desktop\spfx2016
nvm use 10.20.1
npm install
npm run fixbuild
gulp build
gulp bundle --ship
gulp package-solution --ship
```

### Upload Build Artifacts to SP2016

| Source                                                    | Are                                           | 
| ----------------------------------------------------------|:---------------------------------------------:| 
| ~\Desktop\spfx2016\sharepoint\solution\sp-2016.sppkg      | App Catalog                                   |
| ~\Desktop\spfx2016\temp\deploy\\*                         | Document library/folder that you created      | 

### Add an App in Site Contents, Create Site Page, Insert Web Part
TBD

## Making Changes to Source Code, Running and Testing locally
TBD

## Configuring SP2016 Farm to Support SPFX

This section documents the steps for enabling SPFx development at the farm-level.   Some or all of these requirements may have already been met by enabling the farm to support Add-Ins (i.e. App Catalog already exists).

### Install Feature Pack 2
1. Download and install [KB4011127](https://support.microsoft.com/en-us/help/4011127/description-of-the-security-update-for-sharepoint-server-2016-septembe)
2. Download and install [KB4011112](https://support.microsoft.com/en-us/help/4011112/september-12-2017-update-for-sharepoint-server-2016-kb4011112)

Double click to begin install.   Installer will detect and automatically exit if already installed.   If one or both installation processes are required, be sure to adhere to best practices and run the **SharePoint Products Configuration Wizard**.

### Setup an App Catalog

Two service applications are required.

![farm1](./screenshots/farm1.png "farm1")

Ensure service application is associated with web application.

![farm2](./screenshots/farm2.png "farm2")

Configure prefix for Apps.

![farm3](./screenshots/farm3.png "farm3")


Provision App Catalog.

![farm4](./screenshots/farm4.png "farm4")

Remove restriction that blocks .JSON files.

![farm5](./screenshots/farm5.png "farm5")