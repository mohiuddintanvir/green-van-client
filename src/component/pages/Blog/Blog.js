import React from 'react';
import Usetitle from '../../../hocks/Usetitle';

const Blog = () => {

    Usetitle('Blog')
    return (
        <div>
            <div className="mockup-window border bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    <h1>1.	Difference between SQL and NoSQL? </h1>
                    <span>:</span>
                    <p>SQL databases are vertically scalable,
                        while NoSQL databases are horizontally scalable.
                        SQL databases are table-based,
                        while NoSQL databases are document, key-value, graph,
                        or wide-column stores. SQL databases are better for multi-row transactions,
                        while NoSQL is better for unstructured data like documents or JSON.</p>



                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    <h1>2.		What is JWT, and how does it work? </h1>
                    <span>:</span>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact
                        and self-contained way for securely transmitting information between parties as a JSON object.
                        This information can be verified and trusted because it is digitally signed..</p>



                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    <h1>3.	What is the difference between javascript and NodeJS? </h1>
                    <span>:</span>
                    <p>avaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                        Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>



                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    <h1>4.How does NodeJS handle multiple requests at the same time? </h1>
                    <span>:</span>
                    <p> NodeJS receives multiple client requests and places them into EventQueue.
                        NodeJS is built with the concept of event-driven architecture.
                        NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>



                </div>
            </div>

        </div>
    );
};

export default Blog;