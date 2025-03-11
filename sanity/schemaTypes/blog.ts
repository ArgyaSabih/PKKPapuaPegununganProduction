import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required().email() }),
  ],
});

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama Tag", type: "string", validation: (Rule) => Rule.required() }),
  ],
});

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "publishedAt", title: "Tanggal", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tag",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "mainImage",
      title: "Foto",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(1).max(3),
    }),
    defineField({ name: "body", title: "Isi", type: "array", of: [{ type: "block" }] }),
  ],
  preview: { select: { title: "title", media: "mainImage.0" } },
});
