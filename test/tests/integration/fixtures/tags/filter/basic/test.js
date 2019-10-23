const TwingTestIntegrationTestCaseBase = require('../../../../../../integration-test-case');

module.exports = class extends TwingTestIntegrationTestCaseBase {
    getDescription() {
        return '"filter" tag applies a filter on its children';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));

        return templates;
    }

    getExpected() {
        return require('./expected.html');
    }

    getExpectedDeprecationMessages() {
        return [
            'The "filter" tag is deprecated since Twig 2.9, use the "apply" tag instead.'
        ];
    }

    getData() {
        return {
            var: 'var'
        };
    }
};