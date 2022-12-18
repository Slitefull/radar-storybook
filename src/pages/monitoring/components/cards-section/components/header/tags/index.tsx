import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useRecoilState } from "recoil";
import { tagsState } from "@/entity/atoms/monitoring/tags";
import Tag from '@/ui-kit/components/bullets/tag';

import { TagElement } from '@/entity/types/monitoring';
import { Row } from "@/global.css";


const MAX_TAGS_COUNT = 6;

const Tags: FC = memo((): JSX.Element => {
  const [tags, setTags] = useRecoilState<TagElement[]>(tagsState);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const cutTags = tags.slice(0, MAX_TAGS_COUNT);

  const tagsToPreview = useMemo(
    () => isExpanded ? tags : cutTags,
    [isExpanded]
  );

  const isShowExpandTag = useMemo(
    () => (tags.length > MAX_TAGS_COUNT) && !isExpanded,
    [isExpanded]
  );

  const onExpandHandler = useCallback(() => setIsExpanded(true), [setIsExpanded]);

  const onClickTagHandler = useCallback(
    (tag: TagElement) => {
      if (tags.some((element) => element.name === tag.name)) {
        console.log("uncheck");
        return;
      }
      console.log("check");
    },
    [tags]
  );

  return (
    <Row
      align={"end"}
      gap={12}
      wrap={"wrap"}
      justify={"flex-end"}
      rowGap={10}
      width={"100%"}
    >
      {tagsToPreview.map((tag) => (
        <Tag
          name={tag.name}
          title={tag.title}
          checked={tag.checked}
          onClick={(element) => onClickTagHandler(element)}
        />
      ))}

      {isShowExpandTag
        ? (
          <Tag
            name={"mock"}
            title={"..."}
            withArrow
            checked={false}
            onClick={onExpandHandler}
          />
        )
        : null
      }
    </Row>
  );
});

export default Tags;