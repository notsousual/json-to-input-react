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
import { InputBase } from "../model/types/InputBase";
import { InputTypes } from "../model/enum/InputTypes";

export const Showcase = () => {
  const config = useContext(ConfigContext).data;

  const Buttons = () => {
    try {
      if (config?.buttons) {
        return (
          <Stack direction={"row"} spacing={2}>
            {config.buttons.map((label: string, index: number) => (
              <Button
                key={index}
                color={"primary"}
                size={"large"}
                variant={"contained"}
                type={label.toLowerCase() === "submit" ? "submit" : undefined}
              >
                {label}
              </Button>
            ))}
          </Stack>
        );
      }
    } catch (e) {
      return <Typography>Oops! Error in buttons!</Typography>;
    }
  };

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
            />
          );
        case InputTypes.Date:
          return (
            <TextField
              label={input.label}
              key={index}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          );
        case InputTypes.SingleString:
          return (
            <TextField
              label={input.label}
              key={index}
              InputLabelProps={{ shrink: true }}
            />
          );

        case InputTypes.MultipleStrings:
          return (
            <TextField
              label={input.label}
              key={index}
              multiline
              minRows={5}
              InputLabelProps={{ shrink: true }}
            />
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
                  (radioItem: string, indexRadio: number) =>
                    radioItem ? (
                      <FormControlLabel
                        key={indexRadio}
                        value={radioItem}
                        control={<Radio />}
                        label={radioItem}
                      />
                    ) : null
                )}
              </RadioGroup>
            </FormControl>
          );

        default:
          return (
            <div key={index}>
              Uh-oh! Your JSON input type is probably incorrect
            </div>
          );
      }
    } catch (e) {
      return (
        <div key={index}>Uh-oh, error! Your JSON is probably incorrect</div>
      );
    }
  };

  return (
    <Stack alignItems={"center"} spacing={3}>
      {config !== undefined ? (
        <>
          {config.title ? (
            <Typography variant={"h3"}>{config.title}</Typography>
          ) : null}
          <form
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              rowGap: 20,
            }}
          >
            {config.items?.map((item: any, index: number) =>
              switchInput(item, index)
            )}
            <Stack direction={"row"} spacing={3}>
              <></>
            </Stack>
          </form>

          {Buttons()}
        </>
      ) : (
        <Typography variant="h3">Object is undefined</Typography>
      )}
    </Stack>
  );
};
