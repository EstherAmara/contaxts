import { DEV_URL, PROD_URL } from '@env';

const devEnviromentVariables = {
    DEV_URL
};

const prodEnvironmentVariables = {
    PROD_URL
};

export default __DEV__ ? devEnviromentVariables : prodEnvironmentVariables;