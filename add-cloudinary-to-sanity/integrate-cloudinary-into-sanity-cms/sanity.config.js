import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'


export default defineConfig({
  name: 'default',
  title: 'cloudinary-and-sanity',

  projectId: 'mt67yam5',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
