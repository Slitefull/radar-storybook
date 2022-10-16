import React, { FC, memo } from 'react';
import SliderText from "@/ui-kit/components/sliders/text";

import { SliderElement } from "../../styled";


const AddDomainSlider: FC = memo((): JSX.Element => {
  const sliderElements = [
    <SliderElement>
      <strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends
    </SliderElement>,
    <SliderElement>
      <strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends
    </SliderElement>,
    <SliderElement>
      <strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends
    </SliderElement>,
    <SliderElement>
      <strong>SEO radar</strong> will compare 2 periods in terms of changes of the URL. You’ll get the analysis
      report as soon as the second period ends
    </SliderElement>
  ];

  return (
    <SliderText elements={sliderElements}/>
  );
});

export default AddDomainSlider;
