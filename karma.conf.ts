import { Config, ConfigOptions, constants } from 'karma';
import { join } from 'path';

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

export interface CoverageIstanbulReporterConfig {
    dir: any;
    fixWebpackSourcePaths: boolean;
    reports: Array<string>;
}

export type ConfigOptionsType = Pick<
    ConfigOptions,
    Exclude<keyof ConfigOptions, 'webpack' | 'webpackMiddleware'>
> & {
    coverageIstanbulReporter: CoverageIstanbulReporterConfig;
};

export type ConfigType = Config & {
    set: (config: ConfigOptionsType) => void;
};

export const getBaseKarmaConfig = () => {
    return {
        autoWatch: false,
        basePath: '',
        browsers: ['ChromeHeadless'],
        client: {
            // leave Jasmine Spec Runner output visible in browser
            clearContext: false,
        },
        colors: true,
        coverageIstanbulReporter: {
            dir: join(__dirname, '../../coverage'),
            fixWebpackSourcePaths: true,
            reports: ['html', 'lcovonly'],
        },
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        logLevel: constants.LOG_INFO,
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
        ],
        port: 9876,
        reporters: ['progress', 'kjhtml'],
        singleRun: true,
    };
};
