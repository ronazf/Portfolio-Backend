import { defineField } from "sanity";

export const contactType = {
    name: 'contacts',
    title: 'Contacts',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image'
        })
    ]
}