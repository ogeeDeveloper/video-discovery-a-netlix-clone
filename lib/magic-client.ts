
import { Magic } from 'magic-sdk';

// Function that takes in key and checks if the window is defined
const createMagic = ()=> {
    return typeof window !== "undefined" && new Magic(process.env.MAGIC_PUBLISHABLE_API_KEY); // ✨
}

export const magic = createMagic()

console.log("Magic setup test", magic)