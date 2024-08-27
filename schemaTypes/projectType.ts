import { defineField } from "sanity";

export const projectType = {
    name: 'projects',
    title: 'Projects',
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
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'languages',
            title: 'Languages',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number'
        })
    ]
}