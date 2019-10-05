import TestBase from "../../../TestBase";

export default class extends TestBase {
    getDescription() {
        return '"macro" tag';
    }

    getTemplates() {
        return {
            'index.twig': `
{% import 'forms.twig' as forms %}

{{ forms.input('username') }}
{{ forms.input('password', null, 'password', 1) }}`,
            'forms.twig': `
{% macro input(name, value, type, size) %}
  <input type="{{ type|default("text") }}" name="{{ name }}" value="{{ value|e|default('') }}" size="{{ size|default(20) }}">
{% endmacro %}`
        };
    }

    getExpected() {
        return `
  <input type="text" name="username" value="" size="20">

  <input type="password" name="password" value="" size="1">
`;
    }
}
