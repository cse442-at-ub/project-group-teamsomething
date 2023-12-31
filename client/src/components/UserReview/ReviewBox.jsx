import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useAuth } from "../../hooks/auth-hook";

ReviewBox.propTypes = {
  text: PropTypes.string,
  partner: PropTypes.string,
};

export default function ReviewBox({ text, partner }) {
  const [highlighted, setHighlighted] = useState(false);

  const truncateText = (text) => {
    const MAX_CHARACTERS = 300;
    if (text.length > MAX_CHARACTERS) {
      return text.substring(0, MAX_CHARACTERS) + '...';
    }
    return text;
  }

  const handleWriteReviewClick = () => {
    setIsWritingReview(!isWritingReview);
  }

  const handleReviewInputChange = (event) => {
    setReviewText(event.target.value);
  }

  const handleSaveReview = () => {
    e.preventDefault()
    console.log('Saved review:', reviewText);

    setIsWritingReview(false);
  }

  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      component={'form'}
      onSubmit={handleSaveReview}
    >
      <Card
        sx={{
          flex: 8,
          background: '#e1f7dd',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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
              text ? truncateText(text) : "Review Text"
            }
          </Typography>
          <span className="text-gray-400"> {partner}</span>
        </CardContent>
      </Card>
    </Stack>
  );
}