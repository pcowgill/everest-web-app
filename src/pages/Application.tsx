import React from "react";
import { useParams } from "react-router-dom";

import Project from "../components/presentational/Project";
import { applications } from "../constants/projects";

// TODO: Start here next. Make a project page
// component that still uses project internally.
// Have it take category as a prop

export default function Application() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const arrayIndex = parseInt(indexString);
  console.log({ arrayIndex });
  const application = applications[arrayIndex];
  console.log(application);
  return (
    <Project
      name={application.name}
      tagline={application.tagline}
      website={application.website}
      twitter={application.twitter}
      description={application.description}
      type={application.type}
    />
  );
}
