"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OverlayContextType {
    isOverlayVisible: boolean;
    overlayContent: ReactNode;
    showOverlay: () => void;
    hideOverlay: () => void;
    setOverlayContent: (content: ReactNode) => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const useOverlay = (): OverlayContextType => {
    const context = useContext(OverlayContext);
    if (!context) {
        throw new Error('useOverlay must be used within an OverlayProvider');
    }
    return context;
};

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [overlayContent, setOverlayContent] = useState<ReactNode>(null);

    const showOverlay = () => setOverlayVisible(true);
    const hideOverlay = () => setOverlayVisible(false);

    return (
        <OverlayContext.Provider
            value={{
                isOverlayVisible,
                overlayContent,
                showOverlay,
                hideOverlay,
                setOverlayContent,
            }}
        >
            {children}
        </OverlayContext.Provider>
    );
};