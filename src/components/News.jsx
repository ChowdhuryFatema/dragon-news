import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const News = ({aNews}) => {

    const {_id, title, image_url, details, rating, total_view} = aNews;
    

    return (
        <div className='space-y-5 border p-5'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <img src={image_url} alt="" />
            {
                details.length > 200 
                ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className='text-blue-600 font-bold'> Read More...</Link></p> 
                : <p>{details}</p>
            }
            <div className='flex justify-between gap-2 border-t pt-5'>
                <p>{rating.number}</p>
                <p>{total_view}</p>
            </div>
        </div>
    );
};
News.propTypes = {
    aNews: PropTypes.object,
}
export default News;