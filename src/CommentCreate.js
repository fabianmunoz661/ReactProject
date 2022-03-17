import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });
        setContent("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nuevo comentario</label>
                    <input className="form-control"
                        onChange={e => setContent(e.target.value)}>

                    </input>
                </div>
                <button className="btn btn-primary">Agregar comentario</button>
            </form>
        </div>
    );
};

export default CommentCreate;