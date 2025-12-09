"use client";
import { useState } from 'react';

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div>
            {/* Main Image */}
            <div style={{
                height: '500px',
                background: '#fff',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '1px solid var(--border)'
            }}>
                <img
                    src={images[selectedImage]}
                    alt={`${productName} - Image ${selectedImage + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        style={{
                            height: '100px',
                            background: '#fff',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            border: selectedImage === index ? '2px solid var(--primary)' : '1px solid var(--border)',
                            cursor: 'pointer',
                            padding: '4px',
                            transition: 'all 0.2s'
                        }}
                    >
                        <img
                            src={image}
                            alt={`${productName} thumbnail ${index + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
