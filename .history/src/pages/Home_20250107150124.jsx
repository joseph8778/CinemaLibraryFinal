import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="home_wrapper">
                    <h1 className='home_title'> Countless movies, shows, and more.</h1>
                    <h2 className='home_subtitle'>Welcome to Cinema Library, the universal library for all your favorite films.</h2>

                    <Link to="/search">
                    <button className='home__explore--button'>
                        Explore
                    </button>
                    </Link>

                    <div className="home__movies--container">
                        <div className="home__movies--wrapper">
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMXxbxBtOMgVBgXObvgPHc1tfxXcNm1vGpQ&s" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                            <div className="home__movie--card">
                                <img className='home__movie--poster' src="https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1.jpg?v=1733910535" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
