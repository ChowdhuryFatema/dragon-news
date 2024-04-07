import BreakingNews from "../components/BreakingNews";
import News from "../components/News";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const news = useLoaderData()
    return (
        <div className='max-w-6xl mx-auto px-5'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-10">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border">
                    
                    {
                        news.map(aNews => <News key={aNews._id} aNews={aNews}></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;