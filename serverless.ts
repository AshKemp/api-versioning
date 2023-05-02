import type { AWS } from "@serverless/typescript";

import functions from "@functions/index";

const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });

const serverlessConfiguration: AWS = {
  service: "serverless-hello-world",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: process.env.API_VERSION_STAGE,
    region: "us-west-2",
    endpointType: "regional",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      restApiId: "03wo6guqe5",
      restApiRootResourceId: "d1gggbowwh",
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      API_VERSION_STAGE: "${env:API_VERSION_STAGE}",
    },
  },
  // import the function via paths
  functions: { ...functions },
  package: { individually: true },
  custom: {
    // esbuild: {
    //   bundle: true,
    //   minify: false,
    //   sourcemap: true,
    //   exclude: ["aws-sdk"],
    //   target: "node14",
    //   define: { "require.resolve": undefined },
    //   platform: "node",
    //   concurrency: 10,
    // },
    stage: `{opt:stage,${process.env.API_VERSION_STAGE}}`,
  },
};

module.exports = serverlessConfiguration;
