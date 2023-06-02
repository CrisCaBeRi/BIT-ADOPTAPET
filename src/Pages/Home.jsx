import { GridInfo } from "../Components/GridInfo/GridInfo";
import { Layout } from "../Components/Layout/Layout";
import ListadoPetDone from "../Components/ListadoPetDone/ListadoPetDone";
import { WorkResume } from "../Components/WorkResume/WorkResume";

export const Home = () => {
  return (
    <Layout>
      <WorkResume/>  
      <ListadoPetDone/> 
      <GridInfo/>
    </Layout>
  );
};
