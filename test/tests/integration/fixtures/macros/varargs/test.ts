import TwingTestIntegrationTestCase from "../../../../../integration-test-case";

export = class extends TwingTestIntegrationTestCase {
    getDescription() {
        return 'macro with arbitrary arguments';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));

        return templates;
    }

    getExpected() {
        return require('./expected.html');
    }
};