import TestBase from "../../../TestBase";

export default class extends TestBase {
    getTemplates() {
        return {
            'bar.twig': `
{% block content %}
    foo
{% endblock %}`,
            'index.twig': `
{% extends [null, "bar.twig"] %}`
        };
    }

    getExpected() {
        return `
foo
`;
    }

}
