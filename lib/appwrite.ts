import { Account, AppwriteException, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.biacko.cashflowevidence",
  projectId: "6719616e000aafc7a47d",
  databaseId: "671966470037eba4cce0",
  userCollectionId: "671a435800117f6ac40b",
  storageId: "671a44b5002022664906"
}

const client = new Client()
  .setEndpoint(config.endpoint)
  .setPlatform(config.platform)
  .setProject(config.projectId);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (username: string, email: string, password: string) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw new Error("Account failed to create.");
    }

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;

  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
