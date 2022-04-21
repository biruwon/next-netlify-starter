import { schedule } from "@netlify/functions";

export const handler = schedule("0 1 * * *", async () => {
    console.log("Me every minute!")

    return {
        statusCode: 200,
    };
  })

