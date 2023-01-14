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

type Technical = {
  meta_title: string,
  meta_desc: string,
  canonical_url: string,
  og_image: string,
  slug: string,
  title: string,
  description: string,
  product_slider_image: EntityReference[], 
  technical_product: EntityReference[];
};

const TechnicalCollection = buildCollection<Technical>({
  name: "Technical",
  singularName: "Technical",
  path: "Technical",
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
    slug: buildProperty({
        name: "Slug",
        validation: { required: true },
        dataType: "string",
      }) ,
    title: buildProperty({
      name: "Title",
      validation: { required: true },
      dataType: "string",
    }) ,
    description:  buildProperty({
      name: "Description",
      validation: { required: true },
      dataType: "string",
      markdown: true
    }),
    product_slider_image: buildProperty({
      name: "Product Slider Image",
      validation: { required: true },
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
      }
      },
    }),
    technical_product: buildProperty({
        name: "technical Product",
        validation: { required: true },
        dataType: "array",
        of: {
          dataType: "string",
          storage: {
            storagePath: "images",
            acceptedFiles: ["image/*"],
        }
        },
      })
  },
});


export default TechnicalCollection;