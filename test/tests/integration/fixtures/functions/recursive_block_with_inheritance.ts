import TestBase from "../../TestBase";

export default class extends TestBase {
    getDescription() {
        return '"block" function recursively called in a parent template';
    }

    getTemplates() {
        return {
            'index.twig': `
{% extends "ordered_menu.twig" %}
{% block label %}"{{ parent() }}"{% endblock %}
{% block list %}{% set class = 'b' %}{{ parent() }}{% endblock %}`,
            'ordered_menu.twig': `
{% extends "menu.twig" %}
{% block list %}{% set class = class|default('a') %}<ol class="{{ class }}">{{ block('children') }}</ol>{% endblock %}`,
            'base.twig': `
{{ block('list') }}`,
            'menu.twig': `
{% extends "base.twig" %}
{% block list %}<ul>{{ block('children') }}</ul>{% endblock %}
{% block children %}{% set currentItem = item %}{% for item in currentItem %}{{ block('item') }}{% endfor %}{% set item = currentItem %}{% endblock %}
{% block item %}<li>{% if item is not iterable %}{{ block('label') }}{% else %}{{ block('list') }}{% endif %}</li>{% endblock %}
{% block label %}{{ item }}{% endblock %}`
        };
    }

    getExpected() {
        return `
<ol class="b"><li>"1"</li><li>"2"</li><li><ol class="b"><li>"3.1"</li><li><ol class="b"><li>"3.2.1"</li><li>"3.2.2"</li></ol></li><li>"3.4"</li></ol></li></ol>
`;
    }

    getContext() {
        return {
            item: ['1', '2', ['3.1', ['3.2.1', '3.2.2'], '3.4']]
        }
    }
}
