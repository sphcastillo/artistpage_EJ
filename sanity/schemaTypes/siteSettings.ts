import { defineType, defineField, defineArrayMember } from 'sanity';
import { SettingsIcon } from 'lucide-react';

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    description: "Global settings and configuration for your creator page",
    icon: SettingsIcon,
    preview: {
        select: {
            title: 'siteTitle',
        },
        prepare({ title }){
            return {
                title,
                media: SettingsIcon,
            };
        },
    },
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            description: "The name of your creator page",
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Site Description',
            type: 'text',
            description: "A brief description of your creator page and waht you offer",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'headerLogo',
            title: 'Header Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description: "Alternative text for accessibility and SEO",
                }
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainHeroImage',
            title: 'Main Hero Image',
            type: 'image',
            description: "The main banner image displayed at the top of your page",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description: "Alternative text for accessibility and SEO",
                }
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description:"The logo of your creator page",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description: "Alternative text for accessibility and SEO",
                }
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'socialMediaLinks',
            title: 'Social Media Links',
            type: 'array',
            description: "Add your social media profiles for visitors to connect with you",
            of: [
                defineArrayMember({
                    type: 'object',
                    name: "socialLink",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            description: "The social media platform (e.g. Twitter, Instagram, YouTube)",
                            options: {
                                list: [
                                    { title: "Instagram", value: "instagram" },
                                    { title: "X", value: "twitter" },
                                    { title: "YouTube", value: "youtube" },
                                    { title: "TikTok", value: "tiktok" },
                                    { title: "Facebook", value: "facebook" },
                                    { title: "LinkedIn", value: "linkedin" },
                                    { title: "Pinterest", value: "pinterest" },
                                    { title: "Github", value: "github" },
                                    { title: "Discord", value: "discord" },
                                    { title: "Twitch", value: "twitch" },
                                    { title: "Other", value: "other" },
                                ]
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            description: "The full URL to your profile on this platform",
                            validation: (Rule) => Rule.required(),
                        })
                    ],
                }),
            ],
        }),
        defineField({
            name: 'callToActionText',
            title: 'Call to Action Text',
            type: 'string',
        }),
    ],
})