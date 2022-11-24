import { FC, Fragment, memo, ReactNode, } from "react";
import useHover from "@/ui-kit/hooks/useHover";
import RankIcon from "@/ui-kit/customized-icons/rank";

import { Rank, RankWrapper, RIcon, RNeutral, RNumber, SRanking } from "./styled";


export interface RankingProps {
  number: number;
  rank?: number;
  isPositive: boolean;
  active: boolean;
  icon?: ReactNode;
}

const Ranking: FC<RankingProps> = memo((
  {
    number,
    rank,
    isPositive,
    active,
    icon,
  }
): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLFieldSetElement>();

  return (
    <SRanking
      active={active}
      ref={hoverRef}
    >
      <RIcon>
        {icon}
      </RIcon>
      <RNumber>
        {number}.
      </RNumber>
      <RankWrapper
        isHovered={isHovered}
        hasRank={!!rank}
      >
        {rank
          ? <Fragment>
            <RankIcon
              size={10}
              isPositive={isPositive}
            />
            <Rank isPositive={isPositive}>
              {rank}
            </Rank>
          </Fragment>
          : <RNeutral>
            -
          </RNeutral>
        }
      </RankWrapper>
    </SRanking>
  )
});

export default Ranking;
