export type giphy = {
  id: string;
  title: string;
  images: imageType;
  bitly_gif_url: string;
  bitly_url: string;
  import_datetime: string;
  type: string;
  url: string;
};
export type imageType = {
  fixed_height: {
    url: string;
  };
};

export type giphys = {
  data?: [giphy];
};
