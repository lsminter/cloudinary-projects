import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "your-id",
  dataset: "production",
  useCdn: true
});
