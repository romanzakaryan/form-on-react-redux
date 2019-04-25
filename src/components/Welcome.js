import React from "react";
import Heading from "arui-feather/heading";
import PropTypes from "prop-types";

export const Welcome = ({ name, surname }) => {
  return (
    <Heading size="l">
      <p>{`Ну наконец-то ты зашел ${name} ${surname}`}</p>
    </Heading>
  );
};

Welcome.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string
};
