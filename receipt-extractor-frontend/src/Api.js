export const uploadReceipt = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8080/extract-receipt-details", {
        method: "POST",
        body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");

    return await res.json();
};