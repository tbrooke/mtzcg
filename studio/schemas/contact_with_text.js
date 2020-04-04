export default {
    "type": "object",
    "name": "contact_with_text",
    "title": "Contact With Text",
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
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "contact_with_text"
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