// import link artifacts
import Link from 'next/link';
// import image artifacts
import Image from 'next/image';

const Thumbnail = ({ title, src, slug}) => {
  // Add the Thumbnail cover image
    const image = (
        <Image
        height={720}
        width={1280}
        src={src}
        alt={`Thumbnail cover image ${title}`}
        />
    );

    // return the Thumbnail cover image slug
    return (
        <>
            {slug ? (
                <Link href={`/posts/${slug}`}>
                <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </>
    )
}

// export Thumbnail module
export default Thumbnail;