import React from "react";
import { Flex, Tag, Typography, Divider } from "antd";
import { CoinInfo } from "./CoinInfo";

export const CoinInfoModal = ({ coin }) => {
  return (
    <>
      <CoinInfo coin={coin} withSymbol/>
      <Divider />
      <Typography.Paragraph>
        {/* <Flex align="center" justify="space-between"> */}
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
        {/* </Flex> */}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>
        {coin.priceBtc}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        {coin.marketCap.toFixed(2)}$
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contract Address: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
    </>
  );
};
