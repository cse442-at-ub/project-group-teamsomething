import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TempProfilePic from "../../../assets/TempProfilePic.png"
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

export default function DescriptionHelper() {
  return (
    <Box p={5}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Stack spacing={2}>
                <img
                  src={TempProfilePic}
                  className="w-[150px] h-[150px] object-cover object-top"
                />
                <Stack spacing={1} direction="row">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Total waggered
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      $300
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={1} direction="row">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Total time
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      7 Months
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={1} direction="row">
                  <GpsFixedOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Goal Met/Failed
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      6/1
                    </Typography>
                  </Stack>
                </Stack>
                <Box py={2} />
                <Stack spacing={1} direction="row" alignItems="center">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>
                    Wager: $70
                  </Typography>
                </Stack>
                <Stack spacing={1} direction="row" alignItems="center">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>
                    2 Months
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={9}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Stack>
                    <Typography fontSize={20} fontWeight={600}>
                      Lindsey Dun
                    </Typography>
                    <Typography fontSize={14} fontWeight={600}>
                      Queens - New York
                    </Typography>
                    <Typography fontSize={14} fontWeight={600}>
                      Age: 21
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                    <Typography fontSize={12} fontWeight={300} color="blue">
                      Verified Pal
                    </Typography>
                  </Stack>
                </Stack>
                <Typography fontSize={14} fontWeight={400}>
                  I&apos;m an active enthusiast with a passion for fitness that
                  extends beyond the gym. When I&apos;m not breaking a sweat,
                  you can often find me exploring vibrant hiking trails,
                  challenging myself to conquer new peaks, or enjoying serene
                  yoga sessions in the great outdoors. I relish in organizing
                  group fitness activities with my friends, whether it&apos;s a
                  weekend hike followed by a picnic at a scenic lookout or an
                  impromptu yoga session in a peaceful park. <br />
                  Aside from my fitness adventures, I also enjoy diving into the
                  world of makeup artistry. I&apos;ve honed my skills over time
                  and love experimenting with various makeup looks, from natural
                  and minimalistic to bold and dramatic. Some of my most
                  cherished moments involve hosting makeup parties with friends,
                  where we exchange tips and tricks, try out different styles,
                  and share laughter over the occasional makeup mishap. <br />
                  As someone who values both physical and creative pursuits, I
                  find the perfect balance between sweating it out and
                  expressing myself through the art of makeup. Whether I&apos;m
                  embarking on a new hiking trail with friends or hosting a
                  makeup soirée at home, my life is a delightful blend of
                  adventure and artistic expression. <br />
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Stack mt={3}>
            <Button sx={{ alignSelf: "flex-end" }} variant="contained">
              Edit Profile
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
