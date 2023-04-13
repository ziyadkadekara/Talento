import React  from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }
    ];
    return (
        <div className='home'>
        <div className='posts'>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <div className='img'>
                        <img src={post.img} alt=""/></div>
                    <div className='content'>
                        <Link className= 'link' to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                            <p>{post.description}</p>
                            <button>Read More..</button>
                        
                        </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Home;