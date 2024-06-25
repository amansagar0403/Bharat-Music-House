import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const initialStep = Number(querySearch.get("step")) - 1 || 0;
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20 text-white">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const stepLabelClass = isCompleted
              ? "step-label-completed"
              : isActive
              ? "step-label-active"
              : "step-label";

            return (
              <Step key={label}>
                <StepLabel className={stepLabelClass}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <button
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{
                  marginRight: "1rem",
                  color: "white",
                  backgroundColor: "transparent",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  opacity: activeStep === 0 ? 0.5 : 1,
                }}
              >
                Back
              </button>
            </Box>
            <div>{activeStep === 1 ? <AddressForm /> : <OrderSummary />}</div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
