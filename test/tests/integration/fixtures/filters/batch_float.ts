import TestBase from "../../TestBase";

export default class extends TestBase {
    getDescription() {
        return '"batch" filter';
    }

    getTemplates() {
        return {
            'index.twig': `
{% for row in items|batch(3.1) %}
  <div class=row>
  {% for column in row %}
    <div class=item>{{ column }}</div>
  {% endfor %}
  </div>
{% endfor %}`
        };
    }

    getExpected() {
        return `
<div class=row>
      <div class=item>a</div>
      <div class=item>b</div>
      <div class=item>c</div>
      <div class=item>d</div>
    </div>
  <div class=row>
      <div class=item>e</div>
      <div class=item>f</div>
      <div class=item>g</div>
      <div class=item>h</div>
    </div>
  <div class=row>
      <div class=item>i</div>
      <div class=item>j</div>
    </div>
`;
    }

    getContext() {
        return {
            items: [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
            ]
        }
    }
}
