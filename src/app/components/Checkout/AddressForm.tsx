import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import styles from "./page.module.css";

const AddressForm = () => {
  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("number"),
    };
    console.log("address", address);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
  };
  return (
    <div className={styles.address}>
      <div className={styles.left}>
        <AddressCard />
        <button className="mt-2 p-3 rounded-md bg-red-500">Deliver here</button>
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="text-white p-2 border"
            name="firstname"
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="text-white p-2 border"
            name="lastname"
          />
          <label>Address</label>
          <br />
          <textarea rows={4} className="text-white p-2 border" name="address" />
          <label>City</label>
          <br />
          <input type="text" className="text-white p-2 border" name="city" />
          <label>State</label>
          <br />
          <input type="text" className="text-white p-2 border" name="state" />
          <label>Postal code</label>
          <br />
          <input type="text" className="text-white p-2 border" name="zip" />
          <label>Phone Number</label>
          <br />
          <input
            type="number"
            className="text-white p-2 border"
            name="number"
            onInput={handleInput}
          />
          <button type="submit" className="mt-2 p-3 rounded-md bg-red-500">
            Deliver here
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
