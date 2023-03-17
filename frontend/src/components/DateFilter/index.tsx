import { TextField } from "@mui/material";
import React, { useEffect } from "react";

export const Filter = ({ onChange }: any) => {
  const [from, setFrom] = React.useState<Date>();
  const [to, setTo] = React.useState<Date>();

  

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <TextField
        
        type={"date"}
      />
      <TextField
        
        type={"date"}
      />
    </div>
  );
};
