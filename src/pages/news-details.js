import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import WorkPackageDetailsPage from "@/components/WorkPackageDetailsPage/WorkPackageDetailsPage";

const NewsDetails = () => {
  return (
    <Layout pageTitle="News Details">
      <PageHeader pageTitle="News Details" />
      <WorkPackageDetailsPage />
    </Layout>
  );
};

export default NewsDetails;
