import { get, put } from "./api";

interface Page {
  pageNumber: number;
  pageSize: number;
}

const getApplications = (page: Page) =>
  Promise.resolve([
    {
      appId: "airbnb.com",
      appName: "Airbnb",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Lifestyle",
    },
    {
      appId: "neptune-software.com",
      appName: "Neptune Software",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Software Development",
    },
    {
      appId: "yggdrasil.com",
      appName: "Yggdrasil",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Lifestyle",
    },
    {
      appId: "RPA - Machine Management Relay Service - Application",
      appName: "RPA - Machine Management Relay Service - Application",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Internal",
    },
    {
      appId: "coursera.org",
      appName: "Coursera",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Education",
    },
    {
      appId: "stickermule.com",
      appName: "Sticker Mule",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Lifestyle",
    },
    {
      appId: "PTSS",
      appName: "PTSS",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Internal",
    },
    {
      appId: "instacart.com",
      appName: "Instacart",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Lifestyle",
    },
    {
      appId: "deel.com",
      appName: "Deel",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Human Resources Tools",
    },
    {
      appId: "apollo.io",
      appName: "Apollo",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Sales and Marketing",
    },
    {
      appId: "brilliant.org",
      appName: "Brilliant",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Education",
    },
    {
      appId: "sematext.com",
      appName: "Metrics Monitor API",
      appSources: ["APP_SOURCE_MSFT"],
      category: "IT",
    },
    {
      appId: "docs.dubhub.io",
      appName: "DubHub",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "IT",
    },
    {
      appId: "speechify.com",
      appName: "Speechify",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "AI",
    },
    {
      appId: "uber-alpha.webflow.io",
      appName: "Uber Alpha",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Lifestyle",
    },
    {
      appId: "zendesk.com",
      appName: "Zendesk",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Productivity Tools",
    },
    {
      appId: "IAMTenantCrawler",
      appName: "IAMTenantCrawler",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Internal",
    },
    {
      appId: "dataverse.org",
      appName: "Dataverse",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Data Analytics",
    },
    {
      appId: "Project Default Service Account",
      appName: "Project Default Service Account",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Internal",
    },
    {
      appId: "powerbi.microsoft.com",
      appName: "Power BI",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Data Analytics",
    },
    {
      appId: "ratatype.com",
      appName: "Ratatype",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Education",
    },
    {
      appId: "justworks.com",
      appName: "Justworks",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Human Resources Tools",
    },
    {
      appId: "CCM TAGS",
      appName: "CCM TAGS",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Internal",
    },
    {
      appId: "popsql.com",
      appName: "PopSQL",
      appSources: ["APP_SOURCE_GOOGLE"],
      category: "Data Analytics",
    },
    {
      appId: "microsoft.com/en-ww/microsoft-365/sharepoint/collaboration",
      appName: "Microsoft SharePoint",
      appSources: ["APP_SOURCE_MSFT"],
      category: "Collaboration",
    },
  ]); //put("/api/get-apps", page);

export default getApplications;
