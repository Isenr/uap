import { SpecReporter } from 'jasmine-spec-reporter';
import { register } from 'ts-node';

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
    allScriptsTimeout: 11000,
    baseUrl: 'http://localhost:4200/',
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true,
        print() {},
    },
    specs: ['./src/**/*.e2e-spec.ts'],
    onPrepare() {
        register({
            project: require('path').join(__dirname, './tsconfig.e2e.json'),
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    },
};
