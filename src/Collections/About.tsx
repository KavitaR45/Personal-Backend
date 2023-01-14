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

type About = {
  meta_title: string,
  meta_desc: string,
  canonical_url: string,
  og_image: string,
  title: string;
  banner_img: string;
  our_brand_img: string;
  product_gallery_images: EntityReference[];
  team_members_image: EntityReference[];
};

const AboutCollection = buildCollection<About>({
  name: "About",
  singularName: "About",
  path: "About",
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
    title: buildProperty({
      name: "Title",
      validation: { required: true },
      dataType: "string",
    }) ,
    banner_img: buildProperty( {
      name: "About Banner Image",
      validation: { required: true },
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    our_brand_img:  buildProperty({
      name: "Our Brand Image",
      dataType: "string",
      validation: { required: true },
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    product_gallery_images: buildProperty(
      {
        name: "Product Gallery Image",
        validation: { required: true },
        dataType: "array",
        of: {
          dataType: "string",
          storage: {
            storagePath: "images",
            acceptedFiles: ["image/*"],
        }
        },
      }
    ),
    team_members_image: buildProperty({
      name: "Team Members Image",
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


export default AboutCollection;