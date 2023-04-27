import { successClientReponse } from "@libs/api-gateway";
const greeting = async (event) => {
  console.log("Event: ", event);
  return successClientReponse({
    message: "Hello from greeting 2",
  });
};

export const main = greeting;
