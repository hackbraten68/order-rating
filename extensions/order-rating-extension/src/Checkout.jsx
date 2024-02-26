import {
  reactExtension,
  Button,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [responseData, setResponseData] = useState(null);

  const handleProxyClick = async () => {
    const url = 'https://sandbox-plus-sdi-y1-development.myshopify.com/apps/orders-rating';

    try {
      const response = await fetch(url, {
        method: 'POST',
        redirect: 'manual',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add body if required by the server:
        // body: JSON.stringify({ /* data to send */ }),
      });

      const data = await response.json();
      setResponseData(data);

      console.log(response, 'response');
      console.log(data, 'data');
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display error messages
    }
  };

  return (
      <Button onClick={handleProxyClick}>Proxy</Button>
  );
}
