const { builder } = require("@netlify/functions")

async function handler(event, context) {
  return {
    statusCode: 200,
    ttl: 60,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
      <html>
        <body>
          ODBs test builders path!
        </body>
    </html>
    `,
  };
}

exports.handler = builder(handler);