import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

interface OrderTrackerProps {
  activeStep: number;
}

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];
const OrderTracker: React.FC<OrderTrackerProps> = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            {" "}
            {/* Ensure each Step has a unique key */}
            <StepLabel sx={{ color: "white", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
