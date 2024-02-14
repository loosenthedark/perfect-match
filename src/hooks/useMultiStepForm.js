import { useState } from "react";
import { useGlobalContext } from "../components/Context";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { setIsFormValid } = useGlobalContext();

  const goToNext = () => {
    setCurrentStepIndex((i) => {
      return i >= steps.length - 1 ? i : i + 1;
    });
  };

  const goToPrev = () => {
    setIsFormValid(true);
    setCurrentStepIndex((i) => {
      return i <= 0 ? i : i - 1;
    });
  };

  const goToStep = (stepIndex) => {
    setCurrentStepIndex(stepIndex);
  };

  // can return values from within either an array or object
  // return [isLoading, isError, data];
  return {
    steps,
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    goToNext,
    goToPrev,
    goToStep,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
