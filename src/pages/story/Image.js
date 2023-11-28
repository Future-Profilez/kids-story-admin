export const toImage = (data: ArrayBuffer, filename: string): Image => {
  const blob = (): Blob => new Blob([data], { type: "image/png" });
  const buffer = (): ArrayBuffer => data;

  const asFile = (): File => {
    // Convert ArrayBuffer to Blob
    const fileBlob = new Blob([data], { type: 'image/png' });

    // Create a File object from the Blob
    const file = new File([fileBlob], filename, { type: 'image/png' });
    return file;
  };

  const base64 = (): string => Buffer.from(data).toString("base64");
  const asImageSrc = (): string => `data:image/png;base64,${base64()}`;

  return {
    base64,
    asImageSrc,
    buffer,
    blob,
    asFile,
  };
};


// <div className="d-flex justify-content-around gap-3">
//                         {isLoading ? (
//                             <div className="thumbnail-generating">
//                                 <div className="image-loader">
//                                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10Z" fill="url(#paint0_angular_563_396)" />
//                                         <defs>
//                                             <radialGradient id="paint0_angular_563_396" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(90) scale(10)">
//                                                 <stop stop-color="#9054D9" />
//                                                 <stop offset="1" stop-color="#A04DFF" stop-opacity="0" />
//                                             </radialGradient>
//                                         </defs>
//                                     </svg>
//                                     Image Generating...
//                                 </div>
//                                 <img ref={imageRef} src={imageView} alt="story" onLoad={handleImageLoad} />
//                               <button onClick={handeldata}> Confirm </button>
//                                 {/* {imageUrl && <img src={imageUrl} alt="Generated Image"   onLoad={handleImageLoad}/>} */}
//                             </div>
//                         ) : (
//                             <>
//                              <img src={imageView} alt="Generated"  onLoad={handleImageLoad} />

//                                 <div className="text-center mt-3" >
//                                     <button className="btn blue-gradient-btn"    onClick={() => fetchData}>
//                                         Re-Generate
//                                     </button>
//                                 </div>
//                             </>
//                         )}
//                     </div>
