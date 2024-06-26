import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
// TODO:
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
