import TestBase from "../../TestBase";

export default class extends TestBase {
    getDescription() {
        return '"convert_encoding" filter';
    }

    getTemplates() {
        return {
            'index.twig': `{#
    we won't support ISO-2022-JP since it implies using iconv
    ISO-2022-JP support will eventually be part of an extension
#}
{#{{ "愛していますか？"|convert_encoding('ISO-2022-JP', 'UTF-8')|convert_encoding('UTF-8', 'ISO-2022-JP') }}#}
{{ "愛していますか？"|convert_encoding('Shift_JIS', 'UTF-8')|convert_encoding('UTF-8', 'Shift_JIS') }}`
        };
    }

    getExpected() {
        return `
愛していますか？
`;
    }
}
