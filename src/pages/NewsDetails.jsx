import { useLoaderData, useParams  } from "react-router-dom";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetails = () => {

    const {id} = useParams();
    const news = useLoaderData();

    const aNews = news.find(n => n._id == id )
    const {image_url, title, details} = aNews;

    return (
        <div className='max-w-6xl mx-auto px-5'>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-3 space-y-5">
                    <img src={image_url} alt="" />
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{details}</p>
                    <button className="btn rounded-none text-lg bg-[#D72050] text-white me-4"><FaArrowLeft /> All news in this category</button>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;