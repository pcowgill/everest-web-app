import React from "react";
import { Link } from "react-router-dom";

import { css, cx } from "emotion";

import { useTheme } from "emotion-theming";

export default function StyledLink(props: any) {
  const theme: any = useTheme();
  return (
    <b>
      <Link
        to={props.to}
        className={css`
          padding: 24px;
          color: ${theme.colors.primary};
          font-size: 16px;
          border-radius: 4px;
          text-decoration: none;
          &:hover {
            color: ${theme.colors.tertiary};
          }
        `}
      >
        {props.children}
      </Link>
    </b>
  );
}