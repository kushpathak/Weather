import React, { createContext, useState } from "react";
export const BackgroundContext = createContext();
class BackgroundContextProvider extends React.Component {
  state = {
    backgroundImage: null,
  };

  setBackgroundImage = (image) => {
    this.setState({
      backgroundImage: image,
    });
  };
  render() {
    return (
      <BackgroundContext.Provider
        value={{ ...this.state, setBackgroundImage: this.setBackgroundImage }}
      >
        {this.props.children}
      </BackgroundContext.Provider>
    );
  }
}

export default BackgroundContextProvider;
