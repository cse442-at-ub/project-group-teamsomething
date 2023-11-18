import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useAuth } from "../../hooks/auth-hook";

ReviewBox.propTypes = {
  text: PropTypes.string
};

export default function ReviewBox({ text }) {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const textAreaRef = useRef(null);
  const { role } = useAuth();

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
          background: '#e1f7dd'
        }}
      >
        <CardContent>
          {isWritingReview ? (
            <TextField
              ref={textAreaRef}
              type="textarea"
              fullWidth
              value={reviewText}
              onChange={handleReviewInputChange}
              placeholder="Write your review here..."
            />
          ) : (
            <Typography variant="body2" component="span"
              textOverflow='ellipsis'
              maxWidth='100%'
              sx={{
                textDecoration: isWritingReview ? 'underline #1e92e8 5px' : 'none',
                textDecorationSkipInk: 'none',
              }}
            >
              {reviewText ? truncateText(reviewText) : "Default placeholder text if no review is available."}
            </Typography>
          )}
        </CardContent>
      </Card>
      {
        role === 'user' &&
        <Button variant="contained"
          sx={{
            flex: 1
          }}
          size="large"
          onClick={isWritingReview ? handleSaveReview : handleWriteReviewClick}
        >
          {isWritingReview ? 'Save Review' : 'Write a Review'}
        </Button>
      }
    </Stack>
  );
}