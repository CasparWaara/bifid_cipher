var Jasmine = require('jasmine');
const suiteReporter = require('jasmine-suite-reporter');
var jasmine = new Jasmine();

jasmine.configureDefaultReporter({
    print: function () {}
});
jasmine.addReporter(suiteReporter.create({
    includeStack: true
}));
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();