import React, { memo, useState } from 'react';
import './upload-gally-images.css';


const UploadGalleryImages = () => {
  const [images, setImages] = useState([]);

  const [currentImage, setCurrentImage] = useState(null)

  const deleteImageHandler = (imgDelete) => {
    setImages(images.filter((img) => img !== imgDelete));
  };

  console.log('images', images);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    if (images.length + selectedFilesArray.length > 10) return;

    console.log(selectedFilesArray); // можно взять размер файла
    const createdObjUrl = selectedFilesArray.map((file,index) => ({
      picture: URL.createObjectURL(file),
      order: index + images.length,
    }));

    setImages((prev) => [
      ...prev,
      ...createdObjUrl,
    ]);
  };

  function dragStartHandler(e, img) {
    console.log('img', img);
    setCurrentImage(img);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }

  function dropHandler(e, img) {
    e.preventDefault();
    console.log('img', img);
    setImages(images.map(i => {
      if (i.picture === img.picture) {
        return {...i, order: currentImage.order}
      }
      if (i.picture === currentImage.picture) {
        return {...i, order: img.order}
      }
      return i;
    }))
  }

  const sortCards = (a,b) =>{
    return a.order > b.order ? 1 : -1;
  }

  const finallyUploadClass = images.length
      ? 'upload-images-gallery__upload-image upload-image'
      : 'upload-images-gallery__upload-image upload-image full';

  return (
    <div className="gallery">
      {images?.sort(sortCards).map((img) => (
        <div
          key={img.picture}
          className="upload-images-gallery__image"
          draggable
          onDragStart={(e) => dragStartHandler(e, img)}
          onDragLeave={dragEndHandler}
          onDragEnd={dragEndHandler}
          onDragOver={dragOverHandler}
          onDrop={(e) => dropHandler(e, img)}
        >
          <img
            src={img.picture}
            alt="img"
          />
          <button
            className="delete-image"
            onClick={() => deleteImageHandler(img)}
          >
            X
          </button>
        </div>
      ))}
      {
        images.length < 10 && (
          <section className="upload-images-gallery">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className={finallyUploadClass}
            >
              <p className="upload-image__title">
                Drag & drop or
                <span> Upload files</span>
              </p>
              {!images.length && <div className="upload-image__info">
                <p className="upload-image__support">Supports: JPEG, JPG, PNG</p>
                 </div> }
              <p className="upload-image__count">
                {10 - images.length}
                {' '}
                images left
              </p>
              <input
                type="file"
                name="images"
                accept="image/jpeg, image/png"
                multiple
                onChange={onSelectFile}
              />
            </label>
          </section>
        )
      }
    </div>
  );
};

export default memo(UploadGalleryImages);
