import { FC, Fragment, memo, ReactNode, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Button from "@/ui-kit/components/buttons/button";
import RadarLoader from "@/ui-kit/components/loaders/radar";

import { SActions, SIndicator, SInner, SLabel, SNumber, SStepper, SSteps } from "./styled";


type Step = {
  label: string;
  component: ReactNode;
  exitValidation?: boolean;
  isLoading?: boolean;
  loader?: ReactNode;
}

interface StepperProps {
  steps: Step[];
  onFinish: VoidFunction;
  isClickable?: boolean;
  bodyWidth?: string;
}

const Stepper: FC<StepperProps> = memo((
  {
    steps,
    onFinish,
    isClickable = false,
    bodyWidth = "100%",
  }
): JSX.Element => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(0);

  const onSetStepHandler = useCallback(
    (activeStep: number) => setActiveStep(activeStep),
    []
  );

  const onNextStepHandler = useCallback(
    () => {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1)
      }
    },
    [activeStep, steps.length]
  );

  const onPreviousStepHandler = useCallback(
    () => {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1)
      }
    },
    [activeStep]
  );

  const stepIndicators = useMemo(
    () => steps.map((step, i) => (
        <SInner onClick={() => onSetStepHandler(i)}>
          <SNumber isPassed={activeStep >= i}>
            {i + 1}
          </SNumber>
          {i !== steps.length && <SLabel isPassed={activeStep >= i}>{step.label}</SLabel>}
        </SInner>
      )
    ),
    [activeStep, onSetStepHandler, steps]
  );

  return (
    <SStepper width={bodyWidth}>
      <SIndicator isClickable={isClickable}>
        {stepIndicators}
      </SIndicator>

      {steps[activeStep].isLoading
        ? steps[activeStep].loader || <RadarLoader/>
        : <Fragment>
          <SSteps>
            {steps[activeStep].component}
          </SSteps>
          <SActions>
            {activeStep !== 0 && (
              <Button
                color={"secondary"}
                onClick={onPreviousStepHandler}
              >
                {capitalizeFirstLetter(t("back"))}
              </Button>
            )}
            {activeStep === steps.length - 1 ?
              <Button
                color={"primary"}
                disabled={steps[activeStep].exitValidation}
                onClick={onFinish}
              >
                {capitalizeFirstLetter(t("submit"))}
              </Button>
              :
              <Button
                color={"primary"}
                disabled={steps[activeStep].exitValidation}
                onClick={onNextStepHandler}
              >
                {capitalizeFirstLetter(t("next"))}
              </Button>
            }
          </SActions>
        </Fragment>
      }
    </SStepper>
  );
});

export default Stepper;
