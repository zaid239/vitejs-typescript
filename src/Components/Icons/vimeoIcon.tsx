import * as React from "react";
interface Props {
  readonly noColor?: boolean;
}

export const VimeoIcon: React.FC<Props> = ({ noColor }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
    >
      <g clipPath="url(#clip0_1566_394)">
        <path
          d="M15.51 2.97486C15.4443 4.35633 14.4455 6.24793 12.5069 8.64966C10.506 11.1591 8.81387 12.4139 7.42732 12.4139C6.56977 12.4139 5.84364 11.6502 5.24893 10.123C4.09238 6.02931 3.59954 3.63075 2.64341 3.63075C2.5317 3.63075 2.14728 3.85571 1.48686 4.2993L0.796875 3.43747C2.49227 2.00213 4.1121 0.405204 5.12736 0.316485C6.27406 0.208756 6.97719 0.96603 7.24332 2.58197C8.18631 8.33281 8.60358 9.20099 10.3187 6.59647C10.9331 5.65859 11.265 4.94568 11.311 4.45456C11.4687 3.00021 10.1347 3.09844 9.23114 3.47232C9.95399 1.18783 11.3372 0.0788473 13.3776 0.142217C14.8825 0.18024 15.5955 1.12762 15.51 2.97486V2.97486Z"
          fill="#455154"
        />
      </g>
      <defs>
        <clipPath id="clip0_1566_394">
          <rect
            width="14.7526"
            height="12.2938"
            fill="white"
            transform="translate(0.796875 0.135254)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
