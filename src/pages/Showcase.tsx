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
import { InputTypes } from "../model/enums/InputTypes";

export const Showcase = () => {
  const config = useContext(ConfigContext).data;

  const buttons = (x: string[]) => {
    return (
      <Stack direction={"row"} spacing={2}>
        {x.map((label: string, index: number) => (
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
  };

  const switchInput = (input: InputBase, index: number) => {
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
        return input.radioItems ? (
          <FormControl key={index}>
            <FormLabel>{input.label}</FormLabel>
            <RadioGroup>
              {input.radioItems.map((radioItem: string, indexRadio: number) =>
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
        ) : null;

      default:
        return (
          <div key={index}>
            Uh-oh! Your JSON input type is probably incorrect
          </div>
        );
    }
  };

  return (
    <Stack alignItems={"center"} spacing={3}>
      {config !== undefined ? (
        <>
          {config.title && (
            <Typography variant={"h3"}>{config.title}</Typography>
          )}
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
          </form>

          {config.buttons && buttons(config.buttons)}
        </>
      ) : (
        <Typography variant="h3">Object is undefined</Typography>
      )}
    </Stack>
  );
};
