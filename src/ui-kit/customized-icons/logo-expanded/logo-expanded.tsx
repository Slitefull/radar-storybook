import { FC, memo } from 'react';


interface LogoExpandedProps {
  width?: number;
}

const LogoExpanded: FC<LogoExpandedProps> = memo(({ width }): JSX.Element => {
  return (
    <svg width={width || 549} height="auto" viewBox="0 0 539 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M102.79 22.12L98.2397 19.43L61.6197 56.55C60.5973 56.0917 59.4901 55.8532 58.3697 55.85C56.6447 55.8476 54.966 56.4078 53.588 57.4455C52.2101 58.4833 51.2081 59.9421 50.7341 61.6006C50.26 63.2592 50.3397 65.0272 50.961 66.6364C51.5824 68.2456 52.7115 69.6083 54.1772 70.5179C55.6429 71.4275 57.3652 71.8344 59.083 71.6768C60.8008 71.5193 62.4204 70.8059 63.6962 69.6448C64.9719 68.4838 65.8343 66.9384 66.1526 65.243C66.4708 63.5476 66.2276 61.7947 65.4597 60.25L102.79 22.11V22.12Z"
        fill="#653CAD"/>
      <path
        d="M58.1797 90.61C52.8396 90.61 47.6194 89.0265 43.1793 86.0597C38.7392 83.0929 35.2785 78.8761 33.235 73.9425C31.1914 69.0088 30.6567 63.58 31.6985 58.3426C32.7403 53.1051 35.3118 48.2941 39.0878 44.5181C42.8638 40.7421 47.6748 38.1706 52.9123 37.1288C58.1497 36.087 63.5785 36.6217 68.5121 38.6653C73.4458 40.7088 77.6626 44.1695 80.6294 48.6096C83.5962 53.0497 85.1797 58.2699 85.1797 63.61C85.1612 70.7652 82.3107 77.622 77.2512 82.6815C72.1917 87.741 65.3349 90.5915 58.1797 90.61V90.61ZM58.1797 43.61C54.2412 43.608 50.3905 44.7736 47.1142 46.9595C43.8379 49.1454 41.2832 52.2534 39.7728 55.8908C38.2624 59.5282 37.8641 63.5317 38.6284 67.3954C39.3926 71.259 41.2851 74.8094 44.0665 77.5979C46.848 80.3863 50.3936 82.2877 54.2554 83.0616C58.1171 83.8356 62.1216 83.4474 65.7628 81.9461C69.4039 80.4448 72.5184 77.8979 74.7125 74.6271C76.9065 71.3563 78.0818 67.5085 78.0897 63.57C78.0818 58.2911 75.9819 53.2304 72.25 49.4967C68.5182 45.763 63.4586 43.6606 58.1797 43.65V43.61Z"
        fill="#653CAD"/>
      <path
        d="M58.1798 108.83C54.0383 108.833 49.9688 107.747 46.3798 105.68L27.5998 94.84C24.0168 92.7655 21.0411 89.7867 18.9703 86.2015C16.8996 82.6162 15.8063 78.5502 15.7998 74.41V52.72C15.8063 48.5797 16.8996 44.5137 18.9703 40.9285C21.0411 37.3433 24.0168 34.3645 27.5998 32.29L46.3798 21.45C49.9682 19.3863 54.0353 18.3003 58.1748 18.3003C62.3143 18.3003 66.3814 19.3863 69.9698 21.45L88.7498 32.29C92.3329 34.3645 95.3085 37.3433 97.3793 40.9285C99.45 44.5137 100.543 48.5797 100.55 52.72V74.41C100.543 78.5502 99.45 82.6162 97.3793 86.2015C95.3085 89.7867 92.3329 92.7655 88.7498 94.84L69.9998 105.68C66.4051 107.751 62.3282 108.837 58.1798 108.83V108.83ZM58.1798 25.43C55.3089 25.4345 52.489 26.1895 49.9998 27.62L31.1598 38.47C28.6617 39.9181 26.587 41.9961 25.1429 44.4965C23.6988 46.997 22.9357 49.8325 22.9298 52.72V74.41C22.9357 77.2975 23.6988 80.1329 25.1429 82.6334C26.587 85.1339 28.6617 87.2118 31.1598 88.66L49.9998 99.51C52.5037 100.95 55.3415 101.707 58.2298 101.707C61.1181 101.707 63.9559 100.95 66.4598 99.51L85.1898 88.66C87.6879 87.2118 89.7626 85.1339 91.2067 82.6334C92.6508 80.1329 93.4139 77.2975 93.4198 74.41V52.72C93.4139 49.8325 92.6508 46.997 91.2067 44.4965C89.7626 41.9961 87.6879 39.9181 85.1898 38.47L66.4098 27.62C63.9048 26.1837 61.0673 25.4286 58.1798 25.43V25.43Z"
        fill="#653CAD"/>
      <path
        d="M58.5 127.78C54.3585 127.783 50.289 126.697 46.7 124.63L11.79 104.47C8.2096 102.396 5.23632 99.4183 3.16735 95.8349C1.09839 92.2515 0.00621477 88.1878 0 84.05L0 43.73C0.00722102 39.5924 1.09982 35.5291 3.16868 31.9459C5.23755 28.3626 8.21028 25.3849 11.79 23.31L46.7 3.14998C50.2884 1.08635 54.3555 0.000305176 58.495 0.000305176C62.6345 0.000305176 66.7016 1.08635 70.29 3.14998L105.21 23.31C108.79 25.3849 111.762 28.3626 113.831 31.9459C115.9 35.5291 116.993 39.5924 117 43.73V84.05C116.993 88.1876 115.9 92.2509 113.831 95.8341C111.762 99.4173 108.79 102.395 105.21 104.47L70.29 124.63C66.7052 126.698 62.6386 127.785 58.5 127.78V127.78ZM58.5 7.12998C55.6108 7.12603 52.7718 7.88494 50.27 9.32998L15.36 29.48C12.8605 30.9266 10.7847 33.0042 9.34042 35.505C7.8961 38.0058 7.13387 40.8421 7.13 43.73V84.05C7.13387 86.9379 7.8961 89.7742 9.34042 92.275C10.7847 94.7758 12.8605 96.8534 15.36 98.3L50.27 118.46C52.7739 119.9 55.6117 120.657 58.5 120.657C61.3883 120.657 64.2261 119.9 66.73 118.46L101.64 98.3C104.139 96.8534 106.215 94.7758 107.66 92.275C109.104 89.7742 109.866 86.9379 109.87 84.05V43.73C109.866 40.8421 109.104 38.0058 107.66 35.505C106.215 33.0042 104.139 30.9266 101.64 29.48L66.73 9.32998C64.2278 7.88582 61.389 7.12698 58.5 7.12998V7.12998Z"
        fill="#653CAD"/>
      <path
        d="M196.06 65.45C193.804 64.4957 191.485 63.6971 189.12 63.06C186.819 62.5061 184.576 61.736 182.42 60.76C181.628 60.4239 180.956 59.8565 180.492 59.132C180.028 58.4076 179.794 57.5599 179.82 56.7C179.78 56.1301 179.855 55.5579 180.043 55.0182C180.23 54.4784 180.525 53.9823 180.91 53.56C181.692 52.8175 182.659 52.2994 183.71 52.06C184.852 51.7813 186.024 51.6403 187.2 51.64C189.119 51.7104 190.996 52.2274 192.68 53.15C194.666 54.1575 196.481 55.4701 198.06 57.04L198.33 57.31L203.89 51.19L203.69 50.94C201.586 48.3692 198.82 46.4223 195.69 45.31C192.856 44.22 189.855 43.628 186.82 43.56C184.049 43.5592 181.306 44.1099 178.75 45.18C176.354 46.1709 174.245 47.7495 172.62 49.77C171.031 51.813 170.197 54.3426 170.26 56.93C170.111 59.7602 170.984 62.5496 172.72 64.79C174.374 66.7242 176.465 68.236 178.82 69.2C181.211 70.2049 183.663 71.0599 186.16 71.76C187.8 72.16 189.32 72.6 190.69 73.08C191.845 73.4709 192.909 74.0898 193.82 74.9C194.214 75.2883 194.52 75.7577 194.715 76.2757C194.91 76.7937 194.99 77.3479 194.95 77.9C195.004 79.0457 194.625 80.1698 193.89 81.05C193.162 81.8312 192.252 82.4188 191.24 82.76C190.227 83.1129 189.163 83.2954 188.09 83.3C185.637 83.3768 183.201 82.8731 180.98 81.83C179.01 80.7986 177.258 79.3962 175.82 77.7L175.58 77.42L169 83.06L169.22 83.34C171.347 86.145 174.225 88.2909 177.52 89.53C180.655 90.7025 183.973 91.3086 187.32 91.32C190.068 91.3198 192.788 90.769 195.32 89.7C197.774 88.6852 199.929 87.0606 201.58 84.98C203.224 82.8459 204.089 80.2134 204.03 77.52C204.03 74.17 203.26 71.52 201.75 69.66C200.234 67.7931 198.274 66.3355 196.05 65.42L196.06 65.45Z"
        fill="#653CAD"/>
      <path
        d="M241.76 46.32C238.579 44.4203 234.936 43.4342 231.23 43.47C227.165 43.445 223.16 44.4532 219.59 46.4C216.02 48.373 213.055 51.2802 211.01 54.81C208.777 58.8347 207.674 63.3892 207.82 67.99C207.759 72.1905 208.815 76.3319 210.88 79.99C212.888 83.4967 215.826 86.3797 219.37 88.32C222.88 90.136 226.745 91.1597 230.693 91.3186C234.641 91.4776 238.576 90.768 242.22 89.24C245.01 88.1353 247.582 86.5477 249.82 84.55H250.46L245.46 77.17L245.15 77.44C243.656 78.6924 242.06 79.8196 240.38 80.81C238.064 82.0598 235.449 82.6511 232.82 82.52C228.992 82.6664 225.239 81.4273 222.25 79.03C219.563 76.7436 217.832 73.5317 217.4 70.03H251.97L252.06 65.87C252.147 61.8134 251.183 57.8034 249.26 54.23C247.498 50.9811 244.911 48.2531 241.76 46.32V46.32ZM242.32 62.16H217.82C218.63 58.67 220.22 56.16 222.55 54.7C225.168 53.1257 228.177 52.3248 231.23 52.39C233.028 52.3841 234.802 52.7984 236.41 53.6C237.99 54.3985 239.36 55.5562 240.41 56.98C241.493 58.4359 242.139 60.1704 242.27 61.98L242.32 62.16Z"
        fill="#653CAD"/>
      <path
        d="M290.99 46.64C287.352 44.6327 283.265 43.5798 279.11 43.5798C274.955 43.5798 270.868 44.6327 267.23 46.64C263.724 48.6567 260.82 51.5741 258.82 55.09C256.705 58.8648 255.632 63.1339 255.71 67.46C255.632 71.7861 256.705 76.0552 258.82 79.83C260.812 83.3627 263.716 86.2951 267.23 88.32C270.868 90.3273 274.955 91.3802 279.11 91.3802C283.265 91.3802 287.352 90.3273 290.99 88.32C294.493 86.2987 297.395 83.3824 299.4 79.87C301.513 76.0946 302.587 71.8259 302.51 67.5C302.587 63.1741 301.513 58.9054 299.4 55.13C297.401 51.6029 294.498 48.6723 290.99 46.64V46.64ZM292.72 67.47C292.826 70.1714 292.234 72.8544 291 75.26C289.87 77.444 288.174 79.2847 286.09 80.59C283.987 81.8851 281.559 82.5546 279.09 82.52C276.622 82.5459 274.196 81.8771 272.09 80.59C269.987 79.2949 268.276 77.4526 267.14 75.26C265.905 72.8513 265.313 70.1647 265.42 67.46C265.307 64.7292 265.9 62.0155 267.14 59.58C268.269 57.3928 269.986 55.5635 272.096 54.297C274.207 53.0306 276.629 52.3772 279.09 52.41C281.553 52.3712 283.978 53.0224 286.09 54.29C288.176 55.5707 289.874 57.3962 291 59.57C292.24 62.0055 292.833 64.7192 292.72 67.45V67.45V67.47Z"
        fill="#653CAD"/>
      <path
        d="M355.11 44.48C353.505 43.8038 351.769 43.4962 350.03 43.58C347.055 43.6103 344.164 44.5681 341.76 46.32C339.65 47.7739 337.891 49.6802 336.61 51.9V44.53H326.91V90.53H336.61V65.15C336.563 63.0249 337.155 60.9346 338.31 59.15C339.399 57.5067 340.876 56.1569 342.61 55.22C344.205 54.3284 345.994 53.8409 347.82 53.8C348.675 53.7976 349.528 53.8949 350.36 54.09C351.051 54.2485 351.722 54.4833 352.36 54.79L352.78 55L355.28 44.61L355.02 44.48H355.11Z"
        fill="#653CAD"/>
      <path
        d="M390.33 49.82C388.838 48.1766 387.093 46.7824 385.16 45.69C382.564 44.244 379.631 43.5125 376.66 43.57C372.606 43.5013 368.61 44.5385 365.1 46.57C361.712 48.5856 358.944 51.4953 357.1 54.98C355.133 58.791 354.147 63.0321 354.23 67.32C354.152 71.6184 355.113 75.8722 357.03 79.72C358.76 83.1744 361.376 86.1076 364.61 88.22C367.759 90.2638 371.437 91.3414 375.19 91.32C378.575 91.3959 381.913 90.5155 384.82 88.78C386.901 87.553 388.775 86.0037 390.37 84.19V90.47H400.07V44.53H390.37V49.82H390.33ZM388.99 75.1C387.944 77.2829 386.323 79.1394 384.3 80.47C382.214 81.8082 379.779 82.5036 377.3 82.47C374.864 82.511 372.473 81.8137 370.44 80.47C368.418 79.1394 366.797 77.2829 365.75 75.1C364.6 72.6914 364.025 70.0487 364.07 67.38C364.026 64.7275 364.602 62.1012 365.75 59.71C366.802 57.5547 368.424 55.7286 370.44 54.43C372.496 53.1368 374.883 52.4697 377.31 52.51C379.787 52.4902 382.218 53.1845 384.31 54.51C386.325 55.8354 387.948 57.6757 389.01 59.84C390.156 62.2038 390.732 64.8034 390.69 67.43C390.723 70.0974 390.149 72.7373 389.01 75.15L388.99 75.1Z"
        fill="#653CAD"/>
      <path
        d="M440.901 49.62C439.263 47.9836 437.363 46.6317 435.281 45.62C432.51 44.2597 429.457 43.5743 426.371 43.62C422.47 43.5706 418.637 44.6357 415.321 46.69C412.023 48.7716 409.332 51.6863 407.521 55.14C405.543 58.9552 404.55 63.2037 404.631 67.5C404.553 71.7832 405.547 76.018 407.521 79.82C409.338 83.3117 412.064 86.2483 415.411 88.32C418.796 90.3509 422.683 91.3903 426.631 91.32C429.786 91.3685 432.895 90.5634 435.631 88.99C437.613 87.8738 439.402 86.4455 440.931 84.76V90.46H450.541V26H440.931V49.61L440.901 49.62ZM439.561 75.41C438.526 77.649 436.901 79.5641 434.861 80.95C432.779 82.2992 430.341 82.9957 427.861 82.95C425.394 83.0068 422.969 82.309 420.911 80.95C418.863 79.5606 417.227 77.6474 416.171 75.41C415.031 72.9111 414.441 70.1966 414.441 67.45C414.441 64.7034 415.031 61.9889 416.171 59.49C417.236 57.2694 418.871 55.3714 420.911 53.99C422.974 52.6419 425.396 51.9451 427.861 51.99C430.341 51.9449 432.778 52.6413 434.861 53.99C436.897 55.3631 438.522 57.2643 439.561 59.49C440.675 61.9958 441.251 64.7076 441.251 67.45C441.251 70.1924 440.675 72.9042 439.561 75.41V75.41Z"
        fill="#653CAD"/>
      <path
        d="M490.821 49.82C489.327 48.1743 487.578 46.7798 485.641 45.69C483.045 44.244 480.112 43.5125 477.141 43.57C473.086 43.5013 469.09 44.5385 465.581 46.57C462.192 48.5856 459.425 51.4953 457.581 54.98C455.627 58.7946 454.655 63.0355 454.751 67.32C454.672 71.6184 455.633 75.8722 457.551 79.72C459.28 83.1744 461.896 86.1076 465.131 88.22C468.279 90.2638 471.957 91.3414 475.711 91.32C479.08 91.3834 482.399 90.4999 485.291 88.77C487.364 87.5443 489.23 85.9985 490.821 84.19V90.47H500.521V44.53H490.821V49.82ZM489.521 75.1C488.472 77.2841 486.847 79.1408 484.821 80.47C482.734 81.8082 480.299 82.5036 477.821 82.47C475.384 82.511 472.993 81.8137 470.961 80.47C468.938 79.137 467.314 77.2813 466.261 75.1C465.111 72.6914 464.535 70.0487 464.581 67.38C464.537 64.7275 465.112 62.1012 466.261 59.71C467.312 57.5547 468.934 55.7286 470.951 54.43C473.006 53.1368 475.393 52.4697 477.821 52.51C480.298 52.4902 482.728 53.1845 484.821 54.51C486.835 55.8354 488.458 57.6757 489.521 59.84C490.666 62.2038 491.242 64.8034 491.201 67.43C491.233 70.0974 490.659 72.7373 489.521 75.15V75.1Z"
        fill="#653CAD"/>
      <path
        d="M537.82 44.48C536.215 43.8038 534.479 43.4962 532.74 43.58C529.769 43.6123 526.881 44.5701 524.48 46.32C522.37 47.7739 520.61 49.6802 519.33 51.9V44.53H509.63V90.53H519.33V65.15C519.283 63.0249 519.875 60.9346 521.03 59.15C522.119 57.5067 523.596 56.1569 525.33 55.22C526.94 54.3361 528.743 53.8621 530.58 53.84C531.435 53.8376 532.287 53.9349 533.12 54.13C533.81 54.2885 534.481 54.5233 535.12 54.83L535.54 55.04L538.04 44.65L537.78 44.52L537.82 44.48Z"
        fill="#653CAD"/>
    </svg>
  );
});

export default LogoExpanded;