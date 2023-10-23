import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "project-id",
  dataset: "production",
  useCdn: true
});
