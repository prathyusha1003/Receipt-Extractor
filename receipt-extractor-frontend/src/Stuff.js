import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { uploadReceipt } from '../Api';

const UploadForm = ({ setReceiptData }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!file) return;
        try {
            setLoading(true);
            const data = await uploadReceipt(file);
            setReceiptData(data);
        } catch (err) {
            alert('Upload failed');
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{
            fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '80px'
        }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '40px', marginTop: '-10px' }}>Receipt Extractor</h1>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    width: '600px',
                    height: '300px',
                    border: '2px dashed #aaa',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px'
                }}
            >
                <FaCloudUploadAlt size={50} color="#666" style={{ marginBottom: '20px' }} />
                <label
                    style={{
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        padding: '15px 25px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        fontSize: '20px',
                    }}
                >
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    Choose file to Upload
                </label>
                <p style={{ color: '#666', fontSize: '16px', marginBottom: '15px' }}>or</p>
                <p style={{ color: '#666', fontSize: '20px', marginTop: '4px' }}>drag and drop file here</p>
            </div>

            {file && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <p>{file.name} ({(file.size / 1024).toFixed(2)} KB)</p>
                    <button
                        onClick={handleUpload}
                        style={{
                            marginTop: '10px',
                            padding: '6px 16px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Submit
                    </button>
                </div>
            )}

            {loading && (
                <p style={{ marginTop: '20px', color: '#007bff' }}>Extracting...</p>
            )}
        </div>
    );
};

export default UploadForm;