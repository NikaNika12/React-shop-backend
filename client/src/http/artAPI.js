import {$authHost, $host} from "./index";

export const createSubject = async (subject) => {
    const {data} = await $authHost.post('api/type', subject)
    return data
}

export const fetchSubjects = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createMedium = async (medium) => {
    const {data} = await $authHost.post('api/brand', medium)
    return data
}

export const fetchMediums = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createArt = async (art) => {
    const {data} = await $authHost.post('api/device', art)
    return data
}

export const fetchArts = async (subjectId, mediumId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        subjectId, mediumId, page, limit
    }})
    return data
}

export const fetchOneArt = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
