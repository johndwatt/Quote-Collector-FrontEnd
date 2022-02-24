import React from 'react';

function Quote(props) {
    return (
        <div className="quote">
            <p className="quote-content">Some content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod possimus vitae totam voluptatibus incidunt pariatur illo, cupiditate minima odit voluptate placeat, vero alias dignissimos at. Ut necessitatibus qui recusandae culpa?</p>
            <p className="quote-author">Author</p>
            <p className="quote-tags">Tags</p>
        </div>
    );
}

export default Quote;