import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimes, FaFileAlt } from 'react-icons/fa';
import { uploadReceipt } from '../Api';
import ReceiptDisplay from './ReceiptDisplay';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [receiptData, setReceiptData] = useState(null); 

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

    const resetUpload = () => {
        setFile(null);
        setReceiptData(null); 
    };

    return (
        <div style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '60px',
        }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '40px' }}>Receipt Extractor</h1>

            {!file && !loading && !receiptData && (
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
                        borderRadius: '8px',
                        marginBottom: '30px'
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
            )}

            {/* Uploaded File Card */}
            {file && !loading && !receiptData && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #999999',
                    backgroundColor: '#f5f5f5',
                    padding: '25px 20px',
                    borderRadius: '8px',
                    width: '500px',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    marginBottom: '20px',
                    marginTop: '20px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaFileAlt size={30} color="#555" style={{ marginRight: '12px' }} />
                        <div>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>{file.name}</p>
                            <small style={{ color: '#555' }}>
                                Uploaded on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </small>
                        </div>
                    </div>
                    <FaTimes
                        size={20}
                        color="#a00"
                        style={{ cursor: 'pointer' }}
                        onClick={resetUpload}
                        title="Remove file"
                    />
                </div>
            )}

            {/* Submit Button */}
            {file && !loading && !receiptData && (
                <button
                    onClick={handleUpload}
                    style={{
                        padding: '15px 20px',
                        fontSize: '16px',
                        border: '2px solid #000',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                        marginTop: '40px',
                    }}
                >
                    Extract Receipts Contents
                </button>
            )}

            {/* Loader */}
            {loading && (
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <p style={{ fontSize: '20px', color: '#333', marginBottom: '12px' }}>
                        Extracting receipt contents...
                    </p>
                    <div style={{
                        width: '270px',
                        height: '5px',
                        backgroundColor: '#eee',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        marginTop: '40px',
                    }}>
                        <div style={{
                            height: '100%',
                            width: '80px',
                            backgroundColor: '#007bff',
                            animation: 'slide 1.2s infinite'
                        }} />
                    </div>

                    <style>{`
                        @keyframes slide {
                            0%   { transform: translateX(-60px); }
                            50%  { transform: translateX(100px); }
                            100% { transform: translateX(-60px); }
                        }
                    `}</style>
                </div>
            )}

            {/* Display Extracted Receipt */}
            {receiptData && <ReceiptDisplay data={receiptData} />}
        </div>
    );
};

export default UploadForm;