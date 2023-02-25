import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import {getClass} from "../utils"

function Photos() {
    const {photos} = useContext(Context);

    const imageElements = photos.map((img, index) => (
        <Image key={img.id} img={img} className={getClass(index)}/>
    ));

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
};

export default Photos;
