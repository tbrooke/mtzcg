export default {
    "type": "document",
    "name": "footer",
    "title": "Footer Configuration",
    "fields": [
        {
            "type": "object",
            "name": "about",
            "title": "About Section",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display About Section",
                    "description": "Displays the about section in the site footer",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "title",
                    "title": "Section Title",
                    "description": "The bold text displayed at the top of the about section",
                    "validation": null
                },
                {
                    "type": "markdown",
                    "name": "text",
                    "title": "Section Text",
                    "description": "The text displayed below the section title",
                    "validation": null
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
                }
            ]
        },
        {
            "type": "object",
            "name": "contact_methods",
            "title": "Contact Methods Section",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display Contact Methods",
                    "description": "Displays the contact methods section",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "methods_col1",
                    "title": "Contact Methods Column 1",
                    "description": "A list of contact methods to be displayed in the first column",
                    "validation": null,
                    "of": [
                        {
                            "type": "contact_with_link"
                        },
                        {
                            "type": "contact_with_text"
                        }
                    ]
                },
                {
                    "type": "array",
                    "name": "methods_col2",
                    "title": "Contact Methods Column 2",
                    "description": "A list of contact methods to be displayed in the second column",
                    "validation": null,
                    "of": [
                        {
                            "type": "contact_with_link"
                        },
                        {
                            "type": "contact_with_text"
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "copyright",
            "title": "Copyright Section",
            "description": "The copyright section displayed at the bottom of the site footer",
            "validation": null,
            "fields": [
                {
                    "type": "boolean",
                    "name": "enabled",
                    "title": "Display Copyright Text",
                    "description": "Displays the copyright text at the bottom of the page",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "text",
                    "title": "Copyright Text",
                    "description": "The copyright text displayed next to the footer menu",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Footer Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/footer.yml"
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}