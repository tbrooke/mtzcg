export default {
    "type": "object",
    "name": "cta",
    "title": "CTA Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "cta",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "description": "The bold text displayed above the section action buttons",
            "validation": Rule => Rule.required()
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Section Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "markdown",
            "name": "text",
            "title": "Section Text",
            "description": "The text displayed in the content portion of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Cta"
                ]
            }
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
                    "cta"
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
            "title": "section_id"
        }
    }
}