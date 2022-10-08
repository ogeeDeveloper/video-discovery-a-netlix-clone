import {useRouter} from 'next/router'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Video = () => {
    const router = useRouter()
    const videoId = router.query.videoId

    const handleRequestCloseFunc = () => {
        router.back()
    }

    // define video interface
    interface Video {
      title: string,
      publishTime: string,
      description: string,
      channelTitle: string,
      viewCount: number,
    }

    // Create structure for modal
    const videoModal:Video = {
      title: 'Video',
      publishTime: '2021-01-01',
      description: 'This is a video of a very long text forem',
      channelTitle: 'Channel',
      viewCount: 100,
    }

    const {title, publishTime, description, channelTitle, viewCount}= videoModal
    
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