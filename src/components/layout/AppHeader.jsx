import React, { useEffect, useState } from "react";
import { Layout, Select, Space, Button, Modal, Drawer } from "antd";
import { useCrypto } from "../../context/crypto-context";
import { CoinInfoModal } from "../CoinInfoModal";
import { AddAssetForm } from "../AddAssetForm";

const { Header } = Layout;

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const AppHeader = () => {
  const [select, setSelect] = useState(false);
  const [coin, setCoin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (e) => {
      if (e.key === "/") {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  function handleSelect(value) {
    setCoin(crypto.find((c) => c.id === value));
    setIsModalOpen(true);
  }

  return (
    <Header style={headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        onSelect={handleSelect}
        open={select}
        onClick={() => setSelect((prev) => !prev)}
        value="press / to open"
        options={crypto.map((i) => ({
          label: i.name,
          value: i.id,
          icon: i.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img width={20} src={option.data.icon} alt={option.data.label} />{" "}
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary" onClick={() => setDrawer(true)}>
        Add Asset
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <CoinInfoModal coin={coin} />
      </Modal>

      <Drawer
        width={600}
        title="Add Assest"
        onClose={() => setDrawer(false)}
        open={drawer}
        destroyOnClose
      >
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
    </Header>
  );
};

export default AppHeader;
