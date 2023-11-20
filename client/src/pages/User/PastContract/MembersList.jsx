import { Avatar, Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

const USERS = [
    {
        id: 'samantha-flint',
        name: "Samantha Flint",
        image: "http://avatars.dicebear.com/api/human/123.svg"
    },
    {
        id: 'musta-flint',
        name: "Musta Flint",
        image: "http://avatars.dicebear.com/api/human/123.svg"
    },
    {
        id: 'john-doe',
        name: "John Doe",
        image: "http://avatars.dicebear.com/api/human/123.svg"
    }
]

const MemberItem = ({ id, image, name, isSelected }) => {
    return (
        <Box p={2}
            component={Link}
            to={`${id}`}
            sx={{
                borderRadius: "20px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
            }}
            className={`hover:bg-[#E8E9F4] cursor-pointer ${isSelected ? 'bg-[#E8E9F4]' : ''}`}
        >
            <Stack direction='row' spacing={2}>
            <Avatar 
                src={image}
                sx={{borderRadius: "10px"}}
            />
            <Typography 
                variant='body1'
                fontWeight={isSelected ? 700 : 500}
                className="flex items-center gap-1 font-bold self-start"
            >
                {name}
                <GppGoodOutlinedIcon sx={{ fontSize: 18 }} />
            </Typography>
            </Stack>
        </Box>
    )
}

MemberItem.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default function MembersList() {
    const pathname = useLocation().pathname
    return (
        <Stack mt={5} pl={1} spacing={2}>
            {
                USERS.map((user) => {
                    const isSelected = pathname.includes(user.id)
                    return (
                        <MemberItem 
                            key={user.id} 
                            isSelected={isSelected}
                            {...user} 
                        />
                    )
                }
                )
            }
        </Stack>
    )
}