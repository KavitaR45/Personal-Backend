import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  buildProperty,
  EntityReference,
  FirebaseCMSApp,
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

type SubProduct = {
  meta_title: string,
  meta_desc: string,
  canonical_url: string,
  og_image: string,
  parent_productslug:string,
  slug: string,
  title: string;
  Description: string;
  subcategory_product: EntityReference[]
};

const SubProductCollection = buildCollection<SubProduct>({
  name: "SubProduct",
  singularName: "SubProduct",
  path: "SubProduct",
  textSearchEnabled: true,
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    // we have created the roles object in the navigation builder
    delete: true,
  }),
  // subcollections: [localeCollection],
  properties: {
    meta_title: buildProperty({
      name: "Meta Title",
      // validation: { required: true },
      dataType: "string",
    }),
    meta_desc: buildProperty({
      name: "Meta Desc",
      // validation: { required: true },
      dataType: "string",
      markdown: true
    }),
    canonical_url: buildProperty({
      name: "Canonical Url",
      // validation: { required: true },
      dataType: "string",
      url: true
    }),
    og_image: buildProperty({
      name: "OG Image",
      // validation: { required: true },
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
    }}),
    parent_productslug: buildProperty({
      name: "PARENTPRODUCTSLUG",
      validation: { required: true },
      dataType: "string",
    }),
    slug: buildProperty({
      name: "SLUG",
      validation: { required: true },
      dataType: "string",
    }),
    title: buildProperty({
      name: "Title",
      validation: { required: true },
      dataType: "string",
    }) ,
    Description: buildProperty({
      name: "Description",
      dataType: "string",
      validation: { required: true },
  }),
  subcategory_product: buildProperty({
    name: "SUBCATEGORY PRODUCT",
    dataType: "array",
    of: {
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
    }
    },
  }) ,
  },
});




export default SubProductCollection;