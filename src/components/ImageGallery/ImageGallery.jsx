import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGallery({ images, onClickImage, openModalImg }) {
    return (
       
            <ImageGalleryList>
            {images.map(({ id, webformatURL, largeImageURL }) => {
                return (
                        <ImageGalleryItem
                        key={id}
                        id={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        onClickImage={onClickImage}
                        openModalImg={openModalImg}
                    />      
                    )
                }
                    
                                    
                )}      
            </ImageGalleryList>   
    )
};
ImageGallery.propTypes = {
    onClickImage: PropTypes.func.isRequired,
    openModalImg: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ).isRequired
    
}