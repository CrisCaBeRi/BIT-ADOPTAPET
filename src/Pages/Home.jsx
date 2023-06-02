import { GridInfo } from "../Components/GridInfo/GridInfo";
import { Layout } from "../Components/Layout/Layout";
import ListadoPetDone from "../Components/ListadoPetDone/ListadoPetDone";
import { ShoppingNav } from "../Components/ShoppingNav/ShoppingNav";
import { WorkResume } from "../Components/WorkResume/WorkResume";

export const Home = () => {
  return (
    <Layout>
      <WorkResume/>  
      <ListadoPetDone/> 
      <GridInfo/>
      <ShoppingNav/>
    </Layout>
  );
};
