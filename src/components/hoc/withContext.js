import React, { useContext } from "react";

import { ToastContext, AuthContext } from "context/consumer";

export default function withContext(WrapedComponent) {
  return (props) => {
    const { show } = useContext(ToastContext);
    const { user } = useContext(AuthContext);

    return <WrapedComponent show={show} user={user} {...props} />;
  };
}
