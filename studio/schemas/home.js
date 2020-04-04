export default {
    "type": "document",
    "name": "home",
    "title": "Home",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "object",
            "name": "banner",
            "title": "Page Banner",
            "description": "The banner displayed at the top of the landing page",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Banner Title",
                    "description": "The bold text displayed at the top of the banner",
                    "validation": Rule => Rule.required()
                },
                {
                    "type": "markdown",
                    "name": "subtitle",
                    "title": "Banner Subtitle",
                    "description": "The text displayed below the banner title",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "actions",
                    "title": "Banner Action Buttons",
                    "validation": null,
                    "of": [
                        {
                            "type": "action_huge"
                        }
                    ]
                }
            ]
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Home Sections",
            "validation": null,
            "of": [
                {
                    "type": "features"
                },
                {
                    "type": "cta"
                },
                {
                    "type": "posts"
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Home Menus",
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
                    "home"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Home URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
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
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}