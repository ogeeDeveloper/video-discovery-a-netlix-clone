import React from 'react';
import {useRouter} from 'next/router'
import Modal from 'react-modal'
import { getVideoById } from '../../lib/videos';

Modal.setAppElement('#__next')

// define video interface
// interface Video {
//   title: string,
//   publishTime: string,
//   description: string,
//   channelTitle: string,
//   viewCount: number,
// }

export async function getStaticProps() {
  // Data to be fetched from API
  // Create structure for modal
  // const videoModal:Video = {
  //   title: 'Video',
  //   publishTime: '2021-01-01',
  //   description: 'This is a video of a very long text forem',
  //   channelTitle: 'Channel',
  //   viewCount: 1004,
  // }
  const videoId = '-wPm99PF9U'
  const videoArray:any = await getVideoById(videoId)
  console.log({videoArray})

  // if (!res.ok) {
  //   // If there is a server error, you might want to
  //   // throw an error instead of returning so that the cache is not updated
  //   // until the next successful request.
  //   throw new Error(`Failed to fetch posts, received status ${res.status}`)
  // }

  // If the request was successful, return the posts
  // and revalidate every 10 seconds.
  return {
    props: {
      videoModal: videoArray > 0 ? videoArray[0] : null,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  // Videos that will load by ISR
  // Wakanda _Z3QKkl1WyM, Little Mermaid 0-wPm99PF9U, Encanto CaimKeDcudo
  const listOfVideos = ["_Z3QKkl1WyM", "0-wPm99PF9U", "CaimKeDcudo"]
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }))

  return { paths, fallback: "blocking" }
}

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

  interface videoProp {
    title: string,
    publishTime: string,
    description: string,
    channelTitle: string,
    viewCount: number,
  }

const Video= ({videoModal}:any) => {
    const router = useRouter()
    // const videoId = router.query.videoId
    console.log(videoModal)
    // const {title, publishTime, description, channelTitle, statistics: { viewCount } = { viewCount: 0 }}= props.videoModal
    const {
      title,
      publishTime,
      description,
      channelTitle,
      statistics: { viewCount } = { viewCount: 0 },
    } = videoModal;

    const handleRequestCloseFunc = () => {
        router.back()
    }
    
  return (
    <div>
        <Modal
            isOpen={true}
            contentLabel="Video player"
            onRequestClose={handleRequestCloseFunc}
            overlayClassName={"top-0 left-0 right-0 bottom-0 w-full h-screen"}
            className={"absolute left-0 right-0 mx-auto my-0 w-800 bottom-[40px] bg-black40 top-[5%] outline-none rounded-[10px] border-2 border-solid border-shadow-2xl"}
        >
          <iframe id="player" type="text/html" width="100%" height="390"
              src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://localhost:3000&controls=0&showinfo=0&rel=0&autoplay=1`}
              frameborder="0" className='rounded-sm borderBoxShadow'>
            </iframe>

          {/* Modal Body */}
          <div className='py-0 px-[48px]'>
            {/* Modal body content */}
            <div className='grid grid-cols-2 gap-y-8'>
              {/* Column 1 */}
              <div className='max-h-96 overflow-y-hidden'>
                {/* Published Time */}
                <p className='text-xl mt-6 mb-2 text-green10'>{publishTime}</p>
                {/* Title */}
                <p className='text-xl text-white10'>{title}</p>
                {/* Description */}
                <p className='mb-2 mt-3'>{description}</p>
              </div>
              {/* Column 2 */}
              <div className='flex flex-col text-white leading-7'>
                <p className='subText subTextWrapper'>
                  <span className='infoText'>Cast: </span>
                  <span>{channelTitle}</span>
                </p>
                <p className='subText subTextWrapper'>
                  <span className='infoText'>View Count: </span>
                  <span>{viewCount}</span>
                </p>
              </div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default Video