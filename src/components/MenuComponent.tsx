import { MenuProps, Menu } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Apps",
    key: "apps",
  },
  {
    label: "Data",
    key: "data",
    disabled: true,
  },
  {
    label: "Identities",
    key: "identities",
    disabled: true,
  },
  {
    label: "Alerts",
    key: "alerts",
    disabled: true,
  },
  {
    label: "Investigation Center",
    key: "investigation",
    disabled: true,
  },
  {
    label: "Configurations",
    key: "config",
    disabled: true,
  },
];

const MenuComponent = () => {
  const [current, setCurrent] = useState("apps");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuComponent;
