import { GridInfo } from "../Components/GridInfo/GridInfo";
import { Layout } from "../Components/Layout/Layout";
import { WorkResume } from "../Components/WorkResume/WorkResume";

export const Home = () => {
  return (
    <Layout>
      <WorkResume/>     
      <GridInfo/>
    </Layout>
  );
};
