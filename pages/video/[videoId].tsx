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

    const handleRequestCloseFunc = () => {
        router.back()
    }
  return (
    <div>
        Video page {router.query.videoId}
        <Modal
            isOpen={true}
            contentLabel="Video player"
            onRequestClose={handleRequestCloseFunc}
            overlayClassName={""}
        >
            <h1>Video player</h1>
        </Modal>
    </div>
  )
}

export default Video