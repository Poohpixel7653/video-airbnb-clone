import { create } from "zustand";

interface SearchmodalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSearchModal = create<SearchmodalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSearchModal;