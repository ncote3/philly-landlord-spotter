import Fuse from "fuse.js";

export default function fuzzyMatchLandlords(term, data, result_length) {
    const options = {
        includeScore: true,
    }
    const fuse = new Fuse(data, options);
    let result = fuse.search(term);
    if (result.length > result_length) {
        result = result.slice(0, result_length);
    }
    return result;
}
