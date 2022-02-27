import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./footer";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import ImageSlider from "./ImageSlider";
import CardSlider from "./CardSlider"

let places = [
    {title: "Delhi",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

},  {
    title: "Delhi",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

},  {title: "Delhi",
image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

},  {
    title: "Delhi",
image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",

}
]
const App = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <ImageSlider/>
            <div className="header_optionLineTwo">
               
                <div className="header_optionLineThree">
                    <h1>
                        PLAN YOUR TRIP
                    </h1>
                </div>
                
            </div>
            <div >
                    <CardSlider heading="TRIPS TO MOUNTAIN" data={places} />
                    <CardSlider heading="TRIPS TO BEACH" data={places} />
                    <CardSlider heading="TRIPS TO BEHAL" data={places} />
                

            </div>
            <Footer/>
        </div>
    );
}

export default App;
