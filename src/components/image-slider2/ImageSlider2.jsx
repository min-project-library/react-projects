import ImageSliderContainer from "./container/ImageSliderContainer";


function ImageSlider2(){
    return(
        <ImageSliderContainer
        url={"https://picsum.photos/v2/list"}
        page={1}
        limit={10}
        />
    )   
}

export default ImageSlider2;