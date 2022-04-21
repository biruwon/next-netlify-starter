import { schedule } from "@netlify/functions";

export const handler = schedule("* * * * *", async () => {
    console.log("Me every minute!")

    return {
        statusCode: 200,
    };
  })

