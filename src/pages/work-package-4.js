import WorkPackage1Details from '@/components/WorkPackagesDetails/WorkPackage1Details';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';
import workPackage4Details from '@/data/workPackage4Details';

const CausesDetails = () => {
  return (
    <Layout pageTitle="Work Package 4">
      <PageHeader pageTitle="Work Package 4" />
      <WorkPackage1Details
        data={workPackage4Details}
        eventUrl="/event-details-wp4"
      />
    </Layout>
  );
};

export default CausesDetails;
