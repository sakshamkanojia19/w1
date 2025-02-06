import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";

const Counter = () => {
  const [count, setCount] = useState(0);

  const backgroundSpring = useSpring({
    backgroundColor: `rgb(${count * 15}, ${count * 5}, 200)`,
  });

  return (
    <animated.div style={{ ...backgroundSpring, padding: "20px", borderRadius: "10px", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
        Counter: {count}
      </Typography>
      <Box mt={2}>
        <Button variant="contained" sx={{ m: 1, backgroundColor: "#1976d2" }} onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button variant="contained" sx={{ m: 1, backgroundColor: "#d32f2f" }} onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant="contained" sx={{ m: 1, backgroundColor: "#9c27b0" }} onClick={() => setCount(0)}>
          Reset
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
