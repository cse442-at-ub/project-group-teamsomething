import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';

ReviewBox.propTypes = {
  text: PropTypes.string
};

export default function ReviewBox({ text }) {

  const [highlighted, setHighlighted] = useState(false);

  const truncateText = (text) => {
    const MAX_CHARACTERS = 300;
    if (text.length > MAX_CHARACTERS) {
      return text.substring(0, MAX_CHARACTERS) + '...';
    }
    return text;
  }

  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
    >
      <Card
        sx={{
          flex: 8,
          background: '#e1f7dd'
        }}
      >
        <CardContent>
          <Typography variant="body2" component="span"
            textOverflow='ellipsis'
            maxWidth='100%'
            sx={{
              textDecoration: highlighted ?'underline #1e92e8 5px' : 'none',
              textDecorationSkipInk: 'none',
            }}
          >
            {
              text ? truncateText(text) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue."
            }
          </Typography>
            <span className="text-gray-400"> - Danny, 22</span>
          <Box mt={2} className=" text-gray-400">Partner with Danny for 2 Months</Box>
        </CardContent>
      </Card>

      <Button variant="contained"
        sx={{
          flex: 1
        }}
        size="large"
        onClick={() => setHighlighted(!highlighted)}
      >
        {highlighted ? 'Unhighlight' : 'Highlight'}
      </Button>
    </Stack>
  );
}
