import { useEffect, useState } from "react";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
  

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2>All Category</h2>

            <ul>
                {
                    categories.map(category => <li key={category.id}>{category.name}</li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideNav;