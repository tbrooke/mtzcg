export default {
    "type": "object",
    "name": "features",
    "title": "Features Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "features",
            "validation": Rule => Rule.required()
        },
        {
            "type": "array",
            "name": "features",
            "title": "Features",
            "description": "A list of features to be displayed in the section",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Feature Title",
                            "description": "The bold text displayed to the right of the feature icon",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "object",
                            "name": "icon",
                            "title": "Feature Icon",
                            "description": "The icon displayed beside the feature title",
                            "validation": null,
                            "fields": [
                                {
                                    "type": "boolean",
                                    "name": "enabled",
                                    "title": "Display Icon",
                                    "description": "Displays the feature icon",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "icon",
                                    "title": "Icon",
                                    "description": "Font Awesome icon",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "style",
                                    "title": "Iconn Style",
                                    "description": "Controls the icon color",
                                    "validation": null,
                                    "options": {
                                        "list": [
                                            "style1",
                                            "style2",
                                            "style3"
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "type": "markdown",
                            "name": "description",
                            "title": "Feature Description",
                            "description": "The text displayed next to the feature title",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Features"
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
                    "features"
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