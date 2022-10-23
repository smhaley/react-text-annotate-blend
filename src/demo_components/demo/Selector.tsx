import React from "react";
import Box from "@material-ui/core/Box";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

interface SelectorProps {
  value: string;
  handler: () => {};
}

const Selector: React.FC<SelectorProps> = ({ value, handler }) => {
  const tags = ["tagA", "tagB", "tagC"];
  return (
    <Box p={2}>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={value}
          onChange={handler}
        >
          {tags.map((tag) => (
            <MenuItem value={tag}>{tag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selector;
