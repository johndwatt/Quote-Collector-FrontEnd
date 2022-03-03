import React from 'react';
// import axios from 'axios';

// import "../../styles/QuoteContainer.css"

// const url = 'http://localhost:4000/quotes'

function Home(props) {
    // const [quotes, setQuotes] = useState([]);

    // useEffect(() => {
    //     axios.get(url)
    //         .then(response => {
    //             setQuotes(response.data.quotes);
    //         }).catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    return (
        <div className='home-container'>
            <h1>Welcome to Quote Collector</h1>
            <h3>A place to keep your favorite quotes, phrases, and sayings.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perferendis nobis iste, provident molestiae eius aut rerum iusto iure excepturi repellendus voluptates ut minus quis architecto ratione consequuntur vel eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio debitis fuga esse iure consequatur cum quis, rem saepe corporis ipsa expedita maiores sint voluptatum tenetur officia molestias dignissimos nostrum animi.</p>
            <div className='random-quote'>
                <p>Random quote stuff goes here</p>
            </div>
        </div>

    );
}

export default Home;