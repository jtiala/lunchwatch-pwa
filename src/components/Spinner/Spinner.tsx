import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";

const Spinner: React.FC = () => {
  const [postponeRender, setPostponeRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPostponeRender(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={!postponeRender} unmountOnExit>
      <CircularProgress size={64} />
    </Fade>
  );
};

export default Spinner;
