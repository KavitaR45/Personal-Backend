import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  buildProperty,
  EntityReference,
  FieldProps,
  FirebaseCMSApp,
  AdditionalColumnDelegate
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

type Product = {
  meta_title: string,
  meta_desc: string,
  canonical_url: string,
  slug: string,
  title: string;
  Description: string,
  technology: EntityReference[],
  product_img: EntityReference[],
};

const ProductCollection = buildCollection<Product>({
  name: "Product",
  singularName: "Product",
  path: "Product",
  textSearchEnabled: true,
  permissions: ({ user, authController }) => ({
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    meta_title: buildProperty({
      name: "Meta Title",
      dataType: "string",
    }),
    meta_desc: buildProperty({
      name: "Meta Desc",
      dataType: "string",
      markdown: true
    }),
    canonical_url: buildProperty({
      name: "Canonical Url",
      dataType: "string",
      url: true
    }),
    slug: buildProperty({
      name: "SLUG",
      dataType: "string",
    }),
    title: buildProperty({
      name: "Title",
      dataType: "string",
    }),
    Description: buildProperty({
      name: "Description",
      dataType: "string",
      markdown: true
    }),
    technology: buildProperty({
      name: "Technology Used",
      dataType: "array",
      of: {
        dataType: "string",
      },
    }),
    product_img: buildProperty({
      name: "Product Image",
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
        }
      },
    }),
  },
});

export default ProductCollection;