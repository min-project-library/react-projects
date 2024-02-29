import ImageSliderContainer from "./containers/ImageSliderContainer";

function ImageSlider(){


    return(

            <ImageSliderContainer url={"https://picsum.photos/v2/list"}
            page={"1"}
            limit={"10"}/>

    )
}

export default ImageSlider;