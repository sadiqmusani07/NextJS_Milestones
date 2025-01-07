import { defineField, defineType } from "sanity";

        export default defineType({
            name: 'blog',
            title: 'Blog',
            type: 'document',
            fields: [
                defineField({
                    name: 'heading',
                    title: 'Title',
                    type: 'string'
                }),
                defineField({
                    name: 'date',
                    title: 'Post Date',
                    type: 'datetime'
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text'
                }),
                defineField({
                    name: 'detailDescription',
                    title: 'Detail Description',
                    type: 'text'
                }),
                defineField({
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    options: {
                        source: 'heading',
                        maxLength:100
                    }
                }),
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true //for croppable images    
                    }
                }),
            ]
        })

// export default {
//     name: 'blog',
//     title: 'Blog',
//     type: 'document',
//     fields: [
//         {
//             name: 'title',
//             title: 'Title',
//             type: 'string'
//         },
//         {
//             name: 'description',
//             title: 'Description',
//             type: 'text'
//         },
//         {
//             name: 'slug',
//             title: 'Slug',
//             type: 'slug',
//             options: {
//                 source: 'title',
//                 maxlength: 100
//             }
//         },
//         {
//             name: 'image',
//             title: 'Image',
//             type: 'image',
//             options: {
//                 hotspot: true //for croppable images    
//             }
//         },

//     ]

// }