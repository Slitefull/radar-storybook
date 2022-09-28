import { FC, memo, ReactNode, useCallback, useMemo, useState } from 'react';
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Button from "@/ui-kit/components/buttons/button/button";

import { SActions, SIndicator, SInner, SLabel, SNumber, SStepper, SSteps } from "./styled";


type Step = {
  label: string;
  component: ReactNode;
  exitValidation?: boolean;
}

interface StepperProps {
  steps: Step[];
  onFinish: VoidFunction;
}

const Stepper: FC<StepperProps> = memo((
  {
    steps,
    onFinish
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
    [activeStep]
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
          <SNumber isActive={activeStep >= i}>
            {i + 1}
          </SNumber>
          {i !== steps.length && <SLabel>{step.label}</SLabel>}
        </SInner>
      )
    ),
    [activeStep]
  );

  return (
    <SStepper>
      <SIndicator>
        {stepIndicators}
      </SIndicator>
      <SSteps>
        {steps[activeStep].component}
      </SSteps>
      <SActions>
        <Button
          color={"secondary"}
          onClick={onPreviousStepHandler}
        >
          {capitalizeFirstLetter(t("back"))}
        </Button>
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
    </SStepper>
  );
});

export default Stepper;
