import { Card, Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import http from "../../api";

export const Dashboard = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await http.get("get-posts");
        setPosts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getChats()
  }, []);
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <div className="stats">
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Ambassadors Online</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Cases in Queue</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Cases in Progress</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Cases Completed</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Total Cases</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Cases in Queue</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Cases in Progress</div>
        </Card>
        <Card className="d-card" bodyStyle={{ padding: 0 }}>
          <div style={{ textAlign: "center" }}>0</div>
          <div style={{ fontSize: 16 }}>Cases Completed</div>
        </Card>
      </div>
      <Card title="Case List" bodyStyle={{ padding: 0 }}>
        <Table columns={[]} dataSource={post} bordered />
      </Card>
    </Fragment>
  );
};
