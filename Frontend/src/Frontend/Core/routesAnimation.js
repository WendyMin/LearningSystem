/*
entering -> entered , this is the enter animation
entered -> exiting , this is the exiting animation
*/

export default {
  "*": {
    "*": {
      entering: {
        left: "100%"
      },
      entered: {
        left: "0"
      },
      exiting: {
        left: "-100%"
      },
      time: 800,
      timingFunction: "ease",
      toAnimate: "all"
    },
    from: {
      "/notFound": {
        entering: {
          opacity: 0
        },
        entered: {
          opacity: 1
        },
        exiting: {
          opacity: 0
        },
        timingFunction: "linear",
        time: 800
      }
    },
    to: {
      "/notFound": {
        time: 0
      }
    }
  },
  "/": {
    "/test": {
      entering: {
        top: "100%"
      },
      entered: {
        top: "0"
      },
      exiting: {
        left: "100%"
      }
    }
  },
  "/test": {
    "/": {
      entering: {
        left: "100%"
      },
      entered: {
        left: "0"
      },
      exiting: {
        top: "100%"
      }
    }
  }
};
