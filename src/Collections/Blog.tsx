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

type Blog = {
  meta_title: string,
  meta_desc: string,
  canonical_url: string,
  slug: string,
  title: string;
  Description: string,
  schemaMarkup: string,
  featured_img: string,
  author: string,
  date: string,
};

const BlogCollection = buildCollection<Blog>({
  name: "Blog",
  singularName: "Blog",
  path: "blog",
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
      multiline: true
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
      name: "Content",
      dataType: "string",
      markdown: true
    }),
    schemaMarkup: buildProperty({
      name: "schemaMarkup",
      dataType: "string",
      markdown: true
    }),
    featured_img: buildProperty({
      dataType: "string",
      name: "Featured Image Path",
    }),
    author: buildProperty({
      dataType: "string",
      name: "Author",
    }),
    date: buildProperty({
      dataType: "string",
      name: "Published Date",
    }),
  },
});

export default BlogCollection;