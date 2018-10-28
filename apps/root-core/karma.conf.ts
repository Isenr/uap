import { ConfigType, getBaseKarmaConfig } from 'karma.conf';
import { join } from 'path';

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = (config: ConfigType) => {
    const baseConfig = getBaseKarmaConfig();
    config.set({
        ...baseConfig,
        coverageIstanbulReporter: {
            ...baseConfig.coverageIstanbulReporter,
            dir: join(__dirname, '../../coverage/apps/root-core'),
        },
    });
};
