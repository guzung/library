import { Layout, Table, TableColumnsType } from "antd";
import { SetStateAction, useEffect, useState } from "react";
import Application from "../model/Application";
import getApplications from "../services/applications";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Connectors from "./Connectors";

interface Dummy {
  productCategory: string;
  name: string;
  storageOptions: string[];
}

const Inventory: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedConnector, selectConnector] = useState(null);

  useEffect(() => {
    getApplications({ pageNumber: 1, pageSize: 20 }).then((result) =>
      setData(result)
    );
  }, []);

  const columns: TableColumnsType<Application> = [
    {
      title: "Application Name",
      dataIndex: "appName",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Connectors",
      dataIndex: "appSources",
      render: (value) => {
        return <button onClick={() => selectConnector(value)}>{value}</button>;
      },
    },
  ];

  return (
    <>
      <h1>App Inventory</h1>
      <Layout hasSider>
        <Content>
          <Table<Application> columns={columns} dataSource={data} />
        </Content>
        <Sider collapsed={false} width={selectedConnector ? "50%" : 0} >
          <Connectors connector={selectedConnector} />
        </Sider>
      </Layout>
    </>
  );
};

export default Inventory;
