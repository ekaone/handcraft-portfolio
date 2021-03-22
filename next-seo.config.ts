const title = "Eka Prasetia";
const description = "Designer, developer and maker of things.";

const SEO = {
  title,
  description,
  canonical: "https://handcraft-portfolio-eka.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://handcraft-portfolio-eka.vercel.app/",
    title,
    description,
    images: [
      {
        url: "https://handcraft-portfolio-eka.vercel.app/static/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@dannyeka",
    site: "@dannyeka",
    cardType: "summary_large_image",
  },
};

export default SEO;
