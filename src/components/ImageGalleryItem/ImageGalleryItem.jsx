import {GalleryItem, ImageItem} from 'components/ImageGalleryItem/ImageGalleryItem.styled'
import PropTypes from 'prop-types';

export function ImageGalleryItem({ webformatURL, id, onClickImage, largeImageURL, openModalImg }) {
    return (
        <GalleryItem
            onClick={() => onClickImage(id)}>
            <ImageItem
                src={webformatURL}
                alt={id}
                onClick={() => {
                    
                    openModalImg(largeImageURL)
                 }} />
        </GalleryItem>
    
    );
};
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClickImage: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModalImg: PropTypes.func.isRequired
};