import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  buildProperty,
  EntityReference,
  FirebaseCMSApp,
  MarkdownProps,
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

type Home = {
  meta_title: string,
  meta_desc: string,
  canonical_url: string,
  banner_title: string;
  banner_desc: string,
  banner_img: EntityReference[];
  about_img: EntityReference[];
  about_title: string;
  about_desc: string,
  product_img: EntityReference[];
  product_title: string;
  product_desc: string,
  contact_img: EntityReference[];
  contact_title: string;
  contact_desc: string,
  // about_img: string;
  // product_gallery_images: EntityReference[];
};

const HomeCollection = buildCollection<Home>({
  name: "Home",
  singularName: "Home",
  path: "Home",
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
    banner_img: buildProperty({
      name: "Banner Images",
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
        }
      },
    }),
    banner_title: buildProperty({
      name: "Banner Title",
      dataType: "string",
    }),
    banner_desc: buildProperty({
      name: "Banner Description",
      dataType: "string",
      markdown: true
    }),
    about_img: buildProperty({
      name: "About Images",
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
        }
      },
    }),
    about_title: buildProperty({
      name: "About Title",
      dataType: "string",
    }),
    about_desc: buildProperty({
      name: "About Description",
      dataType: "string",
      markdown: true
    }),
    product_img: buildProperty({
      name: "Product Images",
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
        }
      },
    }),
    product_title: buildProperty({
      name: "Product Title",
      dataType: "string",
    }),
    product_desc: buildProperty({
      name: "Product Description",
      dataType: "string",
      markdown: true
    }),
    contact_img: buildProperty({
      name: "Contact Images",
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
        }
      },
    }),
    contact_title: buildProperty({
      name: "Contact Title",
      dataType: "string",
    }),
    contact_desc: buildProperty({
      name: "Contact Description",
      dataType: "string",
      markdown: true
    }),
  },
});

export default HomeCollection;
