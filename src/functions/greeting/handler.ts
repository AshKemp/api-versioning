import { successClientReponse } from "@libs/api-gateway";
const greeting = async (event) => {
  console.log("Event: ", event);
  return successClientReponse({
    message: "Hello from greeting",
  });
};

export const main = greeting;
