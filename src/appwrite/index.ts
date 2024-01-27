import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint(import.meta.env.VITE_API_ENDPOINT).setProject(import.meta.env.VITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from "appwrite";
