
import React from "react";
import "./Blog.css";

function Blog() {
    const blogPosts = [
        {
            id: 1,
            category: "Design",
            title: "UX review presentations",
            description:
                "How do you create compelling presentations that wow your colleagues and impress your managers?",
            image:
                "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nedVBfcYGzOukdGXr-3-VrTd~IGTHnMPGQ0BqHle8WHj6tRJalxfN9XnWotX2OgPDxnVM6U72ypgoW1BcVP~UXM1TChuOtF4BYRoaxUy3EKrxwxn8yThKzPDazZ~9G9TI5IYEJQ4-Tq0-a3AS~F1WFNRtmFPkLElsaG83fVMklFfuS2qZAuokTXUdaJsa9llqtdDEIMdfa-SgfsLlzqY4xEAUC6gfYJ1cgoBX7c~F2L51sLlympvzj2oXCP6My7XX6-Olo1iNl1qPCbZ5dfsdrTg87MNBRlUAEP5bxTNI73DWcWbVf9C9EWSfuyBpo5M1VQMffMWc5CFex1aOBKhxQ__",
            authorImage:
                "https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nj1dhHJvIwqKXhqEFQBNONRc113LfBUCy-0oGmZDlV-0qwv3paPWz0AhVnQlAh8n743SJAQqGwNLiwvqu3NiQ9~~dKI4SWiBp2mbdzu24CDTSpWbMk0FEEt0uVMuvErbYlh9Pde79A8RnQNPX3caI61XMQJCUadFzsB~ttGXFaOo0p7ClgWKFwmgcfU3E-J3ndwBSnXjNCJTlD5Hv6HQgE-sC1MBhgTzwj8iPj9R7JWd7W~rQS-7fZMnnSDxZTlNSk1Fqgsui~tlkGHx0rgj2wZJbBmDpjWc89e8iiNE7MBk9Pvs6p2WxGu61oX4SNdJPXybNcQ109-58cGnbCDhxA__",
            author: "Olivia Rhye",
            date: "20 Jan 2024",
        },
        {
            id: 2,
            category: "Product",
            title: "Migrating to Linear 101",
            description:
                "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
            image:
                "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ItkhJJKc1DetPRYdv~i~o6u6C2JxJwozvlC03Q0C2Z0LdxAQlQWhqgzKGo97bRiJ68ykSBSqzlRfmve0g1L12fWqTCAVjD0Ads27EPNT5wI2aYeW1Hp6yPLUP~OU4qEnPlv6wJxH5xo64eerEMBysNs5Z0fXqmdraULsHWlvEuKjd0Dx3CToSa2JBxHNSGDpb8p1JrB6gMx8GHdwwrQ~2uYajlZwXiLGvjoOEa5Gbb6smARl2kS8JbtO39sh68Z1H1ELtBer~c8XSFHiq4C4FZnOJtpiO~a9Ty9fv0SXO2OGYOpCIcuPRsnCV--xWvsA7yzZNeaAxGFVRhEBSOVL~Q__",
            authorImage:
                "https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emKE~fdHYGeYqPPmV2kbfBBChE3exTEsoPlDUk3ZHUlT44-fJiujrlvt9xohEtLxDamrA94Pz0FMQUsKQJsc-mDKkqOS2KAIkcOUznqjGix9Vzy4ublASbi~nutKAo1vuh~~2mAlGPiMh-k8ciX5qhxryCJJFe8z~hhTW0ZjXszDLz6W2X2zyftDDYnrnyiOqb6mWuhgeXLSQx1DjLMIOPWetmXXoVD1tkW20HY~x7ep0Q0YB-1Y51Msh5KRHrhkYKPjDt-LUw-WKb30VrzvkN17kab7q8Z32eWOomxKFaVkGhFtFWctNZ65E7ich-g9Gn7nNHA9tHIZl5Hh6cAbiQ__",
            author: "Phoenix Baker",
            date: "19 Jan 2024",
        },
        {
            id: 3,
            category: "Software Engineering",
            title: "Building your API stack",
            description:
                "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            image:
                "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qlhSr0QmnqVYKaMx45YiZkPiGWN8EWqkH~cVJYg77weA9Ghh40SkXGOgWotBK3-8f0pAMi9a8xUuOWq-JYtlBjqSfHASehW7C0zOGQsc~ppXRCIpgT9z4aEHnXz~acW7YoCfZQi0uO0WPgQ7ocq6K1gdBM-~HXoZDcgVxG-3Qarm8nnmIV8TSneHEasrp57udLNWagOR7St1FkDP46W81qqPxuhw-8tp~Qi4R4pVUpl9Uy6WXBepLHYgvU0iPdiItaqc3ngyKMAFl4dx8bzZMsJvEfrCXNt~IpTsmUTp52u0Iy~s73rtlz6s2nWw8s-X7gPn6jlod5fY0ASBbMTcuA__",
            authorImage:
                "https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=djJfkvIRgCZWitp3VjLhjbj06ad6rnz0H9dk7LZJsbzlw414t3w9KOu7-AJOURWSxADNPpUb8Al-R1QCNZ-1AN0FV~ivkg4xu2hFa5aMYCHddPQrsPGSKRhuPWjjsfVmyy5rXawy2szCnwavftEBIJ0VIy-lk~ZLjvItqQyxR7uem8XIY6v0TtHqrIwVLsUNOISgKObaKK4oK-DO64Wc4NxU6H9GiczDn2I-qZ2M~cqfQb5Fx4z7AM4iS8bzpHnHkbuMRT7lB2~WIsnnKQIZAAueOisRRJe6lTjIQFjFGudyOBb-C23C8Srf7bgXTi0h6WuIQTgyfYLSUn4dccnXvw__",
            author: "Lana Steiner",
            date: "18 Jan 2024",
        },
    ];

    return (
        <div className="blog-container">
            <header className="blog-header">
                <div className="blog-header-text">
                    <span className="blog-title">Our blog</span>
                    <h1 className="blog-heading">Lastest blog posts</h1>
                    <p className="blog-subheading">
                        Tool and strategies modern teams need to help their companies grow.
                    </p>
                </div>
                <button className="view-all-btn">View all posts</button>
            </header>
            <div className="blog-cards">
                {blogPosts.map((post) => (
                    <div className="blog-card" key={post.id}>
                        <img src={post.image} alt={post.title} className="card-image" />
                        <div className="card-content">
                            <p className="card-category">{post.category}</p>
                            <h2 className="card-title">{post.title}</h2>
                            <p className="card-description">{post.description}</p>
                            <div className="card-footer">
                                <img
                                    src={post.authorImage}
                                    alt={post.author}
                                    className="author-image"
                                />
                                <div>
                                    <p className="author-name">{post.author}</p>
                                    <p className="post-date">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
