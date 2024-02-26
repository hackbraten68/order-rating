import { authenticate } from '~/shopify.server'
import { ActionFunction, json } from '@remix-run/node'
import { Page } from '@shopify/polaris'

export const action: ActionFunction = async ({request}) => {
    console.log("--------- hit app proxy ---------")

    const { session, admin } = await authenticate.public.appProxy(request);
    if (session) {
        console.log(session)

        const response = await admin!.graphql(
            `#graphql
            mutation populateProduct($input: ProductInput!) {
                productCreate(input: $input) {
                    product {
                        id
                    }
                }
            }`,
        { variables: { input: { title: "Test Product NEW"} } },    
        );

        console.log(response, 'response')

        const productData = await response.json()

        return json({ data: productData.data });
    }
}

const Proxy = () => {
    return <Page>Proxy</Page>
}
export default Proxy;