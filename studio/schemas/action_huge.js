export default {
    "type": "object",
    "name": "action_huge",
    "title": "Action Huge",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Button Label",
            "description": "The text displayed inside the button",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "Button URL",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_primary",
            "title": "Is Primary",
            "description": "Gives the button a primary color",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_scrolly",
            "title": "Is Scrolly",
            "description": "Gives the button a scroll animation (If the button URL is a section ID)",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_huge",
            "title": "Is Huge",
            "description": "Makes the button larger than a standard button",
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "label"
        }
    }
}