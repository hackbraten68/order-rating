import { json } from "@remix-run/node"; // or cloudflare/deno

export async function loader() {
    // provides data to the component
    return json({
        ok: true,
        message: "Hello from the API"
    });
  }

  export async function action({ request }) {
    const method = request.method;

    switch(method) {
        case "POST":
            return json({ message: "Success", method: "POST"});
            break;
        case "PATCH":
            return json({ message: "Success", method: "PATCH"});
            break;
        default:

        return new Response("Method Not Allowed", { status: 405 });
    }
  }