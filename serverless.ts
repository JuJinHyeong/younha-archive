import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "younha-archive",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "ap-northeast-2",
    apiGateway: {
      restApiId: "fff3g1wgdl",
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  functions: {
    healthcheck: {
      handler: "src/handler.healthCheck",
      events: [
        {
          http: {
            method: "get",
            path: "health-check",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
