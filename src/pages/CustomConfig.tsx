import { Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ConfigContext } from "../context/ConfigContext";

export const CustomConfig = () => {
  const [value, setValue] = useState<string>(useContext(ConfigContext).data);
  const [error, setError] = useState<boolean>(true);

  return (
    <>
      <Typography textAlign={"center"} variant={"h3"} fontWeight={"bold"}>
        Add config here
      </Typography>
      <Stack direction={"row"} spacing={3} marginTop={3} flexWrap={"wrap"}>
        <Stack flex={1} alignItems={"center"} spacing={3} marginBottom={2}>
          <TextField
            multiline
            minRows={15}
            defaultValue={value}
            placeholder="Default Value"
            fullWidth
            sx={{ width: "90%", minWidth: "300px" }}
            onChange={(e) => {
              try {
                JSON.parse(e.target.value);
                setValue(e.target.value);
                setError(false);
              } catch (e) {
                setError(true);
              } finally {
              }
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
                  if (!error) updateData(value);
                }}
              >
                Apply changes
              </Button>
            )}
          </ConfigContext.Consumer>
        </Stack>

        <Stack margin={5} flex={1} spacing={1} width={"80%"}>
          <Typography variant="h4" fontWeight={700}>
            Examples
          </Typography>
          <Typography variant="h5">Title</Typography>
          <code>{'"title":"Form title"'}</code>
          <Typography variant="h5">Buttons</Typography>
          <code>{'"buttons":["Ok","Cancel","Apply"]'}</code>
          <Typography variant="h4" fontWeight={600}>
            Inputs
          </Typography>
          <code>{'"items": [...array of objects]'}</code>
          <Typography variant="h5">Date input</Typography>
          <code>{'{"label":"Date input","type":"date"}'}</code>
          <Typography variant="h5">Number input</Typography>
          <code>{'{"label":"Number input","type":"number"}'}</code>
          <Typography variant="h5">Single string input</Typography>
          <code>{'{"label":"Single string input","type":"text"}'}</code>
          <Typography variant="h5">Multiline text input</Typography>
          <code>{'{"label":"Multiline input","type":"textarea"}'}</code>
          <Typography variant="h5">Checkbox input</Typography>
          <code>{'{"label":"Checkbox input","type":"checkbox"}'}</code>
          <Typography variant="h5">Radio buttons</Typography>
          <code>
            {
              '{"label": "Radio buttons input","type": "radio","radioItems": ["Czesc", "Ciao", "Ahoj"]}'
            }
          </code>
        </Stack>
      </Stack>
    </>
  );
};
