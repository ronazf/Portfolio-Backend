import { defineField } from "sanity";

export const experienceType = {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string'
        }),
        defineField({
            name: 'languages',
            title: 'Languages',
            type: 'string'
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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string'
        }),
        defineField({
            name: 'margin',
            title: 'Margin',
            type: 'string'
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number'
        })
    ]
}