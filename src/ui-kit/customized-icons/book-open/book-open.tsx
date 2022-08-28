import { FC, memo } from 'react';

import { ROCKET_METALLIC } from "../../constants/colors";


interface BookOpenIconProps {
  color?: string;
  size?: number;
}

const BookOpenIcon: FC<BookOpenIconProps> = memo(({ color, size }): JSX.Element => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3H2V18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21V7C12 5.93913 11.5786
         4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3Z"
        stroke={color || ROCKET_METALLIC}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3H22V18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21V7C12 5.93913
         12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3Z"
        stroke={color || ROCKET_METALLIC}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default BookOpenIcon;
