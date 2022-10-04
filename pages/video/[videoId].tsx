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
  return (
    <div>
        <Modal
            isOpen={true}
            contentLabel="Video player"
            onRequestClose={handleRequestCloseFunc}
            overlayClassName={"top-0 left-0 right-0 bottom-0 w-full h-screen"}
            className={"absolute left-0 right-0 mx-auto my-0 w-800 bottom-[40px] bg-black40 top-[10%] outline-none rounded-[10px] border-2 border-solid border-shadow-2xl"}
        >
            <div>
              <iframe id="player" type="text/html" width="100%" height="390"
                src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://localhost:3000&controls=0&showinfo=0&rel=0&autoplay=1`}
                frameborder="0" className='rounded-sm borderBoxShadow'>
              </iframe>
            </div>
        </Modal>
    </div>
  )
}

export default Video