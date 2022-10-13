import {$authHost, $host} from "./index";

export const createSubject = async (subject) => {
    const {data} = await $authHost.post('api/subject', subject)
    return data
}

export const fetchSubjects = async () => {
    const {data} = await $host.get('api/subject')
    return data
}

export const createMedium = async (medium) => {
    const {data} = await $authHost.post('api/medium', medium)
    return data
}

export const fetchMediums = async () => {
    const {data} = await $host.get('api/medium', )
    return data
}

export const createArt = async (art) => {
    const {data} = await $authHost.post('api/art', art)
    return data
}

export const fetchArts = async (subjectId, mediumId) => {
    const {data} = await $host.get('api/art', {params: {
        subjectId, mediumId
        }})
    return data
}

export const fetchOneArt = async (id) => {
    const {data} = await $host.get('api/art/' + id)
    return data
}
