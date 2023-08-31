import { Link, useLocation } from "react-router-dom";
import { Box, Hidden } from "@mui/material";
import avatarImage from "../../assets/image-avatar.png";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
  {
    name: "home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "movies",
    icon: movieIcon,
    link: "/movies",
  },
  {
    name: "tv-series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "bookmarks",
    icon: bookmarkIcon,
    link: "/bookmarks",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/logo.svg" alt="logo" />
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link}>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "24px",
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Hidden smDown>
        <img src={avatarImage} alt="avatar" style={{ borderRadius: "50%" }} />
      </Hidden>
    </Box>
  );
};

export default Sidebar;
