import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { JSONObject } from "../model/types/JSONObject";
import { parseJSON } from "../model/parsers/parseJSON";
import { InputTypes } from "../model/enums/InputTypes";

export const EditConfig = () => {
  const config = useContext(ConfigContext).data;
  const [value, setValue] = useState<string>(
    config ? JSON.stringify(config) : ""
  );
  const [error, setError] = useState<boolean>(false);

  const isValid = (x: JSONObject) => {
    if (x.items) {
      for (const item of x.items) {
        if (item.type === InputTypes.Undefined) setError(true);
      }
    } else {
      setError(false);
    }
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    try {
      setValue(e.target.value);
      setError(false);
      isValid(parseJSON(JSON.parse(e.target.value)));
    } catch (e) {
      setError(true);
    } finally {
    }
  };

  return (
    <>
      <Typography textAlign={"center"} variant={"h3"} fontWeight={"bold"}>
        Edit configuration
      </Typography>

      <Stack direction={"row"} spacing={3} marginTop={3} flexWrap={"wrap"}>
        <Stack flex={1} alignItems={"center"} spacing={3} marginBottom={2}>
          <TextField
            multiline
            minRows={15}
            defaultValue={value}
            fullWidth
            sx={{ width: "90%", minWidth: "300px" }}
            onChange={(e) => {
              handleInput(e);
            }}
          />

          <ConfigContext.Consumer>
            {({ data, updateData }) => (
              <Button
                color={"primary"}
                size={"large"}
                variant={"contained"}
                disabled={error}
                onClick={() => {
                  try {
                    if (!error && value) {
                      const valueJSON = parseJSON(JSON.parse(value));

                      updateData(valueJSON);
                    }
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                Apply changes
              </Button>
            )}
          </ConfigContext.Consumer>
        </Stack>
        <Stack margin={3} spacing={1} maxWidth={"570px"}>
          <Typography variant="h5" fontWeight={700}>
            Notes
          </Typography>
          <Typography lineHeight={1.5}>
            <Link
              href={"https://mui.com/material-ui/getting-started/overview/"}
            >
              Material UI library
            </Link>{" "}
            is used. <br />
            You cannot hit 'apply changes' until you write valid JSON
            <span> 🙃</span>.
            <br /> I used a workaround using the Context API instead of
            rewriting the JSON file in the frontend of the application.
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Markup
          </Typography>
          <Typography variant="h6">Title</Typography>
          <code>{'"title":"Form title"'}</code>
          <Typography variant="h6">Buttons</Typography>
          <code>{'"buttons":["Ok","Cancel","Apply"]'}</code>
          <Typography variant="h6" fontWeight={"bold"}>
            Inputs
          </Typography>
          <code>{'"items": [...array of objects]'}</code>
          <Typography variant="h6">Date input</Typography>
          <code>{'{"label":"Date input","type":"date"}'}</code>
          <Typography variant="h6">Number input</Typography>
          <code>{'{"label":"Number input","type":"number"}'}</code>
          <Typography variant="h6">Single string input</Typography>
          <code>{'{"label":"Single string input","type":"text"}'}</code>
          <Typography variant="h6">Multiline text input</Typography>
          <code>{'{"label":"Multiline input","type":"textarea"}'}</code>
          <Typography variant="h6">Checkbox input</Typography>
          <code>{'{"label":"Checkbox input","type":"checkbox"}'}</code>
          <Typography variant="h6">Radio buttons</Typography>
          <code>
            {
              '{"label": "Radio buttons input","type": "radio","radioItems": ["Czesc", "Ciao", "Ahoj"]}'
            }
          </code>
        </Stack>
      </Stack>
      <Stack margin={3} spacing={1}></Stack>
    </>
  );
};
