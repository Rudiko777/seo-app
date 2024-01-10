import React, {JSX} from "react";
import {PostFastAPI} from "@/services/post";

interface Post{
    post: PostFastAPI
}

export default function BlogPost({ post }: Post): JSX.Element {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}