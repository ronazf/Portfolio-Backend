import { defineField } from "sanity";

export const aboutType = {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'goals',
            title: 'Goals',
            type: 'text'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        })
    ]
}