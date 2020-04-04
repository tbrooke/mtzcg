export default {
    "type": "object",
    "name": "contact_with_link",
    "title": "Contact With Link",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Method Title",
            "description": "The title of the contact method",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "icon",
            "title": "Method Icon",
            "description": "(Font Awesom icon) The icon displayed beside the method title",
            "validation": null
        },
        {
            "type": "text",
            "name": "text",
            "title": "Method Description",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "Method URL",
            "description": "The URL used in the method link",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "contact_with_link"
                ]
            }
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
            "title": "title"
        }
    }
}