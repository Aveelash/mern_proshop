import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address: address.trim(),
        city: city.trim(),
        postalCode: postalCode.trim(),
        country: country.trim(),
      })
    );
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            autoComplete="address-line1"
          />
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            autoComplete="address-level2"
          />
        </Form.Group>
        <Form.Group controlId="postalCode" className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            autoComplete="postal-code"
          />
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            autoComplete="country"
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          className="my-2"
          disabled={!address || !city || !postalCode || !country}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
