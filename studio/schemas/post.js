export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Post Title",
            "description": "The bold text displayed at the top of the post",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Post Subtitle",
            "description": "The text displayed below the post title",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "excerpt",
            "title": "Post Excerpt",
            "description": "The excerpt displayed in any post thumbnails",
            "validation": null
        },
        {
            "type": "object",
            "name": "content_img",
            "title": "Content Image",
            "description": "The image displayed above the post content",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display Content Image",
                    "description": "Displays the post content image",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "path",
                    "title": "Image",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "url",
                    "title": "URL",
                    "description": "The URL used in the image hyperlink",
                    "initialValue": "#",
                    "validation": null
                }
            ]
        },
        {
            "type": "image",
            "name": "alt_img",
            "title": "Alternate Image",
            "description": "The image displayed in any post thumbnails",
            "validation": null
        },
        {
            "type": "object",
            "name": "sidebar",
            "title": "Sidebar",
            "description": "The sidebar displayed beside the post content",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display post Sidebar",
                    "description": "Displays the post sidebar",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "side",
                    "title": "Sidebar Position",
                    "description": "The side of the post the sidebar is to be displayed",
                    "initialValue": "left",
                    "validation": null,
                    "options": {
                        "list": [
                            "left",
                            "right"
                        ]
                    }
                }
            ]
        },
        {
            "type": "date",
            "name": "date",
            "title": "Post Date",
            "description": "The date the post was created",
            "validation": Rule => Rule.required()
        },
        {
            "type": "boolean",
            "name": "show_in_home_posts",
            "title": "Show In Home Posts",
            "description": "Displays the post in the home posts section",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "show_in_sidebar",
            "title": "Show In Sidebars",
            "description": "Displays the post ina all page sidebars",
            "validation": null
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Post Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Post URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}