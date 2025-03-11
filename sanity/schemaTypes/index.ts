import { type SchemaTypeDefinition } from 'sanity'
import { author, blog, tag } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, tag],
}
