import React, { useState, useContext, useEffect } from "react";

import api from "service/course";
import { ToastContext, AuthContext } from "context/consumer";

export default function withCourses(WrapedComponent) {
  return (props) => {
    const [courses, setCourses] = useState([]);
    const { show } = useContext(ToastContext);
    const { user } = useContext(AuthContext);

    useEffect(() => {
      let mounted = true;
      api
        .fetchByTeacher(user.dni)
        .then((r) => {
          if (mounted) {
            setCourses(r.values);
          }
        })
        .catch((error) => {
          show(error.message || error, "error");
        });
      return () => {
        mounted = false;
      };
    }, [user]);

    return (
      <WrapedComponent show={show} user={user} courses={courses} {...props} />
    );
  };
}
