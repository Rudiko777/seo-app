interface CommentPost{
    comment: {
        author: string
        content: string
        post_id: string
    }
}

import React, {JSX} from "react";

export default function Comment({ comment}: CommentPost): JSX.Element {
    return (
        <div>
            <h4>{comment.author}</h4>
            <p>{comment.content}</p>
        </div>
    );
}