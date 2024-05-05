import { postAPI } from "../utils/rest"

export const fetchListJobs = (limit = 10, offset = 0) => {
    return postAPI("https://api.weekday.technology/adhoc/getSampleJdJSON", { limit, offset })
}