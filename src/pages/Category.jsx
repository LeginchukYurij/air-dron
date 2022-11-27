import { useParams } from 'react-router-dom'

const Category = () => {
    const { name } = useParams();

    return (
        <div>Category</div>
    )
}

export default Category