const { builder } = require("@netlify/functions")

async function handler(event, context) {
  return {
    statusCode: 200,
    ttl: 3600,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
      <html>
        <body>
          ODBs test!
        </body>
    </html>
    `,
  };
}

exports.handler = builder(handler);