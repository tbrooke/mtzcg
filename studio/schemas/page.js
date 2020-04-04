export default {
    "type": "document",
    "name": "page",
    "title": "Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "description": "The bold text displayed at the top of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Page Subtitle",
            "description": "The text displayed below the page title",
            "validation": null
        },
        {
            "type": "object",
            "name": "content_img",
            "title": "Content Image",
            "description": "The image displayed above the page content",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display Content Image",
                    "description": "Displays the page content image",
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
            "type": "object",
            "name": "sidebar",
            "title": "Sidebar",
            "description": "The sidebar displayed beside the page content",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display Page Sidebar",
                    "description": "Displays the page sidebar",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "side",
                    "title": "Sidebar Position",
                    "description": "The side of the page the sidebar is to be displayed",
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
            "type": "page_menus",
            "name": "menus",
            "title": "Page Menus",
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
            "title": "Page URL Path",
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