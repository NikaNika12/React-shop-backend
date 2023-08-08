import {makeAutoObservable} from "mobx";


export default class ArtStore {
    constructor() {
        this._subjects = [
            {id: 1, name: "Beach"},
            {id: 2, name: "Mountains"},
            {id: 3, name: "Sea"},
            {id: 4, name: "Human"},
        ]
        this._mediums = [
            {id: 1, name: "Acrylic"},
            {id: 2, name: "Watercolor"},
            {id: 3, name: "Oil"},
        ]
        this._arts = [
            {id: 1, name: "Moonlight on the seashore", price: 1500, currency: "€", likes: 14, image: './Image1.jpg', Medium: "Acrylic", Subject: "Sea", Material: "Canvas", Year: "2022", size: "23.6 W x 11.6 H x 0.1 D in"},
            {id: 2, name: "Summer seaside in Turkey", price: 450, currency: "€", likes: 8, image: './Image2.jpg', Medium: "Acrylic", Subject: "Beach", Material: "Canvas", Year: "2022", size: "27.6 W x 23.2 H x 0.6 D in"},
            {id: 3, name: "The lost world in mountains", price: 6300, currency: "€", likes: 21, image: './Image3.jpg', Medium: "Oil", Subject: "Mountains", Material: "Canvas", Year: "2022", size: "15.7 W x 11.8 H x 0.6 D in"}
        ]
        this._selectedSubject = {} //выделение при наведении выбранного обьекта
        this._selectedMedium = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setSubjects(subjects) {
        this._subjects = subjects
    }
    setMediums(mediums) {
        this._mediums = mediums
    }
    setArts(arts) {
        this._arts = arts
    }

    setSelectedSubject(subject){
        this.setPage(1)
        this._selectedSubject = subject
    }

    setSelectedMedium(medium){
        this.setPage(1)
        this._selectedMedium = medium
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get subjects() {
        return this._subjects
    }
    get mediums() {
        return this._mediums
    }
    get arts() {
        return this._arts
    }
    get selectedSubject() {
        return this._selectedSubject
    }
    get selectedMedium() {
        return this._selectedMedium
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}