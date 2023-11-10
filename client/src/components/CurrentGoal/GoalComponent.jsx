import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function GoalComponent() {
    const [editMode, setEditMode]= useState(false);
    const [goal, setGoal] = useState("To go to the gym 3 times a week, have a healthy diet, and lose 10 pounds. I want to be able to run a 5k by the end of the year.");
    return (
        <Stack height='100%' >
            <Stack flex={1} spacing={2}>
                <Typography fontWeight='bold' className="text-center">Current Goal</Typography>
                {
                    editMode
                    ?
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        minRows={4}
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                    :
                    <Typography>
                        {goal}
                    </Typography>
                }
            </Stack>
            <Button 
                sx={{
                    alignSelf: "flex-end",
                }}
                variant="contained" 
                onClick={() => setEditMode(!editMode)}
            >
                {editMode ? "Save" : "Edit"}
            </Button>
        </Stack>
    )
}   