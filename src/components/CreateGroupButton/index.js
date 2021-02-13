import React, {useRef, useState, useEffect } from 'react'
import './index.css'

const CreateGroupButton = () => {

    const [showModal, setShowModal] = useState(false)
    const [fileIsThere, setFileIsThere] = useState(0)
    const [fileUpload, setFileUpload] = useState(0)

    const classShow = showModal ? 'show-modal' : ''

    const handleSubmit = (e) => {
        
    }

    const handleFileChange = (e) => {
        if(e.target.files.length > 0) {
            setFileIsThere(true)
            setFileUpload(URL.createObjectURL(e.target.files[0]))
        }
    }

    const node = useRef()

    const handleClickOutside = (e) => {
        if(node.current.contains(e.target)) {
            return
        }

        setShowModal(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    
    return (
        <>
            <div className="add-group-container">
                <button ref={node} onClick={() => setShowModal(!showModal)}>
                    {!showModal && 
                    <span className="add-icon">
                        <i className="fa fa-plus"/>
                    </span>}
                    {showModal ? 'Close' : 'Create a group'}
                </button>
            </div>
            <div className={`create-group-modal ${classShow}`} ref={node}>
                <div className="create-group-modal-content">
                    <h3 className="create-group-modal-title">Group Information</h3>
                    <form className="create-group-modal-form" onSubmit={handleSubmit}>
                        <input type="text" className="m-auto modal-form-input-title" placeholder="Add title"/>
                        <span className="modal-form-input-container">
                            {fileIsThere ? <img src={fileUpload} className="image-upload-preview"/>: ''}
                            <label htmlFor="image-upload" id="image-upload-label">{fileIsThere ? 'Image was selected.' : 'Browse for group image...'}</label>
                            <input id="image-upload" onChange={handleFileChange} type="file" accept="image/*" className="m-auto modal-form-input-file" />
                        </span>
                        <input type="submit" className="m-auto modal-form-input-submit" value="Add group"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateGroupButton
