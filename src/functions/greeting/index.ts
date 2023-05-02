import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: `${process.env.API_VERSION_STAGE}/greeting`,
      },
    },
  ],
};
