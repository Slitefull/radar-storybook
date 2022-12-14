import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { useRecoilValue } from "recoil";
import { getIsLoadingAddDomain } from "@/entity/selectors/add-domain/add-domain-step";
import ModalPageContainer from "@/ui-kit/components/containers/modal";
import Stepper from "@/ui-kit/components/generals/stepper";
import AddDomainStep from "@/pages/add-domain/steps/add-domain";
import ScheduleStep from "@/pages/add-domain/steps/schedule";
import CustomizeStep from "@/pages/add-domain/steps/customize";
import AddUrlsStep from "@/pages/add-domain/steps/add-urls";
import RadarLoader from "@/ui-kit/components/loaders/radar";
import AddDomainSlider from "./components/text-slider";

import { Column } from '@/global.css';
import { PageTitle } from "./styled";


const AddDomain: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isLoadingAddDomain = useRecoilValue(getIsLoadingAddDomain);

  const steps = useMemo(
    () => [
      {
        label: capitalizeFirstLetter(t("add_domain")),
        component: <AddDomainStep/>,
        loader: <Column
          margin={"40px 0 0 0"}
          align={"center"}
          gap={40}
        >
          <AddDomainSlider/>
          <RadarLoader/>
        </Column>,
        isLoading: isLoadingAddDomain,
      },
      {
        label: capitalizeFirstLetter(t("schedule")),
        component: <ScheduleStep/>
      },
      {
        label: capitalizeFirstLetter(t("customize")),
        component: <CustomizeStep/>
      },
      {
        label: capitalizeFirstLetter(t("add_urls")),
        component: <AddUrlsStep/>
      }
    ],
    [t]
  );

  const onCloseHandler = useCallback(
    () => navigate(-1),
    [navigate]
  );

  const onFinishHandler = useCallback(
    () => console.log('finish'),
    []
  );

  return (
    <ModalPageContainer onClose={onCloseHandler}>
      <Column gap={35} align={"center"}>
        <PageTitle>
          {capitalizeFirstLetter(t("enter_new_domain"))}
        </PageTitle>
        <Stepper
          steps={steps}
          onFinish={onFinishHandler}
        />
      </Column>
    </ModalPageContainer>
  );
};

export default AddDomain;
