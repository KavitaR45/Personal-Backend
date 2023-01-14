import React, { useCallback } from "react";
import HomeCollection from "./Collections/Home";
import AboutCollection from "./Collections/About";
import ProductCollection from "./Collections/Product";
import SubProductCollection from "./Collections/Subproduct";
import ProjectCollection from "./Collections/Project";
import TechnicalCollection from "./Collections/Technical";

import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  buildProperty,
  EntityReference,
  FirebaseCMSApp,
} from "@camberi/firecms";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const locales = {
  "en-US": "English (United States)",
  "es-ES": "Spanish (Spain)",
  "de-DE": "German",
};

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!");
      }
      console.log("Allowing access to", user?.email);
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    []
  );

  return (
    <FirebaseCMSApp
      name={"Backend Dashboard"}
      authentication={myAuthenticator}
      collections={[HomeCollection, ProjectCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}
