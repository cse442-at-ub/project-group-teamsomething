import { Grid, Stack, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import ReviewBox from "../../../components/UserReview/ReviewBox";


const PartnerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [partnerName, setPartnerName] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    // Fetch reviews from the server when the component mounts
    fetch('https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/review.php')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send data to the server when the form is submitted
    fetch('https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/retrieveReview.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        partner: partnerName,
        review: reviewText,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Update the reviews state with the new data
        setReviews([...reviews, data]);
        // Clear the form fields
        setPartnerName("");
        setReviewText("");
      })
      .catch(error => console.error('Error submitting review:', error));
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={8} overflow='scroll' maxHeight={'100vh'}>
        <Stack p={3} spacing={3}>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Partner Name"
              variant="outlined"
              fullWidth
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Review Text"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>

          {reviews.map((review, index) => (
            <ReviewBox key={index} text={review.review} partner={review.partner} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PartnerReview;