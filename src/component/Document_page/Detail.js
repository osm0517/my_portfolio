import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams()

    return (
        <div>
            하이 {id}번 눌렀네
        </div>
    )
}

export default Detail;