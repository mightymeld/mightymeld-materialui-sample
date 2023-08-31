import { useContext } from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import { MovieContext } from "../../context/movies-context";
import { MovieDataType } from "../../assets/data";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";

interface MoviecardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MoviecardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleAddBookmark = (id: string) => {
    dispatch({ type: "ADD BOOKMARK", id });
  };

  const handleRemoveBookmark = (id: string) => {
    dispatch({ type: "REMOVE BOOKMARK", id });
  };

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0, 0, 0, 0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                alt=""
                width={16}
                height={16}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="movie category"
              >
                {movie.category}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="movie rating"
              >
                {movie.rating}
              </Typography>
            </Grid>
          </Grid>
          <Typography aria-label="movie rating" color="#E0E0E0" padding={0}>
            {movie.title}
          </Typography>
        </Stack>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "black",
              borderRadius: "50%",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() =>
              movie.isBookmarked
                ? handleRemoveBookmark(movie.id)
                : handleAddBookmark(movie.id)
            }
          >
            {movie.isBookmarked ? (
              <BookmarkIcon fill={"#E0E0E0"} />
            ) : (
              <BookmarkEmptyIcon />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
