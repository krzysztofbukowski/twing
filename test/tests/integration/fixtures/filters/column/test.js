const TwingTestIntegrationTestCaseBase = require('../../../../../integration-test-case');

module.exports = class extends TwingTestIntegrationTestCaseBase {
    getDescription() {
        return '"column" filter';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));

        return templates;
    }

    getExpected() {
        return require('./expected.html');
    }

    getData() {
        return {
            array: [
                {
                    bar: 'foo',
                    foo: 'bar'
                },
                {
                    foo: 'foo',
                    bar: 'bar'
                }
            ],
            traversable: new Map([
                [0, new Map([
                    ['bar', 'foo'],
                    ['foo', 'bar']
                ])],
                [1, new Map([
                    ['foo', 'foo'],
                    ['bar', 'bar']
                ])],
            ])
        }
    }
};