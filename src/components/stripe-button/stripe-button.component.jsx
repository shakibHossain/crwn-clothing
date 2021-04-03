import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HQyWTEVCdV01Al5WEBOuXOUiBHweZbkgen4Dk57xcR3X9uXcMepUtLL6MgL3f8E8jgBJtV1vq0ORkkgOo71xNXU00ettQ4710";

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful')
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton
