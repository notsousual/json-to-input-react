import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { InputBase } from "../model/InputBase";
import { InputTypes } from "../model/InputTypes";

export const Showcase = () => {
  const config = JSON.parse(useContext(ConfigContext).data);

  const switchInput = (input: InputBase, index: number) => {
    try {
      switch (input.type) {
        case InputTypes.Number:
          return (
            <TextField
              label={input.label}
              key={index}
              type="number"
              InputLabelProps={{ shrink: true }}
            >
              Really a number {input.label}
            </TextField>
          );
        case InputTypes.Date:
          return (
            <TextField
              label={input.label}
              key={index}
              type="date"
              InputLabelProps={{ shrink: true }}
            >
              Really a number {input.label}
            </TextField>
          );
        case InputTypes.SingleString:
          return (
            <TextField
              label={input.label}
              key={index}
              InputLabelProps={{ shrink: true }}
            >
              Really a number {input.label}
            </TextField>
          );

        case InputTypes.MultipleStrings:
          return (
            <TextField
              label={input.label}
              key={index}
              multiline
              minRows={5}
              InputLabelProps={{ shrink: true }}
            >
              Really a number {input.label}
            </TextField>
          );

        case InputTypes.Logical:
          return (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={input.label}
            />
          );

        case InputTypes.Enum:
          return (
            <FormControl key={index}>
              <FormLabel>{input.label}</FormLabel>
              <RadioGroup>
                {input.radioItems?.map(
                  (radioItem: string, indexRadio: number) => (
                    <FormControlLabel
                      key={indexRadio}
                      value={radioItem}
                      control={<Radio />}
                      label={radioItem}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
          );

        default:
          return (
            <div key={index}>Uh-oh! Your JSON input is probably incorrect</div>
          );
      }
    } catch (e) {
      return (
        <div key={index}>Uh-oh! Your JSON input is probably incorrect</div>
      );
    }
  };

  return (
    <Stack alignItems={"center"} spacing={3}>
      {config.title && <Typography variant={"h3"}>{config.title}</Typography>}

      <Stack spacing={3} width={"50%"}>
        {config.items?.map((item: any, index: number) =>
          switchInput(item, index)
        )}
      </Stack>
      <Stack direction={"row"} spacing={3}>
        {config.buttons?.map((item: string, index: number) => (
          <Button
            key={index}
            color={"primary"}
            size={"large"}
            variant={"contained"}
          >
            {item}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
