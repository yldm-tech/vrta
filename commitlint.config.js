// config.js

module.exports = {
    /*
     * 继承自@commitlint/config-conventional@commitlint/config-conventional
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * 使用@commitlint/format格式化
     */
    formatter: '@commitlint/format',
    /*
     * 重新自定义校验规则
     */
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    },
    /*
     * 排除校验情况
     */
    ignores: [(commit) => commit === ''],
    /*
     * commitlint默认排除规则
     */
    defaultIgnores: true,
    /*
     * 展示commit错误求助链接，配置无效
     */
    helpUrl:
        '需要根据commitlint格式提交，请查看README了解提交方式',
    /*
     * 提示输入
     */
    prompt: {
        messages: {},
        questions: {
            type: {
                description: 'please input type:',
            },
        },
    },
};
