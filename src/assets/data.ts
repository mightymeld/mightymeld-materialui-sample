export interface MovieDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const moviesData: MovieDataType[] = [
  {
    id: "1",
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "./thumbnails/beyond-earth/trending/small.jpg",
        large: "./thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/beyond-earth/regular/small.jpg",
        medium: "./thumbnails/beyond-earth/regular/medium.jpg",
        large: "./thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "2",
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "./thumbnails/bottom-gear/trending/small.jpg",
        large: "./thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/bottom-gear/regular/small.jpg",
        medium: "./thumbnails/bottom-gear/regular/medium.jpg",
        large: "./thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "3",
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: "./thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "4",
    title: "1998",
    thumbnail: {
      trending: {
        small: "./thumbnails/1998/trending/small.jpg",
        large: "./thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/1998/regular/small.jpg",
        medium: "./thumbnails/1998/regular/medium.jpg",
        large: "./thumbnails/1998/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "5",
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: "./thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "./thumbnails/dark-side-of-the-moon/trending/large.jpg",
      },
      regular: {
        small: "./thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "./thumbnails/dark-side-of-the-moon/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: "6",
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: "./thumbnails/the-great-lands/regular/small.jpg",
        medium: "./thumbnails/the-great-lands/regular/medium.jpg",
        large: "./thumbnails/the-great-lands/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "7",
    title: "The Diary",
    thumbnail: {
      regular: {
        small: "./thumbnails/the-diary/regular/small.jpg",
        medium: "./thumbnails/the-diary/regular/medium.jpg",
        large: "./thumbnails/the-diary/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "8",
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        small: "./thumbnails/earths-untouched/regular/small.jpg",
        medium: "./thumbnails/earths-untouched/regular/medium.jpg",
        large: "./thumbnails/earths-untouched/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "9",
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: "./thumbnails/no-land-beyond/regular/small.jpg",
        medium: "./thumbnails/no-land-beyond/regular/medium.jpg",
        large: "./thumbnails/no-land-beyond/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "10",
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: "./thumbnails/during-the-hunt/regular/small.jpg",
        medium: "./thumbnails/during-the-hunt/regular/medium.jpg",
        large: "./thumbnails/during-the-hunt/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "11",
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        small: "./thumbnails/autosport-the-series/regular/small.jpg",
        medium: "./thumbnails/autosport-the-series/regular/medium.jpg",
        large: "./thumbnails/autosport-the-series/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "12",
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: "./thumbnails/same-answer-2/regular/small.jpg",
        medium: "./thumbnails/same-answer-2/regular/medium.jpg",
        large: "./thumbnails/same-answer-2/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "13",
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: "./thumbnails/below-echo/regular/small.jpg",
        medium: "./thumbnails/below-echo/regular/medium.jpg",
        large: "./thumbnails/below-echo/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "14",
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: "./thumbnails/the-rockies/regular/small.jpg",
        medium: "./thumbnails/the-rockies/regular/medium.jpg",
        large: "./thumbnails/the-rockies/regular/large.jpg",
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "15",
    title: "Relentless",
    thumbnail: {
      regular: {
        small: "./thumbnails/relentless/regular/small.jpg",
        medium: "./thumbnails/relentless/regular/medium.jpg",
        large: "./thumbnails/relentless/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "16",
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: "./thumbnails/community-of-ours/regular/small.jpg",
        medium: "./thumbnails/community-of-ours/regular/medium.jpg",
        large: "./thumbnails/community-of-ours/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "17",
    title: "Van Life",
    thumbnail: {
      regular: {
        small: "./thumbnails/van-life/regular/small.jpg",
        medium: "./thumbnails/van-life/regular/medium.jpg",
        large: "./thumbnails/van-life/regular/large.jpg",
      },
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "18",
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: "./thumbnails/the-heiress/regular/small.jpg",
        medium: "./thumbnails/the-heiress/regular/medium.jpg",
        large: "./thumbnails/the-heiress/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "19",
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: "./thumbnails/off-the-track/regular/small.jpg",
        medium: "./thumbnails/off-the-track/regular/medium.jpg",
        large: "./thumbnails/off-the-track/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "20",
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        small: "./thumbnails/whispering-hill/regular/small.jpg",
        medium: "./thumbnails/whispering-hill/regular/medium.jpg",
        large: "./thumbnails/whispering-hill/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "21",
    title: "112",
    thumbnail: {
      regular: {
        small: "./thumbnails/112/regular/small.jpg",
        medium: "./thumbnails/112/regular/medium.jpg",
        large: "./thumbnails/112/regular/large.jpg",
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "22",
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: "./thumbnails/lone-heart/regular/small.jpg",
        medium: "./thumbnails/lone-heart/regular/medium.jpg",
        large: "./thumbnails/lone-heart/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "23",
    title: "Production Line",
    thumbnail: {
      regular: {
        small: "./thumbnails/production-line/regular/small.jpg",
        medium: "./thumbnails/production-line/regular/medium.jpg",
        large: "./thumbnails/production-line/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "25",
    title: "Dogs",
    thumbnail: {
      regular: {
        small: "./thumbnails/dogs/regular/small.jpg",
        medium: "./thumbnails/dogs/regular/medium.jpg",
        large: "./thumbnails/dogs/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "26",
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: "./thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "./thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "./thumbnails/asia-in-24-days/regular/large.jpg",
      },
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "27",
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: "./thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "./thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "./thumbnails/the-tasty-tour/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "28",
    title: "Darker",
    thumbnail: {
      regular: {
        small: "./thumbnails/darker/regular/small.jpg",
        medium: "./thumbnails/darker/regular/medium.jpg",
        large: "./thumbnails/darker/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "29",
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: "./thumbnails/unresolved-cases/regular/small.jpg",
        medium: "./thumbnails/unresolved-cases/regular/medium.jpg",
        large: "./thumbnails/unresolved-cases/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "30",
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: "./thumbnails/mission-saturn/regular/small.jpg",
        medium: "./thumbnails/mission-saturn/regular/medium.jpg",
        large: "./thumbnails/mission-saturn/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
];
