import { create } from "zustand";

interface LoginmodalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginmodal = create<LoginmodalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useLoginmodal;