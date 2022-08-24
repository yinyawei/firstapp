import React, { useState, useEffect } from "react";
import { Button } from "antd";

function Child(props) {
  const { children } = props;
  // console.log(props);

  const [status, setStatus] = useState(true);
  const [statuss, setStatuss] = useState(true);
  const changeStatus = () => {
    setStatus(!status);
    console.log(status);
  };

  useEffect(() => {
    console.log("componentsWillMount");
  }, []);
  useEffect(() => {
    console.log("componentsWillUpdate");
  }, [statuss]);
  return (
    <div>
      <div>天气{status ? "炎热" : "凉爽"}</div>
      <Button onClick={changeStatus} type="primary">
        {children}
      </Button>
    </div>
  );
}

export default Child;
