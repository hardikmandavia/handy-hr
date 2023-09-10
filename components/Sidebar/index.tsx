import MenuItem from "./MenuItem";

import { MenuItemsContainer, SidebarContainer } from "./styles";

import { MENU_ITEM_MAP, MenuItemKey } from "../../constants/menu-items";

interface Props {
}

export default function Sidebar({ }: Props) {
  const styles = {
    width: "12vw",
    transition: "width 0.5s",
  };

  return (
    <SidebarContainer style={styles}>
      <MenuItemsContainer>
        {Object.keys(MENU_ITEM_MAP).map((key) => (
          <MenuItem key={key} itemKey={key as MenuItemKey} />
        ))}
      </MenuItemsContainer>
    </SidebarContainer>
  );
}
