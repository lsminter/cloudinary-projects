import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "your-project-id",
  dataset: "production",
  useCdn: true
});
