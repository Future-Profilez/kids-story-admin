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
