import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3] p-3">
            <div className="flex items-center">
                <button className="btn rounded-none text-lg bg-[#D72050] text-white me-4">Latest</button>
                <Marquee pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;