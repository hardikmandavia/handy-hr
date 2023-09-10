import { Typography } from "@mui/material";

import { MenuItemContainer } from "./styles";

import {
  iconProps,
  MENU_ITEM_MAP,
  MenuItemKey,
} from "../../../constants/menu-items";
import Link from "next/link";

interface Props {
  itemKey: MenuItemKey;
}

export default function MenuItem({ itemKey }: Props) {
  const { Component, backgroundColor, href, text } = MENU_ITEM_MAP[itemKey];

  return (
    <Link href={href}>
      <MenuItemContainer>
        <Component sx={{ ...iconProps, backgroundColor }} />
        <Typography marginLeft="16px" color="#fff">
          {text}
        </Typography>
      </MenuItemContainer>
    </Link>
  );
}
