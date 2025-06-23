import React from 'react';

const ReceiptDisplay = ({ data }) => {
    if (!data) return null;

    const { vendor, date, currency, gst, total, items } = data;

    return (
        <div style={{
            width: '300px',
            maxHeight: '360px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}>
            <h3 style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{vendor}</h3>
            <p style={{ margin: '4px 0' }}>{date}</p>
            <p style={{ margin: '4px 0', color: '#888' }}>{currency || 'Currency not detected'}</p>

            <hr style={{ margin: '12px 0' }} />

            {Object.keys(items).length > 0 ? (
                Object.entries(items).map(([key, value], index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
                        <span>{key}</span>
                        <span>${parseFloat(value).toFixed(2)}</span>
                    </div>
                ))
            ) : (
                <div style={{ textAlign: 'center', margin: '12px 0', color: '#999' }}>...</div>
            )}

            <hr style={{ margin: '15px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0' }}>
                <strong>GST/Tax</strong>
                <strong>${parseFloat(gst || 0).toFixed(2)}</strong>
            </div>

            <hr style={{ margin: '15px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                <strong>Total</strong>
                <strong style={{ fontSize: '18px' }}>${parseFloat(total || 0).toFixed(2)}</strong>
            </div>
        </div>
    );
};

export default ReceiptDisplay;